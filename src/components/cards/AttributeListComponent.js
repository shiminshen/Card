'use strict';

import React from 'react';
import Attribute from './AttributeComponent.js';

require('styles/cards/AttributeList.styl');

class AttributeListComponent extends React.Component {

  getList = () => {
    let categoryList = [ 'Apperance', 'Personality', 'Relationship', 'Job', 'Learning Experience'];
    let list = [];

    const {nextCardLayer, cards} = this.props;

    if (cards.layer > 0) {
      // show deeper layer attributes
      for (var i = 0, len = 10; i < len; i++) {
        list.push(
          <Attribute name={'test'} nextCardLayer={nextCardLayer}/>
        );
      }
    } else {
      // show the first layer attributes
      for (var i = 0, len = categoryList.length; i < len; i++) {
        list.push(
          <Attribute name={categoryList[i]} nextCardLayer={nextCardLayer}/>
        ); 
      }
    }
    return list;
  }

  render() {
    let list = this.getList();

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
