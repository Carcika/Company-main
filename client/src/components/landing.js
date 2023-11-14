import './landing.css';
import React, { Component } from 'react';

function Landing() {
  return (
    <div className="App">
      <img className='service' src={require('../assets/service7.png')} />
      <div className='welcome-text'>
        <h1>We Design Interfaces That Users Love</h1>
        <p>Our team is always ready to help you create your dream interface for your company,
          you just have to tell us what type of interface you want, we have no limitations
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default Landing;
