'use strict';

import React from 'react';
import AttributeList from './AttributeListComponent.js';

require('styles/cards/StartCard.styl');

class StartCardComponent extends React.Component {
  render() {
    const {cards, nextCardLayer} = this.props;

    let basicAttribute = cards.layer > 0 ? null :
      (
        <div className='basic-list'>
          <img src='https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11406875_937421479647598_4549915832928174937_n.jpg?oh=b590f1c6dc027d9a72f5fb6936b16a81&oe=575ACA54'></img>
          <p>Shi Min Shen</p>
        </div>
      )

    return (
      <div className="startcard-component">
        {basicAttribute}
        <AttributeList nextCardLayer={nextCardLayer} cards={cards}/>

        <div className='footer'></div>
      </div>
    );
  }
}

StartCardComponent.displayName = 'CardsStartCardComponent';

// Uncomment properties you need
// StartCardComponent.propTypes = {};
// StartCardComponent.defaultProps = {};

export default StartCardComponent;
