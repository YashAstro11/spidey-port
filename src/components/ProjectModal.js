import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-badges">
              <span className={`tag ${project.isLive ? 'tag-green' : 'tag-red'}`}>
                {project.badge}
              </span>
              <span className="tag tag-blue">{project.category}</span>
            </div>
            <h3 className="modal-title">{project.title}</h3>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Overview Section */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Sparkles size={16} className="modal-icon-red" />
              <span>Project Overview</span>
            </h4>
            <p className="modal-text">{project.overview || project.shortDescription}</p>
          </div>

          {/* Problem & Solution (Engineering Impact) */}
          {(project.problem || project.solution) && (
            <div className="problem-solution-grid">
              {project.problem && (
                <div className="p-s-box problem-box">
                  <div className="p-s-header">
                    <AlertCircle size={16} className="text-red" />
                    <h5>The Challenge</h5>
                  </div>
                  <p>{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-s-box solution-box">
                  <div className="p-s-header">
                    <CheckCircle2 size={16} className="text-green" />
                    <h5>The Engineering Solution</h5>
                  </div>
                  <p>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Layers size={16} className="modal-icon-red" />
                <span>Key Implemented Features</span>
              </h4>
              <ul className="modal-features-list">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="modal-feature-row">
                    <CheckCircle2 size={15} className="feature-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies & Architecture</h4>
            <div className="modal-tech-chips">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tag tag-red">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <div className="modal-status-text">
            <span>Status: <strong>{project.status}</strong></span>
          </div>

          <div className="modal-actions-group">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>View Repository</span>
              </a>
            ) : (
              <span className="btn btn-secondary btn-sm disabled-link" title="Proprietary / Private Codebase">
                Private Codebase
              </span>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={16} />
                <span>{project.isLive ? 'Visit Live Website' : 'Live Platform'}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
