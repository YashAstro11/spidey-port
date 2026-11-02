import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Core components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import SpiderFacts from './components/SpiderFacts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import AskSpidey from './components/AskSpidey';

function App() {
  useEffect(() => {
    // Initialize AOS scroll animations with smooth timing
    AOS.init({
      duration: 650,
      once: true,
      offset: 70,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="App">
      {/* Sticky Command Center Navbar */}
      <Navbar />

      <main id="main-content">
        {/* Cinematic Hero Introduction */}
        <Hero />

        {/* Origin Story: Behind the Mask */}
        <div data-aos="fade-up">
          <About />
        </div>

        {/* Professional Journey: SlotinSolutions Internship & Degree */}
        <div data-aos="fade-up">
          <Experience />
        </div>

        {/* Technical Capabilities Matrix */}
        <div data-aos="fade-up">
          <Skills />
        </div>

        {/* Featured Products: Jinete, LearnTok (Live), Town Ride, BolYaar */}
        <div data-aos="fade-up">
          <Projects />
        </div>

        {/* Verified Certifications & Leadership */}
        <div data-aos="fade-up">
          <Achievements />
        </div>

        {/* Spider Scan & Direct Resume Access */}
        <div data-aos="fade-up">
          <Resume />
        </div>

        {/* Easter Egg Lore Banner */}
        <SpiderFacts />

        {/* Contact Your Friendly Neighborhood Dev */}
        <div data-aos="fade-up">
          <Contact />
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <BackToTop />
      <AskSpidey />
    </div>
  );
}

export default App;
