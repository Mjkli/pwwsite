import './App.css';
import Navbar from './components/NavBar/NavBar';
import Core from './components/Core/core';
import { useState, useEffect } from 'react';


function App() {

  const [mainPage, setMainPage] = useState("Home");



  return (
    <div className="app">
      <div className="navcontainer">
        <Navbar setMainPage={setMainPage} />
      </div>
      <Core mainPage={mainPage} />
    </div>
  );
}

export default App;
