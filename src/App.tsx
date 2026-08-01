import './App.css';
import Navbar from './components/NavBar/NavBar';
import Core from './components/Core/core';
import { useState, useEffect } from 'react';
import React from 'react';


function App() {

  const [mainPage, setMainPage] = useState("Home");
  
  return (
    <>
      <div className="navcontainer">
        <Navbar setMainPage={setMainPage} />
      </div>
      <div className="app">
        <Core mainPage={mainPage} setMainPage={setMainPage} />
      </div>
    </>
  );
}

export default App;
