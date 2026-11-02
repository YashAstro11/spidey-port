import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    status: 'idle', // 'idle' | 'sending' | 'success' | 'error'
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        status: 'error',
        message: 'Please complete all required fields before sending.',
      });
      return;
    }

    setFormState({ status: 'sending', message: 'Preparing your dispatch...' });

    // Open user's email client directly with prefilled parameters
    setTimeout(() => {
      const emailSubject = encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name} via Spidey-Port`
      );
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

      setFormState({
        status: 'success',
        message: 'Your email client has been launched with your message pre-filled. You can also write directly to ya45242@gmail.com!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Signal the Hero</span>
          <h2 className="section-title">
            <span className="comic-title">Let's Build Something Amazing</span>
          </h2>
          <p className="section-subtitle">
            Have an engineering role, contract opportunity, or project idea? Send a dispatch through the web or reach out directly.
          </p>
          <div className="section-divider" />
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="spidey-card contact-details-card">
              <h3 className="details-title">Direct Communication Lines</h3>
              <p className="details-sub">
                I am actively considering Software Developer, React Native, and Frontend engineering opportunities.
              </p>

              <div className="contact-methods-list">
                <a href={`mailto:${personalInfo.email}`} className="method-row">
                  <div className="method-icon-box">
                    <Mail size={18} className="method-icon red" />
                  </div>
                  <div className="method-texts">
                    <span className="method-label">Primary Email</span>
                    <span className="method-value">{personalInfo.email}</span>
                  </div>
                </a>

                <a href={`tel:${personalInfo.phone}`} className="method-row">
                  <div className="method-icon-box">
                    <Phone size={18} className="method-icon blue" />
                  </div>
                  <div className="method-texts">
                    <span className="method-label">Direct Phone</span>
                    <span className="method-value">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="method-row static-row">
                  <div className="method-icon-box">
                    <MapPin size={18} className="method-icon gold" />
                  </div>
                  <div className="method-texts">
                    <span className="method-label">Current Base</span>
                    <span className="method-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="contact-social-box">
                <span className="social-subheading">Professional Networks:</span>
                <div className="contact-social-buttons">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn Network</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="spidey-card form-card">
              <div className="form-card-header">
                <MessageSquare size={20} className="form-header-icon" />
                <h3 className="form-title">Send a Web Dispatch</h3>
              </div>

              <form onSubmit={handleSubmit} className="spidey-contact-form" noValidate>
                <div className="form-row-dual">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Peter Parker"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. React Native Developer Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, tech stack, or project requirements..."
                    className="form-textarea"
                    required
                  />
                </div>

                {/* Status Alert Banner */}
                {formState.status === 'success' && (
                  <div className="status-banner success-banner">
                    <CheckCircle2 size={18} className="banner-icon" />
                    <span>{formState.message}</span>
                  </div>
                )}

                {formState.status === 'error' && (
                  <div className="status-banner error-banner">
                    <AlertCircle size={18} className="banner-icon" />
                    <span>{formState.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={formState.status === 'sending'}
                >
                  <Send size={16} />
                  <span>
                    {formState.status === 'sending' ? 'Transmitting Dispatch...' : 'Shoot Web Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
