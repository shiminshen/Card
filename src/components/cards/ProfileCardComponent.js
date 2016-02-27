'use strict';

import React from 'react';
import StartCard from './StartCardComponent.js';

require('styles/cards/ProfileCard.styl');
require('font-awesome/css/font-awesome.css');

class ProfileCardComponent extends React.Component {
  render() {
    return (
      <StartCard/>
    );
  }
}

ProfileCardComponent.displayName = 'CardsProfileCardComponent';

// Uncomment properties you need
// ProfileCardComponent.propTypes = {};
// ProfileCardComponent.defaultProps = {};

export default ProfileCardComponent;
