import React from 'react';
import { ArrowRight, FileDown, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import spideyAvatar from '../assets/spiderman-bg.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-orb hero-glow-red" />
      <div className="hero-glow-orb hero-glow-blue" />

      <div className="section-container hero-container">
        {/* Left Column: Text Content */}
        <div className="hero-text-content">
          {/* Opportunity Badge */}
          {personalInfo.availableForWork && (
            <div className="availability-badge">
              <span className="pulse-indicator">
                <span className="pulse-dot" />
                <span className="pulse-ring" />
              </span>
              <span>Available for Opportunities</span>
            </div>
          )}

          {/* Main Name & Title */}
          <h1 className="hero-name">
            <span className="comic-title hero-name-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-role-wrapper">
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-specialization">{personalInfo.roleHeadline}</p>
          </div>

          {/* Tagline & Subheading */}
          <p className="hero-tagline">
            "{personalInfo.tagline}"
          </p>

          <p className="hero-description">
            {personalInfo.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Projects</span>
              <ArrowRight size={17} />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Yash_Yadav_Resume.pdf"
              className="btn btn-secondary"
            >
              <FileDown size={17} />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline-red">
              <Mail size={17} />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-strip">
            <span className="social-label">Web of Links:</span>
            <div className="social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                title="Email Yash"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Spidey Visual Avatar */}
        <div className="hero-visual-wrapper">
          <div className="hero-card-frame animate-float">
            {/* Comic Web Border Corners */}
            <div className="comic-corner top-left">🕸️</div>
            <div className="comic-corner top-right">🕸️</div>
            <div className="comic-corner bottom-left">🕸️</div>
            <div className="comic-corner bottom-right">🕸️</div>

            <div className="avatar-image-container">
              <img
                src={spideyAvatar}
                alt="Yash Yadav - Spider-Man Themed Persona"
                className="avatar-img"
              />
              <div className="avatar-overlay-gradient" />
            </div>

            {/* Floating comic status badge */}
            <div className="avatar-status-pill">
              <Sparkles size={14} className="status-sparkle" />
              <span>Friendly Neighborhood Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
