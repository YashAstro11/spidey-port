import React from 'react';
import './Hero.css';
import spiderHero from '../assets/spiderman-bg.jpg';

const Hero = () => (
  <div className="hero">
    <img src={spiderHero} alt="Spider-Man" />
    <h2>With great power comes great portfolio.</h2>
  </div>
);

export default Hero;
