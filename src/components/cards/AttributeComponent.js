'use strict';

import React from 'react';

require('styles/cards/Attribute.styl');

class AttributeComponent extends React.Component {
  render() {
    const {nextCardLayer, name} = this.props;
    return (
      <div className="attribute-component">
        <div onClick={nextCardLayer(1)} className='category'>{name}<i className="fa fa-angle-right"></i></div>
      </div>
    );
  }
}

AttributeComponent.displayName = 'CardsAttributeComponent';

// Uncomment properties you need
// AttributeComponent.propTypes = {};
// AttributeComponent.defaultProps = {};

export default AttributeComponent;
