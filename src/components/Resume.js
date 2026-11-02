import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { FileDown, ExternalLink, QrCode, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Resume.css';

const Resume = () => {
  // In production, QR points to the deployed resume URL or origin + resumeUrl
  const fullResumeUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${personalInfo.resumeUrl}`
    : `https://github.com/YashAstro11/spidey-port`;

  return (
    <section id="resume" className="resume-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Recruiter Fast-Track</span>
          <h2 className="section-title">
            <span className="comic-title">Your Next Teammate Is One Scan Away</span>
          </h2>
          <p className="section-subtitle">
            Instant recruiter access to my comprehensive resume covering technical credentials, verified internship outcomes, and academic standing.
          </p>
          <div className="section-divider" />
        </div>

        {/* Main Resume Card */}
        <div className="resume-main-card spidey-card">
          {/* Left: Resume Highlights & Info */}
          <div className="resume-info-side">
            <div className="resume-status-strip">
              <span className="pulse-indicator">
                <span className="pulse-dot" />
                <span className="pulse-ring" />
              </span>
              <span>Updated & Verified — Current as of November 2026</span>
            </div>

            <h3 className="resume-card-heading">
              Software Developer & React Native Specialist
            </h3>

            <p className="resume-card-desc">
              Looking for a dependable engineer who understands end-to-end mobile development with React Native, modern React.js frontend architecture, and practical API integration? Download my resume for the full breakdown.
            </p>

            {/* Checklist */}
            <div className="resume-checklist">
              <div className="check-row">
                <CheckCircle2 size={16} className="check-bullet" />
                <span>B.Tech in Computer Science & Engineering (CGPA 8.27)</span>
              </div>
              <div className="check-row">
                <CheckCircle2 size={16} className="check-bullet" />
                <span>React Native Developer Intern at SlotinSolutions (1 Year, Ended Aug 2026)</span>
              </div>
              <div className="check-row">
                <CheckCircle2 size={16} className="check-bullet" />
                <span>Production experience on live web & mobile products (LearnTok, Jinete)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="resume-actions-group">
              <a
                href={personalInfo.resumeUrl}
                download="Yash_Yadav_Resume.pdf"
                className="btn btn-primary"
              >
                <FileDown size={17} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={17} />
                <span>View in New Tab</span>
              </a>
            </div>
          </div>

          {/* Right: Spider Scan QR Code Box */}
          <div className="resume-qr-side">
            <div className="qr-card-frame">
              <div className="qr-corner top-left">🕸️</div>
              <div className="qr-corner top-right">🕸️</div>
              <div className="qr-corner bottom-left">🕸️</div>
              <div className="qr-corner bottom-right">🕸️</div>

              <div className="qr-header">
                <QrCode size={18} className="qr-header-icon" />
                <span>Spider Scan</span>
              </div>

              <div className="qr-canvas-box">
                <QRCodeSVG
                  value={fullResumeUrl}
                  size={165}
                  fgColor="#e62429"
                  bgColor="#ffffff"
                  level="M"
                />
              </div>

              <p className="qr-caption">
                Scan with your smartphone camera to open Yash's resume on mobile instantly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
