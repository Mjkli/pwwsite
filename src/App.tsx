import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home'
import Management from './pages/management';
import RnD from './pages/RnD';
import Security from './pages/security';
import Demo from './pages/Demo';
import Merch from './pages/Merch';
import Investment from './pages/Investment';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Management />
      <RnD />
      <Security />
      <Demo />
      <Investment />
      <Merch />
    </>
  );
}

export default App;
