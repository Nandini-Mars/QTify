import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import "./Styles.css";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
