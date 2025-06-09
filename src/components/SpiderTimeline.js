import React from 'react';
import './SpiderTimeline.css';

const timeline = [
  {
    title: '🕸️ Bitten by the Coding Bug',
    date: '2021',
    description: 'Started exploring C++ and building console-based apps.',
  },
  {
    title: '⚛️ Entered the React-Verse',
    date: '2022',
    description: 'Learned React and built multiple frontend projects.',
  },
  {
    title: '🚨 Women Safety Analytics',
    date: '2024',
    description: 'Developed a real-time safety analysis project with maps and data viz.',
  },
  {
    title: '🕷️ Launched Spidey-Port',
    date: '2025',
    description: 'Built a superhero-themed personal portfolio.',
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
