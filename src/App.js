import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import TopAlbum from './components/Card/Card.jsxs'
import "./Styles.css";

function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Hero/>
      <TopAlbum/>
    </div>
    </>
  );
}

export default App;
