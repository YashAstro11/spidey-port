import React, { useState } from 'react';
import { 
  Smartphone, 
  Layout, 
  Database, 
  Code2, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const iconMap = {
  Smartphone: <Smartphone size={22} className="cat-icon red" />,
  Layout: <Layout size={22} className="cat-icon blue" />,
  Database: <Database size={22} className="cat-icon gold" />,
  Code: <Code2 size={22} className="cat-icon green" />,
  Wrench: <Wrench size={22} className="cat-icon red" />,
  Cpu: <Cpu size={22} className="cat-icon blue" />,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoriesList = ['All', ...skillCategories.map(c => c.title)];

  const displayedCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Technical Capabilities</span>
          <h2 className="section-title">
            <span className="comic-title">Spidey Skill Matrix</span>
          </h2>
          <p className="section-subtitle">
            Core competencies organized by architectural layer — verified through real mobile apps, live web platforms, and engineering coursework.
          </p>
          <div className="section-divider" />
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-bar">
          {categoriesList.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? '🕸️ All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-matrix-grid">
          {displayedCategories.map((cat, idx) => (
            <div key={idx} className="spidey-card skill-card-panel">
              <div className="skill-card-top">
                <div className="skill-icon-holder">
                  {iconMap[cat.icon] || <Code2 size={22} />}
                </div>
                <div className="skill-cat-title-wrap">
                  <h3 className="skill-cat-title">{cat.title}</h3>
                  <span className="skill-count">{cat.skills.length} competencies</span>
                </div>
              </div>

              <div className="skills-badges-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill-item">
                    <CheckCircle2 size={13} className="skill-pill-check" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <div className="skills-note-banner">
          <Sparkles size={16} className="note-icon" />
          <span>
            Every skill listed reflects practical usage in production builds (React Native / Next.js) or core academic curricula (DSA / C++ / DBMS).
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;

