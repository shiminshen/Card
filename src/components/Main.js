require('normalize.css');
require('styles/App.css');

import React from 'react';

import ProfileCard from './cards/ProfileCardComponent.js';

class AppComponent extends React.Component {
  render() {
    const {actions, cards} = this.props;
    return (
      <div className="index">
        <h1>Profile Card</h1>
        <ProfileCard nextCardLayer={actions.nextCardLayer} prevCardLayer={actions.prevCardLayer} cards={cards}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
