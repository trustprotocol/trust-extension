import React, { Component } from 'react';
import { IconSettings } from '../common/icon';
import CrustMenu from '../common/crust-menu';
import { DISABLE_SETTINGS_PAGES_GROUP } from '../../constants/navigation';

export default class Options extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    const { page } = this.props;
    if (!DISABLE_SETTINGS_PAGES_GROUP.includes(page)) {
      this.setState({ anchorEl: event.currentTarget });
    }
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      isDeveloperMode,
      onToggleDeveloperMode,
      options,
      onOptionsChange,
      menuWidth,
      ...otherProps
    } = this.props;
    return (
      <div {...otherProps}>
        <IconSettings style={{ color: '#111A34', fontSize: '18px' }} onClick={this.handleClick} />
        <CrustMenu
          isDeveloperMode={isDeveloperMode}
          onToggleDeveloperMode={onToggleDeveloperMode}
          options={options}
          onChange={onOptionsChange}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          width={menuWidth}
        />
      </div>
    );
  }
}
