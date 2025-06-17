import React from 'react';
import './Hero.css';
import spideyImg from '../assets/spiderman-bg.jpg'; // Replace with your image

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content" data-aos="zoom-in">
        <h1 className="glow-text">Welcome to the Spidey-Verse</h1>
        <p>I'm Yash Yadav — building web experiences that stick 🕸️</p>
      </div>
      <div className="spidey-img" data-aos="fade-up">
        <img src={spideyImg} alt="Spidey Avatar" />
      </div>
    </div>
  );
};

export default Hero;
