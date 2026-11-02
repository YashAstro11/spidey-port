import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Code2, 
  Globe, 
  Smartphone,
  Cpu,
  ShoppingBag
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './ProjectModal.css';

const getCategoryIcon = (category = '') => {
  const cat = category.toLowerCase();
  if (cat.includes('mobile') || cat.includes('react native')) return <Smartphone size={32} />;
  if (cat.includes('web') || cat.includes('next')) return <Globe size={32} />;
  if (cat.includes('vision') || cat.includes('ml')) return <Cpu size={32} />;
  if (cat.includes('commerce')) return <ShoppingBag size={32} />;
  return <Code2 size={32} />;
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Save previous overflow style and lock body
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project || typeof document === 'undefined') return null;

  const modalContent = (
    <div className="spidey-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="spidey-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="spidey-modal-header">
          <div className="modal-title-area">
            <div className="modal-badge-row">
              <span className={`tag ${project.isLive ? 'tag-green' : 'tag-red'}`}>
                {project.badge || 'Featured Project'}
              </span>
              <span className="tag tag-blue">{project.category}</span>
              <span className="tag">{project.status}</span>
            </div>
            <h2 className="modal-main-title">{project.title}</h2>
          </div>

          <button
            type="button"
            className="spidey-modal-close"
            onClick={onClose}
            aria-label="Close modal window"
            title="Close (Esc)"
          >
            <X size={22} />
          </button>
        </div>

        {/* Media / Visual Preview Banner */}
        <div className="modal-visual-banner">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="modal-banner-img"
            />
          ) : (
            <div
              className="modal-banner-fallback"
              style={{
                background: `linear-gradient(135deg, #1c1c1c 0%, ${project.fallbackColor || '#262626'} 160%)`,
              }}
            >
              <div className="modal-fallback-icon">
                {getCategoryIcon(project.category)}
              </div>
              <div className="modal-fallback-text">
                <span className="modal-fallback-title">{project.title}</span>
                <span className="modal-fallback-cat">{project.category}</span>
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Body Content */}
        <div className="spidey-modal-body">
          {/* Section: Project Overview */}
          <div className="modal-detail-block">
            <h3 className="modal-block-heading">
              <Sparkles size={17} className="modal-heading-icon" />
              <span>Project Overview</span>
            </h3>
            <p className="modal-lead-paragraph">
              {project.overview || project.shortDescription}
            </p>
          </div>

          {/* Section: Problem & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="modal-impact-grid">
              {project.problem && (
                <div className="impact-box problem-theme">
                  <div className="impact-box-head">
                    <AlertCircle size={17} className="impact-icon-red" />
                    <h4>The Challenge / Problem</h4>
                  </div>
                  <p>{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="impact-box solution-theme">
                  <div className="impact-box-head">
                    <CheckCircle2 size={17} className="impact-icon-green" />
                    <h4>The Engineering Solution</h4>
                  </div>
                  <p>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Section: Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="modal-detail-block">
              <h3 className="modal-block-heading">
                <Layers size={17} className="modal-heading-icon" />
                <span>Key Features & Capabilities</span>
              </h3>
              <ul className="modal-features-grid">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="feature-list-card">
                    <CheckCircle2 size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section: Technologies & Architecture */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="modal-detail-block">
              <h3 className="modal-block-heading">
                <Code2 size={17} className="modal-heading-icon" />
                <span>Architecture & Technologies</span>
              </h3>
              <div className="modal-tech-cloud">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-chip-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="spidey-modal-footer">
          <div className="modal-footer-status">
            <span>Project Status:</span>
            <strong>{project.status}</strong>
          </div>

          <div className="modal-footer-btns">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>View GitHub Repo</span>
              </a>
            ) : (
              <span className="btn btn-secondary btn-sm disabled-action" title="Proprietary Internship Codebase">
                Internal / Private Codebase
              </span>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={16} />
                <span>{project.isLive ? 'Visit Live Website' : 'Open Live Platform'}</span>
              </a>
            )}

            <button
              type="button"
              className="btn btn-outline-red btn-sm"
              onClick={onClose}
            >
              <span>Close Window</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
