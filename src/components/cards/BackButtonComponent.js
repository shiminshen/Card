'use strict';

import React from 'react';

require('styles/cards/BackButton.styl');

class BackButtonComponent extends React.Component {

  handleClick = () => {
    let {clickEvent} = this.props;
    clickEvent(1);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="backbutton-component">
        <i className="fa fa-angle-left">
        {name}</i>
      </div>
    );
  }
}

BackButtonComponent.displayName = 'CardsBackButtonComponent';

// Uncomment properties you need
// BackButtonComponent.propTypes = {};
// BackButtonComponent.defaultProps = {};

export default BackButtonComponent;
