import './App.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className='name'>Dvise</h1>
        <div className='header-items'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Features</a>
          <a href='#'>Contact us</a>
          <button>Get a guide</button>
        </div>
      </div>
      <img src={require('../src/assets/service3.png')} />
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

export default App;
