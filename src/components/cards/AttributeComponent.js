'use strict';

import React from 'react';

require('styles/cards/Attribute.styl');

class AttributeComponent extends React.Component {

  handleClick = () => {
    const {nextCardLayer} = this.props;
    nextCardLayer(1);
  }

  render() {
    const {name} = this.props;
    return (
      <div onClick={this.handleClick} className="attribute-component">
        {name}<i className="fa fa-angle-right"></i>
      </div>
    );
  }
}

AttributeComponent.displayName = 'CardsAttributeComponent';

// Uncomment properties you need
// AttributeComponent.propTypes = {};
// AttributeComponent.defaultProps = {};

export default AttributeComponent;
