'use strict';

import React from 'react';
import Attribute from './AttributeComponent.js';

require('styles/cards/AttributeList.styl');

class AttributeListComponent extends React.Component {
  getList = () => {
    let categoryList = [ 'Apperance', 'Personality', 'Relationship', 'Job', 'Learning Experience'];
    let list = [];

    const {nextCardLayer} = this.props;

    for (var i = 0, len = categoryList.length; i < len; i++) {
      list.push(
        <Attribute name={categoryList[i]} nextCardLayer={nextCardLayer}/>
      ) 
    }
    return list;
  }
  render() {
    return (
      <div className="attributelist-component">
        {list}
      </div>
    );
  }
}

AttributeListComponent.displayName = 'CardsAttributeListComponent';

// Uncomment properties you need
// AttributeListComponent.propTypes = {};
// AttributeListComponent.defaultProps = {};

export default AttributeListComponent;
