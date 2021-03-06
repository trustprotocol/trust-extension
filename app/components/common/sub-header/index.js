import React, { Component } from 'react';
import FontMedium from '../fonts/font-medium';
import IconContainer from '../icon-container';
import { MoreVertIcon } from '../icon';
import CrustMenu from '../crust-menu';
import './styles.css';

export default class SubHeader extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      icon, subMenu, onSubMenuOptionsChange, menuWidth
    } = this.props;
    return (
      <div className="sub-header-container">
        <div className="sub-header-left">
          <IconContainer
            className="sub-header-icon clickable-icon"
            onClick={this.props.backBtnOnClick}
          >
            {icon}
          </IconContainer>
          <FontMedium className="sub-header-title" text={this.props.title} />
        </div>
        {subMenu && subMenu.length > 0 && (
          <div>
            <MoreVertIcon onClick={this.handleClick} color="#858B9C" className="more-list-icon" />
            <CrustMenu
              options={subMenu}
              onChange={option => {
                onSubMenuOptionsChange(option);
              }}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              width={menuWidth}
            />
          </div>
        )}
      </div>
    );
  }
}
