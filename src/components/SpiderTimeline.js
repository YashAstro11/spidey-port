import React from 'react';
import './SpiderTimeline.css';

const timeline = [
  {
    title: '🎓 B.Tech in Computer Science',
    date: '2022 – 2026',
    description: 'Shri Ramswaroop Memorial University, Lucknow (CGPA: 8.23)',
  },
  {
    title: '💼 React Native Developer Intern',
    date: 'Jun 2025 – Present',
    description: 'SlotinSolutions (Remote) — Building live React Native apps with Expo, Firebase, and Redux.',
  },
  {
    title: '🚀 Jinete Ride Sharing App',
    date: 'Present',
    description: 'Developed a ride-sharing app with authentication & real-time updates. (Closed Testing)',
  },
];

const SpiderTimeline = () => {
  return (
    <section className="spider-timeline">
      <h2>🕸️ My Dev Journey</h2>
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.title} <span>({item.date})</span></h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpiderTimeline;
