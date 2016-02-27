'use strict';

import React from 'react';

require('styles/cards/SubCard.styl');

class SubCardComponent extends React.Component {
  render() {
    return (
      <div className="subcard-component">
        Please edit src/components/cards//SubCardComponent.js to update this component!
      </div>
    );
  }
}

SubCardComponent.displayName = 'CardsSubCardComponent';

// Uncomment properties you need
// SubCardComponent.propTypes = {};
// SubCardComponent.defaultProps = {};

export default SubCardComponent;
