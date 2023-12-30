import './App.css';
import React, { Component } from 'react';
import Header from './components/header';
import Landing from './components/landing';
import Offer from './components/offer';
import Sign from './components/sign';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signUp';

function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <Landing/>
    //   <Offer/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="offer" element={<Offer />} />
        <Route path="sign" element={<Sign />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
