import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import Songs from './components/Songs/Songs.jsx';

function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Hero/>
      <Section/>
      <Songs/>
    </div>
    </>
  );
}

export default App;
