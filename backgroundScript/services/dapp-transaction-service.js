import BN from 'bn.js';
import { formatNumber, bnToBn } from '@polkadot/util';
import { createType } from '@polkadot/types';
import { Metadata } from '@polkadot/metadata';
import {
  getTransactionFees,
  isValidTxnAmount,
  getTxnError,
  updateTransactionState,
  getFeesByPaymentInfo,
  getTokenBalance,
  isValidTokenAmount
} from './transaction-service';
import * as TXAPI from '../apis/tx';
import { getMetaCalls, getApi } from '../apis/chain';
import { getBalance, valueFormatter } from './balance-service';
import { findChain } from '../../lib/constants/chain';
import * as Transaction from '../../lib/constants/transaction';
import { validateDappTxnObject } from '../../lib/services/validation-service';
import { getAccount } from './account-service';
import * as NetworkService from './network-service';

export const PERIOD = 10;

//Original Source: https://github.com/polkadot-js/extension
//Original Author: Jaco Greeff
const decodeMethod = (data, isDecoded, chain) => {
  let json = null;
  let method = null;

  try {
    if (isDecoded && chain.specVersion) {
      const metaCalls = getMetaCalls();
      if (metaCalls) {
        // eslint-disable-next-line no-unused-vars
        const metadata = new Metadata(getApi().registry, Buffer.from(metaCalls, 'base64'));
      }
      method = getApi().registry.createType('Call', data);
      json = method.toJSON();
    }
  } catch (error) {
    json = null;
    method = null;
  }

  return { json, method };
};
const getPayload = request => {
  const payload = createType(getApi().registry, 'ExtrinsicPayload', request, {
    version: request.version,
  });
  return payload;
};

const mortalityAsString = async (exERA, hexBlockNumber) => {
  try {
    if (exERA.isImmortalEra) {
      return 'immortal';
    }
    const blockNumber = bnToBn(hexBlockNumber);
    const mortal = exERA.asMortalEra;
    return `mortal, valid from #${formatNumber(mortal.birth(blockNumber))} to #${formatNumber(
      mortal.death(blockNumber),
    )}`;
  } catch (err) {
    return 'working on mortality';
  }
};
const createTxnUIObject = async txnPayload => {
  const {
    address, blockHash, blockNumber, genesisHash, method, specVersion
  } = txnPayload;
  const chain = findChain(genesisHash);
  const payload = getPayload(txnPayload);
  const { era, nonce, tip } = payload;

  const sVersion = bnToBn(specVersion).toNumber();
  const mortality = await mortalityAsString(era, blockNumber);
  const decodedMethod = decodeMethod(method, true, chain, sVersion);
  const {
    method: { sectionName, methodName, meta },
    json,
  } = decodedMethod;
  const note = meta.documentation.join(' ');
  const { dest, value, target, amount } = json.args;

  return {
    address,
    blockHash,
    chain: chain.name,
    sVersion,
    mortality,
    nonce: formatNumber(nonce),
    tip: formatNumber(tip),
    sectionName,
    method: `${sectionName}.${methodName}`,
    dest: sectionName === 'candy' ? target : dest,
    value: sectionName === 'candy' ? bnToBn(amount) : bnToBn(value),
    note,
  };
};
export const setNetwork = async txnPayload => {
  const { genesisHash } = txnPayload;
  const chain = findChain(genesisHash);
  const network = NetworkService.getNetworkByName(chain.name);
  await NetworkService.updateCurrentNetwork(network);
  return network;
};

export const validateDappTransaction = async transaction => {
  // validate transaction object

  const vTransaction = validateDappTxnObject(transaction);

  if (vTransaction !== undefined) return vTransaction;

  const txnError = getTxnError();
  const { url, txnPayload, network } = transaction;

  // creating txnForUI object
  const txnForUI = await createTxnUIObject(txnPayload);
  const { address, value, dest, sectionName } = txnForUI;

  // get Txn Fees.
  const transactionLength = Transaction.SIGNATURE_SIZE;
  const txnType = Transaction.TRANSFER_COINS;
  const tokenSelected = {tokenSymbol: sectionName === 'candy' ? 'Candy' : 'CRU'};
  const fees = await getFeesByPaymentInfo(txnType, address, dest, new BN(value), tokenSelected); // in femto
  const balance = await getTokenBalance(address, tokenSelected); // in femto
  const { totalFee } = fees;
  const totalAmount = new BN(value).add(new BN(fees.totalFee));
  // get current balance
  const balanceInBN = new BN(balance);

  const newTransaction = {
    txnForUI: {
      ...txnForUI,
      url,
      transferFee: valueFormatter(fees.totalFee),
      transferAmount: valueFormatter(value),
      totalTransferAmount: valueFormatter(totalAmount),
    },
    txnPayload,
  };

  // check for sufficient balance
  const isValidAmount = await isValidTokenAmount(balanceInBN, totalAmount, network, new BN(value), new BN(totalFee), tokenSelected, address);
  if (!isValidAmount) {
    txnError.isError = true;
    txnError.isAmountError = true;
    txnError.toAmountErrorMessage = 'Insufficient Balance';
  }
  return {
    ...newTransaction,
    ...txnError,
  };
};

export const signTransaction = async (txnPayload, password) => {
  // For storing txn in TXN_LIST
  const txnForUI = await createTxnUIObject(txnPayload);
  const { address, value, dest } = txnForUI;
  const account = getAccount(address);
  const network = NetworkService.getCurrentNetwork();
  const metadata = {
    to: dest,
    fAmount: value,
    account: { address },
    transferAmount: valueFormatter(value),
  };
  const transaction = {
    metadata,
    internal: { address, network },
    txnType: Transaction.TRANSFER_COINS,
  };

  // create signature for Dapp
  const signature = await TXAPI.getSignature(account, txnPayload, password);

  // Fetch Transaction State
  const txnHash = '';
  await updateTransactionState(transaction, txnHash, Transaction.DAPP);

  return signature;
};
