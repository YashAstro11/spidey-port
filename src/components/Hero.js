import React from 'react';
import './Hero.css';
import spideyImg from '../assets/spiderman-bg.jpg'; // Replace with your image

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content" data-aos="zoom-in">
        <h1 className="glow-text">Yash Yadav</h1>
        <p>React Native Mobile App Developer — Building production-ready apps that stick 🕸️</p>
        <div className="hero-buttons">
          <a href="https://www.linkedin.com/in/yash-yadav-145b912b8/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
          <a href="https://github.com/YashAstro11" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
          <a href="mailto:ya45242@gmail.com" className="btn">Email</a>
        </div>
      </div>
      <div className="spidey-img" data-aos="fade-up">
        <img src={spideyImg} alt="Spidey Avatar" />
      </div>
    </div>
  );
};

export default Hero;
