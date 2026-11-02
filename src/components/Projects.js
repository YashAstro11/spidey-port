import React, { useState } from 'react';
import { ExternalLink, Eye, Smartphone, Globe, Radio } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

const filterTabs = ['All', 'Featured', 'Mobile', 'Web', 'AI & Vision'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Featured') return project.isFeatured;
    if (activeTab === 'Mobile') return project.category.toLowerCase().includes('mobile') || project.category.toLowerCase().includes('react native');
    if (activeTab === 'Web') return project.category.toLowerCase().includes('web') || project.isLive;
    if (activeTab === 'AI & Vision') return project.category.toLowerCase().includes('vision') || project.category.toLowerCase().includes('ml') || project.category.toLowerCase().includes('analytics');
    return true;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Portfolio Showcase</span>
          <h2 className="section-title">
            <span className="comic-title">The Web of My Work</span>
          </h2>
          <p className="section-subtitle">
            Engineered digital products, live applications, and mobile solutions developed with modern tech stacks.
          </p>
          <div className="section-divider" />
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {filterTabs.map((tab, idx) => (
            <button
              key={idx}
              className={`project-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'All' ? '🕸️ All Projects' : tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const isPriority = project.id === 'learntok' || project.id === 'jinete';

            return (
              <div
                key={project.id}
                className={`spidey-card project-card-item ${isPriority ? 'priority-featured' : ''} tilt-${idx % 3}`}
              >
                {/* Visual Banner / Thumbnail */}
                <div className="project-media-wrap">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="project-visual-fallback"
                      style={{ background: `linear-gradient(135deg, #181818 0%, ${project.fallbackColor || '#222'} 180%)` }}
                    >
                      <div className="fallback-comic-icon">
                        {project.isLive ? <Globe size={42} /> : <Smartphone size={42} />}
                      </div>
                      <span className="fallback-title-pill">{project.title.split('—')[0]}</span>
                    </div>
                  )}

                  {/* Overlay Badges */}
                  <div className="project-badge-overlay">
                    {project.isLive && (
                      <span className="live-pulse-badge">
                        <Radio size={12} className="live-radio-icon" />
                        <span>LIVE WEBSITE</span>
                      </span>
                    )}
                    <span className="category-pill-badge">{project.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="project-card-body">
                  <div className="project-cat-row">
                    <span className="project-category-tag">{project.category}</span>
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.shortDescription}</p>

                  {/* Tech stack pills */}
                  <div className="project-tech-chips">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="tag">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="tag">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="project-card-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>

                  <div className="project-external-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link-btn"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon size={17} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link-btn live-accent"
                        title={project.isLive ? "Visit Live Site" : "Live Demo"}
                        aria-label="Live Site"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
