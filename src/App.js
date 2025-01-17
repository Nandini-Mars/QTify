import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import TopAlbum from './components/Card/Card.jsx';
import Section from './components/Section/Section.jsx;'
import "./Styles.css";

function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Hero/>
      <Section/>
    </div>
    </>
  );
}

export default App;
