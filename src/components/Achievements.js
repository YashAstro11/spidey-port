import React from 'react';
import { Award, Cpu, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const iconLookup = {
  Award: <Award size={26} className="achieve-icon gold" />,
  Cpu: <Cpu size={26} className="achieve-icon blue" />,
  Users: <Users size={26} className="achieve-icon red" />,
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Proof of Discipline</span>
          <h2 className="section-title">
            <span className="comic-title">Achievements & Leadership</span>
          </h2>
          <p className="section-subtitle">
            Verified milestones demonstrating consistent problem-solving discipline, applied AI education, and hackathon team leadership.
          </p>
          <div className="section-divider" />
        </div>

        {/* Cards Grid */}
        <div className="achievements-grid">
          {achievements.map((item, idx) => {
            const isLeadership = item.type === 'leadership';

            return (
              <div
                key={idx}
                className={`spidey-card achieve-card-item ${isLeadership ? 'leadership-card' : ''}`}
              >
                <div className="achieve-top-bar">
                  <div className="achieve-icon-box">
                    {iconLookup[item.icon] || <ShieldCheck size={26} />}
                  </div>
                  <span className={`tag ${isLeadership ? 'tag-red' : 'tag-blue'}`}>
                    {isLeadership ? 'Team Leadership' : 'Verified Certification'}
                  </span>
                </div>

                <div className="achieve-content">
                  <h3 className="achieve-card-title">{item.title}</h3>
                  <div className="achieve-meta-row">
                    <span className="achieve-issuer">{item.issuer}</span>
                    <span className="achieve-period">• {item.period}</span>
                  </div>
                  <p className="achieve-desc">{item.description}</p>
                </div>

                <div className="achieve-card-footer">
                  <div className="verified-badge">
                    <CheckCircle size={14} className="verified-icon" />
                    <span>Verified Academic / Competitive Record</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

