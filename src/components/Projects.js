import React from 'react';
import './Projects.css';
import simpleShoppyImg from '../assets/bookstore-app.png'; // New Image
import womenSafetyImg from '../assets/jinete-app.png'; // New Image
import spideyPortImg from '../assets/spidey-port.png';
const projects = [
  {
    title: 'Jinete Ride Sharing 🚕',
    image: womenSafetyImg,
    github: 'https://github.com/YashAstro11',
    demo: '#' // In Review
  },
  {
    title: 'Multi-Seller Bookstore 📚',
    image: simpleShoppyImg,
    github: 'https://github.com/YashAstro11',
    demo: '#'
  },
  {
    title: 'Spider Portfolio 🕷️',
    image: spideyPortImg,
    github: 'https://github.com/YashAstro11/spidey-port',
    demo: 'http://localhost:3000'
  }
];

const Projects = () => {
  return (
    <div className="project-grid">
      {projects.map((project, idx) => (
        <div className={`project-card rotate-${idx % 3}`} key={idx}>
          <img src={project.image} alt={project.title} />
          <p>{project.title}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">🚀 Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

