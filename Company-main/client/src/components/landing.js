import './landing.css';
import React, { Component } from 'react';
import svg from '../assets/meta.svg';
import Offer from './offer';
import Header from './header';

function Landing() {
  return (
    <div className="App" id='home'>
      <img className='gif' src={svg} />
      <div className='parent'>
      <div className='welcome-text'>
        <h1>Web / App Development Service</h1>
        <h2>Time to get organised</h2>
        <section></section>
        <p>Our team is always ready to help you create your dream interface for your company,
          you just have to tell us what type of interface you want, we have no limitations
        </p>
        <button className='getStarted'>Get Started</button>
        <button className='learnMore'>Learn more</button>
      </div>
      </div>
    </div>
  );
}

export default Landing;
