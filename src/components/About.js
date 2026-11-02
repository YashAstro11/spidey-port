import React from 'react';
import { GraduationCap, Award, Smartphone, Layout, Rocket, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const infoCards = [
  {
    icon: <GraduationCap size={24} className="card-icon-accent red" />,
    title: "B.Tech CSE Graduate",
    subtitle: "2022 – 2026",
    desc: "Shri Ramswaroop Memorial University, Lucknow",
  },
  {
    icon: <Award size={24} className="card-icon-accent gold" />,
    title: "CGPA: 8.27 / 10",
    subtitle: "Academic Excellence",
    desc: "Strong core CS foundations in DSA, OOP & DBMS",
  },
  {
    icon: <Smartphone size={24} className="card-icon-accent blue" />,
    title: "React Native Mobile Dev",
    subtitle: "iOS & Android",
    desc: "Production workflows with Expo, Redux & Firebase",
  },
  {
    icon: <Layout size={24} className="card-icon-accent red" />,
    title: "Modern Frontend",
    subtitle: "Web Applications",
    desc: "Responsive web UI with React.js & Next.js",
  },
  {
    icon: <Rocket size={24} className="card-icon-accent green" />,
    title: "Project-Based Experience",
    subtitle: "Real-World Delivery",
    desc: "Hands-on work on live platforms like Jinete & LearnTok",
  },
];

const highlights = [
  "Building robust mobile interfaces with React Native & Expo",
  "Implementing real-time Firebase Auth & Cloud Firestore workflows",
  "Collaborative experience on multi-app ecosystems during internship",
  "Driven to contribute to high-impact engineering teams",
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">🕸️ Origin Story</span>
          <h2 className="section-title">
            <span className="comic-title">Behind the Mask</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative Story */}
          <div className="about-story-col">
            <div className="spidey-card about-narrative-card">
              <div className="card-top-tag">
                <MapPin size={15} />
                <span>Based in {personalInfo.location}</span>
              </div>

              <div className="narrative-body">
                <p>
                  I'm <strong>Yash Yadav</strong>, a Computer Science graduate from{' '}
                  <span className="highlight-text">Shri Ramswaroop Memorial University, Lucknow</span>.
                  I specialize in building practical, high-performance applications with{' '}
                  <strong>React Native, Expo, Firebase, React.js</strong>, and modern frontend technologies.
                </p>

                <p>
                  During my internship at <strong>SlotinSolutions</strong>, I contributed to mobile app development tasks across live React Native applications—crafting responsive user interfaces, implementing secure Firebase OTP authentication, and building driver workflows.
                </p>

                <p>
                  Alongside my professional experience, I actively develop full-scale personal and collaborative products like{' '}
                  <a href="#projects" className="text-link">Jinete</a> (ride-sharing platform) and{' '}
                  <a href="#projects" className="text-link">LearnTok</a> (live web platform). These projects sharpened my understanding of production lifecycles, user authentication, and scalable design patterns.
                </p>
              </div>

              {/* Quick Check Highlights */}
              <div className="about-highlights-list">
                {highlights.map((item, idx) => (
                  <div key={idx} className="highlight-row">
                    <CheckCircle2 size={17} className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillar Info Cards */}
          <div className="about-pillars-col">
            <div className="pillars-grid">
              {infoCards.map((card, idx) => (
                <div key={idx} className="spidey-card pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon-box">{card.icon}</div>
                    <div className="pillar-titles">
                      <h3 className="pillar-title">{card.title}</h3>
                      <span className="pillar-subtitle">{card.subtitle}</span>
                    </div>
                  </div>
                  <p className="pillar-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

