!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3417)}({0:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1:function(t,e,r){var n=r(90);function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var u=a?Object.getOwnPropertyDescriptor(t,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=t[i]}return r.default=t,e&&e.set(t,r),r}},124:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BG_DAPP_RESPONSE=void 0,e.BG_DAPP_RESPONSE="DAPP/CONTENT_SCRIPT_RESPONSE"},13:function(t,e,r){t.exports=r(298)},135:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getManifest=e.sendMessage=void 0;var n=r(54);e.sendMessage=function(t){var e=n.runtime;return new Promise((function(r,n){e.sendMessage(t,(function(t){var o=e.lastError;o||r(t),n(o)}))}))},e.getManifest=function(){var t=n.runtime;return new Promise((function(e,r){try{e(t.getManifest())}catch(t){r(t)}}))}},14:function(t,e){function r(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function u(t){r(i,o,a,u,s,"next",t)}function s(t){r(i,o,a,u,s,"throw",t)}u(void 0)}))}}},162:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CHANGE_ACCOUNT=e.GET_BALANCE=e.GET_ACCOUNTS=e.ERC777_SEND=e.ERC20_SEND=e.CONTRACT_READ=e.CONTRACT_CALL=e.SIGN_MESSAGE=e.ENABLE=e.SIGN=e.SEND=void 0,e.SEND="SEND",e.SIGN="SIGN",e.ENABLE="pub(authorize.tab)",e.SIGN_MESSAGE="SIGN_MESSAGE",e.CONTRACT_CALL="CONTRACT_CALL",e.CONTRACT_READ="CONTRACT_READ",e.ERC20_SEND="ERC20_SEND",e.ERC777_SEND="ERC777_SEND",e.GET_ACCOUNTS="pub(accounts.list)",e.GET_BALANCE="GET_BALANCE",e.CHANGE_ACCOUNT="CHANGE_ACCOUNT"},291:function(t,e,r){"use strict";r.p=chrome.extension.getURL("/js/")},298:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function _(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new v(n||[]);return a._invoke=function(t,e,r){var n=E;return function(o,a){if(n===A)throw new Error("Generator is already running");if(n===T){if("throw"===o)throw a;return g()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=G(i,r);if(u){if(u===S)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===E)throw n=T,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=A;var s=c(t,e,r);if("normal"===s.type){if(n=r.done?T:f,s.arg===S)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=T,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=_;var E="suspendedStart",f="suspendedYield",A="executing",T="completed",S={};function l(){}function p(){}function O(){}var N={};N[a]=function(){return this};var C=Object.getPrototypeOf,P=C&&C(C(B([])));P&&P!==r&&n.call(P,a)&&(N=P);var D=O.prototype=l.prototype=Object.create(N);function d(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function h(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,u){var s=c(t[o],t,a);if("throw"!==s.type){var _=s.arg,E=_.value;return E&&"object"==typeof E&&n.call(E,"__await")?e.resolve(E.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(E).then((function(t){_.value=t,i(_)}),(function(t){return r("throw",t,i,u)}))}u(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function G(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,G(t,r),"throw"===r.method))return S;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,S;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,S):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,S)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function y(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function B(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:g}}function g(){return{value:e,done:!0}}return p.prototype=D.constructor=O,O.constructor=p,p.displayName=s(O,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s(t,u,"GeneratorFunction")),t.prototype=Object.create(D),t},t.awrap=function(t){return{__await:t}},d(h.prototype),h.prototype[i]=function(){return this},t.AsyncIterator=h,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new h(_(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},d(D),s(D,u,"Generator"),D[a]=function(){return this},D.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=B,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(y),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),_=n.call(i,"finallyLoc");if(s&&_){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!_)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,S):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),y(r),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;y(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:B(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),S}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},3:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},3417:function(t,e,r){r(291),t.exports=r(3418)},3418:function(t,e,r){"use strict";var n=r(54);r(3419),function(t){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src",t),document.documentElement.appendChild(e)}(n.extension.getURL("js/inPageScript.bundle.js"))},3419:function(t,e,r){"use strict";var n=r(1),o=r(0),a=o(r(13)),i=o(r(14)),u=o(r(54)),s=n(r(162)),_=n(r(3420)),c=n(r(124));window.addEventListener("message",function(){var t=(0,i.default)(a.default.mark((function t(e){var r,n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.source===window){t.next=2;break}return t.abrupt("return");case 2:if(!e.data||!e.data.requestType){t.next=23;break}r=e.data,t.prev=4,t.t0=r.requestType,t.next=t.t0===s.ENABLE?8:t.t0===s.GET_ACCOUNTS?10:t.t0===s.SEND?12:t.t0===s.SIGN_MESSAGE?14:16;break;case 8:return _.authorizeDApp(r),t.abrupt("break",17);case 10:return _.getAccounts(r),t.abrupt("break",17);case 12:return _.submitTransaction(r),t.abrupt("break",17);case 14:return _.signMessage(r),t.abrupt("break",17);case 16:_.handleDefault(r);case 17:t.next=23;break;case 19:t.prev=19,t.t1=t.catch(4),n={message:t.t1.message,stack:t.t1.stack||{}},_.handleError(n,r);case 23:case"end":return t.stop()}}),t,null,[[4,19]])})));return function(e){return t.apply(this,arguments)}}()),u.default.runtime.onMessage.addListener((function(t){switch(t.type){case c.BG_DAPP_RESPONSE:_.dAppResponse(t);break;default:_.handleDefaultResponse(t)}return!0}))},3420:function(t,e,r){"use strict";var n=r(1),o=r(0);Object.defineProperty(e,"__esModule",{value:!0}),e.handleDefaultResponse=e.getAccounts=e.signMessage=e.submitTransaction=e.dAppResponse=e.authorizeDApp=e.handleError=e.handleDefault=e.success=e.failure=void 0;var a=o(r(13)),i=o(r(14)),u=o(r(3)),s=r(135),_=n(r(91)),c=n(r(124)),E=n(r(36));function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){(0,u.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var T={status:E.FAILURE,message:"failed"};e.failure=T;var S={status:E.SUCCESS,message:"success"};e.success=S,e.handleDefault=function(t){var e=A(A({},T),{},{message:"Wrong request type.",type:c.BG_DAPP_RESPONSE});window.postMessage(e,t.metadata.origin)},e.handleError=function(t,e){var r=A(A({},T),{},{message:t.message,type:c.BG_DAPP_RESPONSE});window.postMessage(r,e.metadata.origin)};var l=function(){var t=(0,i.default)(a.default.mark((function t(e){var r,n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.sendMessage)(A(A({},e),{},{type:_.BG_DAPP_AUTHORIZE}));case 2:void 0===(r=t.sent).result&&r.status!==E.FAILURE||(n=A(A({},r),{},{type:c.BG_DAPP_RESPONSE}),window.postMessage(n,"*"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.authorizeDApp=l;var p=function(){var t=(0,i.default)(a.default.mark((function t(e){var r;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=A({},e),window.postMessage(r,"*");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.dAppResponse=p;var O=function(){var t=(0,i.default)(a.default.mark((function t(e){var r,n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.sendMessage)(A(A({},e),{},{type:_.BG_DAPP_TXN_VALIDATE}));case 2:void 0===(r=t.sent).result&&r.status!==E.FAILURE||(n=A(A({},r),{},{type:c.BG_DAPP_RESPONSE}),window.postMessage(n,e.metadata.origin));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.submitTransaction=O;var N=function(){var t=(0,i.default)(a.default.mark((function t(e){var r,n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.sendMessage)(A(A({},e),{},{type:_.BG_DAPP_SIGN_MESSAGE}));case 2:void 0===(r=t.sent).result&&r.status!==E.FAILURE||(n=A(A({},r),{},{type:c.BG_DAPP_RESPONSE}),window.postMessage(n,e.metadata.origin));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.signMessage=N;var C=function(){var t=(0,i.default)(a.default.mark((function t(e){var r,n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.sendMessage)(A(A({},e),{},{type:_.BG_DAPP_GET_ACCOUUNTS}));case 2:void 0===(r=t.sent).result&&r.status!==E.FAILURE||(n=A(A({},r),{},{type:c.BG_DAPP_RESPONSE}),window.postMessage(n,e.metadata.origin));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.getAccounts=C,e.handleDefaultResponse=function(t){var e=A(A({},T),{},{message:"Something went wrong.",type:c.BG_DAPP_RESPONSE});window.postMessage(e,t.origin)}},36:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KEYPAIR_TYPES=e.KEYPAIR_SCHNORRKEL=e.KEYPAIR_EDWARDS=e.DUPLICATE_ALIAS=e.PERIOD=e.FAILURE=e.BAD_REQUEST=e.UNAUTHORIZED=e.SUCCESS=void 0,e.SUCCESS=200,e.UNAUTHORIZED=401,e.BAD_REQUEST=400,e.FAILURE=500,e.PERIOD=10,e.DUPLICATE_ALIAS=409;var n={text:"Edwards(ed25519)",value:"ed25519"};e.KEYPAIR_EDWARDS=n;var o={text:"Schnorrkel(sr25519)",value:"sr25519"};e.KEYPAIR_SCHNORRKEL=o;var a=[n,o];e.KEYPAIR_TYPES=a},54:function(t,e,r){const n=r(639);t.exports=new n},639:function(t,e){const r=["alarms","bookmarks","browserAction","commands","contextMenus","cookies","downloads","events","extension","extensionTypes","history","i18n","idle","notifications","pageAction","runtime","storage","tabs","webNavigation","webRequest","windows"],n="undefined"!=typeof chrome,o="undefined"!=typeof window,a="undefined"!=typeof browser;t.exports=function(){const t=this;if(r.forEach((function(e){if(t[e]=null,n)try{chrome[e]&&(t[e]=chrome[e])}catch(t){}if(o)try{window[e]&&(t[e]=window[e])}catch(t){}if(a){try{browser[e]&&(t[e]=browser[e])}catch(t){}try{t.api=browser.extension[e]}catch(t){}}})),a){try{browser&&browser.runtime&&(this.runtime=browser.runtime)}catch(t){}try{browser&&browser.browserAction&&(this.browserAction=browser.browserAction)}catch(t){}}}},90:function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},91:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BG_CRUST_UPDATE_CANDY_BALANCE=e.BG_CRUST_GET_TOKEN_LIST=e.BG_CONTRACT_UPDATE_TOKEN_BALANCES=e.BG_CONTRACT_GET_TOKEN_LIST=e.BG_CONTRACT_ADD=e.BG_DAPP_CHANGE_ACCOUNTS=e.BG_DAPP_GET_SIGN_MESSAGE=e.BG_DAPP_SIGN_MESSAGE=e.BG_DAPP_GET_ACCOUUNTS=e.BG_DAPP_CANCEL_REQUEST=e.BG_DAPP_TXN_SUBMIT=e.BG_DAPP_TXN_VALIDATE=e.BG_DAPP_UPDATE_WHITELIST=e.BG_GET_DAPP_ACCOUNTS_OPTIONS=e.BG_GET_DAPP_REQUESTS=e.BG_DAPP_AUTHORIZE=e.BG_ACCOUNT_IS_VALID_ADDRESS=e.BG_TXN_LIST=e.BG_TXN_GET=e.BG_TXN_SUBMIT=e.BG_TXN_CONFIRM=e.BG_TXN_FEE=e.BG_ADDRESS_BOOK_IS_NEW_ADDRESS=e.BG_ADDRESS_BOOK_REMOVE=e.BG_ADDRESS_BOOK_LIST=e.BG_ADDRESS_BOOK_ADD=e.BG_NETWORK_FORCE_CONNECT=e.BG_NETWORK_GET_DECIMALS=e.BG_NETWORK_UPDATE_DEVELOPERMODE=e.BG_NETWORK_GET_DEVELOPERMODE=e.BG_NETWORK_GET_UNITS=e.BG_NETWORK_UPDATE=e.BG_NETWORK_IS_CONNECTED=e.BG_NETWORK_CURRENT=e.BG_ACCOUNT_BALANCE=e.BG_ACCOUNTS_LIST=e.BG_ACCOUNTS_CURRENT_ACCOUNT=e.BG_ACCOUNTS_REMOVE_ACCOUNT=e.BG_CURRENT_ACCOUNTS_UPDATE=e.BG_ACCOUNTS_UPDATE_ALIAS=e.BG_ACCOUNTS_CREATE_SEED_WORDS=e.BG_ACCOUNTS_CREATE_ACCOUNT=e.BG_SET_HASH_KEY=e.BG_APP_IS_READY=e.BG_APP_IS_ONBOARDED=e.BG_APP_SET_ONBOARDED=void 0,e.BG_APP_SET_ONBOARDED="APP/ONBOARDED",e.BG_APP_IS_ONBOARDED="APP/IS_ONBOARDED",e.BG_APP_IS_READY="APP/IS_READY",e.BG_SET_HASH_KEY="APP/SET_HASH_KEY",e.BG_ACCOUNTS_CREATE_ACCOUNT="ACCOUNTS/CREATE_ACCOUNT",e.BG_ACCOUNTS_CREATE_SEED_WORDS="ACCOUNTS/CREATE_SEED_WORDS",e.BG_ACCOUNTS_UPDATE_ALIAS="ACCOUNTS/UPDATE_ALIAS",e.BG_CURRENT_ACCOUNTS_UPDATE="ACCOUNTS/UPDATE_CURRENT_ACCOUNT",e.BG_ACCOUNTS_REMOVE_ACCOUNT="ACCOUNTS/REMOVE_ACCOUNT",e.BG_ACCOUNTS_CURRENT_ACCOUNT="ACCOUNT/CURRENT",e.BG_ACCOUNTS_LIST="ACCOUNTS/LIST",e.BG_ACCOUNT_BALANCE="ACCOUNT/BALANCE",e.BG_NETWORK_CURRENT="NETWORK/CURRENT",e.BG_NETWORK_IS_CONNECTED="NETWORK/IS_CONNECTED",e.BG_NETWORK_UPDATE="NETWORK/UPDATE",e.BG_NETWORK_GET_UNITS="NETWORK/GET_UNITS",e.BG_NETWORK_GET_DEVELOPERMODE="NETWORK/GET_DEVELOPERMODE",e.BG_NETWORK_UPDATE_DEVELOPERMODE="NETWORK/UPDATE_DEVELOPERMODE",e.BG_NETWORK_GET_DECIMALS="NETWORK/DECIMALS",e.BG_NETWORK_FORCE_CONNECT="NETWORK/FORCE_CONNECT",e.BG_ADDRESS_BOOK_ADD="ADDRESS_BOOK/ADD",e.BG_ADDRESS_BOOK_LIST="ADDRESS_BOOK/LIST",e.BG_ADDRESS_BOOK_REMOVE="ADDRESS_BOOK/REMOVE",e.BG_ADDRESS_BOOK_IS_NEW_ADDRESS="ADDRESS_BOOK/IS_NEW_ADDRESS",e.BG_TXN_FEE="TXN/GET_FEES",e.BG_TXN_CONFIRM="TXN/CONFIRM",e.BG_TXN_SUBMIT="TXN/SUBMIT",e.BG_TXN_GET="TXN/GET",e.BG_TXN_LIST="TXNS/LIST",e.BG_ACCOUNT_IS_VALID_ADDRESS="ACCOUNT/ADDRESS",e.BG_DAPP_AUTHORIZE="DAPP/BG_DAPP_AUTHORIZE",e.BG_GET_DAPP_REQUESTS="DAPP/BG_GET_DAPP_REQUESTS",e.BG_GET_DAPP_ACCOUNTS_OPTIONS="DAPP/GET_ACCOUNT_OPTIONS",e.BG_DAPP_UPDATE_WHITELIST="DAPP/UPDATE_WHITELIST",e.BG_DAPP_TXN_VALIDATE="DAPP/TXN_VALIDATE",e.BG_DAPP_TXN_SUBMIT="DAPP/TXN_SUBMIT",e.BG_DAPP_CANCEL_REQUEST="DAPP/CANCEL_REQUEST",e.BG_DAPP_GET_ACCOUUNTS="DAPP/GET_ACCOUNTS",e.BG_DAPP_SIGN_MESSAGE="DAPP/SIGN_MESSAGE",e.BG_DAPP_GET_SIGN_MESSAGE="DAPP/GET_SIGN_MESSAGE",e.BG_DAPP_CHANGE_ACCOUNTS="DAPP/CHANGE_ACCOUNTS",e.BG_CONTRACT_ADD="CONTRACT/ADD",e.BG_CONTRACT_GET_TOKEN_LIST="CONTRACT/GET_TOKEN_LIST",e.BG_CONTRACT_UPDATE_TOKEN_BALANCES="CONTRACT/UPDATE_TOKEN_BALANCES",e.BG_CRUST_GET_TOKEN_LIST="CRUST/GET_TOKEN_LIST",e.BG_CRUST_UPDATE_CANDY_BALANCE="CRUST/UPDATE_CANDY_BALANCE"}});