import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Landing from './components/landing';
import Offer from './components/offer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Offer/>
    </div>
  );
}

export default App;
