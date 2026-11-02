import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Code2, Layers } from 'lucide-react';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Career Progression</span>
          <h2 className="section-title">
            <span className="comic-title">Professional Journey</span>
          </h2>
          <p className="section-subtitle">
            Verified milestones across mobile application development, industry internship, and computer science engineering.
          </p>
          <div className="section-divider" />
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-spine-line" />

          {experience.map((item, index) => {
            const isInternship = item.role.includes("Intern");

            return (
              <div key={index} className="timeline-node-item">
                {/* Center Node / Dot */}
                <div className="timeline-spider-node">
                  <div className="node-glow-ring" />
                  <div className="node-icon-core">
                    {isInternship ? (
                      <Briefcase size={16} className="node-icon" />
                    ) : (
                      <GraduationCap size={16} className="node-icon" />
                    )}
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="timeline-card-wrapper">
                  <div className="spidey-card timeline-card">
                    {/* Header info */}
                    <div className="timeline-card-header">
                      <div className="header-titles">
                        <span className="role-badge">
                          {isInternship ? "Industry Internship" : "Degree Program"}
                        </span>
                        <h3 className="item-role">{item.role}</h3>
                        <div className="item-meta">
                          <span className="meta-company">{item.company}</span>
                          <span className="meta-separator">•</span>
                          <span className="meta-period">
                            <Calendar size={13} />
                            {item.period} ({item.duration})
                          </span>
                          {item.mode && (
                            <>
                              <span className="meta-separator">•</span>
                              <span className="meta-mode">
                                <MapPin size={13} />
                                {item.mode}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="item-summary">{item.description}</p>

                    {/* Key Contributions */}
                    <div className="item-contributions">
                      <h4 className="contributions-title">Key Contributions & Highlights:</h4>
                      <ul className="contributions-list">
                        {item.contributions.map((point, pIdx) => (
                          <li key={pIdx} className="contribution-row">
                            <CheckCircle size={15} className="bullet-icon" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Codebases (for Town Ride) */}
                    {item.codebases && item.codebases.length > 0 && (
                      <div className="codebases-strip">
                        <span className="codebases-label">
                          <Layers size={14} />
                          <span>Associated Codebases:</span>
                        </span>
                        <div className="codebases-tags">
                          {item.codebases.map((cb, cbIdx) => (
                            <span key={cbIdx} className="tag tag-red">
                              <Code2 size={12} />
                              {cb}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="timeline-tech-stack">
                      {item.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;

