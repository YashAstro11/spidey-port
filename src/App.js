import React, { Suspense, lazy } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AskSpidey from './components/AskSpidey';
import BackToTop from './components/BackToTop';
import SpideyBlog from './components/SpideyBlog';

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero'));
const SpiderTimeline = lazy(() => import('./components/SpiderTimeline'));
const SkillsRadar = lazy(() => import('./components/SkillsRadar'));
const Projects = lazy(() => import('./components/Projects'));
const SpiderFacts = lazy(() => import('./components/SpiderFacts'));
const SpiderScan = lazy(() => import('./components/SpiderScan'));
const Contact = lazy(() => import('./components/Contact'));



function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />

      <Suspense fallback={<div className="loader">🕸️ Loading...</div>}>
        <section id="hero"><Hero /></section>
        <section id="timeline"><SpiderTimeline /></section>
        <section id="skills"><SkillsRadar /></section>
        <section id="projects"><Projects /></section>
        <section id="blog"><SpideyBlog /></section>
        <SpiderFacts />
        <SpiderScan />
        <section id="contact"><Contact /></section>
      </Suspense>

      <AskSpidey />
      <BackToTop />
    </div>
  );
}

export default App;
