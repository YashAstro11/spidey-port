import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="spidey-footer">
      <div className="section-container footer-container">
        {/* Top Strip */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">🕸️ Spidey-Port</span>
            <p className="footer-motto">
              "With great code comes great responsibility." — Crafting dependable mobile apps and modern web platforms.
            </p>
          </div>

          <div className="footer-nav-columns">
            <div className="footer-column">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-links">
                <li>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-link-with-icon">
                    <GithubIcon size={14} />
                    <span>GitHub Profile</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link-with-icon">
                    <LinkedinIcon size={14} />
                    <span>LinkedIn Network</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${personalInfo.email}`}>
                    Email Direct
                  </a>
                </li>
                <li>
                  <a href={personalInfo.resumeUrl} download="Yash_Yadav_Resume.pdf">
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} <strong>Yash Yadav</strong>. Built with React.js & Spider-Man inspiration. Updated November 2026.
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
