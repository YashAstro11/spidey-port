import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SkillsRadar from './components/SkillsRadar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SkillsRadar />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
