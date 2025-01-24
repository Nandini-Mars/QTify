import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import SongTabs from './components/SongTabs/SongTabs';
import './App.css';

function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Hero/>
      <Section/>
      <SongTabs/>
    </div>
    </>
  );
}

export default App;
