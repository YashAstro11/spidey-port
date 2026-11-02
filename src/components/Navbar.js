import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scrollspy active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`spidey-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo" onClick={closeMenu}>
          <span className="brand-icon">🕸️</span>
          <span className="brand-name">
            Spidey<span className="brand-dot">-</span>Port
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && <span className="active-glow-bar" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions">
          <a
            href="/Yash_Yadav_Resume.pdf"
            download="Yash_Yadav_Resume.pdf"
            className="btn btn-primary btn-sm resume-cta"
            title="Download Yash's Resume"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </a>

          {/* Hamburger Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="active-dot" />}
              </a>
            </li>
          ))}
          <li className="mobile-resume-item">
            <a
              href="/Yash_Yadav_Resume.pdf"
              download="Yash_Yadav_Resume.pdf"
              className="btn btn-primary btn-sm mobile-resume-btn"
              onClick={closeMenu}
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
