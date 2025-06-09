import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SkillsRadar from './components/SkillsRadar';
import ThemeToggle from './components/ThemeToggle';
import SpiderFacts from './components/SpiderFacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <SkillsRadar />
      <SpiderFacts />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
