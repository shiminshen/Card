'use strict';

import React from 'react';
import StartCard from './StartCardComponent.js';
// import SubCard from './SubCardComponent.js';

require('styles/cards/ProfileCard.styl');
require('font-awesome/css/font-awesome.css');

class ProfileCardComponent extends React.Component {
  render() {
    const {nextCardLayer, cards} = this.props;
    console.log(cards);
    // let page = cards.layer == 0 ?  <StartCard nextCardLayer={nextCardLayer} cards={cards}/>
    //   : <SubCard nextCardLayer={nextCardLayer} cards={cards}/>

    return (
      <div>
        <StartCard nextCardLayer={nextCardLayer} cards={cards}/>
      </div>
    );
  }
}

ProfileCardComponent.displayName = 'CardsProfileCardComponent';

// Uncomment properties you need
// ProfileCardComponent.propTypes = {};
// ProfileCardComponent.defaultProps = {};

export default ProfileCardComponent;
