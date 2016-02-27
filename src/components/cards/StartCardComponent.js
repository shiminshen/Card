'use strict';

import React from 'react';

require('styles/cards/StartCard.styl');

class StartCardComponent extends React.Component {
  render() {
    return (
      <div className="startcard-component">
        <div className='basic-list'>
          <img src='https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11406875_937421479647598_4549915832928174937_n.jpg?oh=b590f1c6dc027d9a72f5fb6936b16a81&oe=575ACA54'></img>
          <p>Shi Min Shen</p>
        </div>
        <div className='category-list'>
          <div className='category'>Apperance<i className="fa fa-angle-right"></i></div>
          <div className='category'>Personality<i className="fa fa-angle-right"></i></div>
          <div className='category'>Relationship<i className="fa fa-angle-right"></i></div>
          <div className='category'>Job<i className="fa fa-angle-right"></i></div>
          <div className='category'>Learning experience<i className="fa fa-angle-right"></i></div>
        </div>
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
