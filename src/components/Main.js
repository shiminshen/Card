require('normalize.css');
require('styles/App.css');

import React from 'react';

import ProfileCard from './cards/ProfileCardComponent.js';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Profile Card</h1>
        <ProfileCard/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
