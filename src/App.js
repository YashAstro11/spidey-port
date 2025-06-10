import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SkillsRadar from './components/SkillsRadar';
import ThemeToggle from './components/ThemeToggle';
import SpiderFacts from './components/SpiderFacts';
import AskSpidey from './components/AskSpidey';
import SpiderTimeline from './components/SpiderTimeline';
import SpiderScan from './components/SpiderScan';

function App() {
  return (
    <div className="App">
    <Navbar />
    <ThemeToggle />
    <section id="hero"><Hero /></section>
    <section id="timeline"><SpiderTimeline /></section>
    <section id="skills"><SkillsRadar /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
    <SpiderFacts />
    <SpiderScan />
    <AskSpidey />
   </div>  
  );
}

export default App;
