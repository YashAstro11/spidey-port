import React from 'react';
import './Projects.css';
import simpleShoppyImg from '../assets/simple-shoppy.png';
import womenSafetyImg from '../assets/women-safety.png';
import spideyPortImg from '../assets/spidey-port.png';
const projects = [
  {
    title: 'SimpleShoppy 🛍️',
    image: simpleShoppyImg,
    github: 'https://github.com/YashAstro11/SimpleShoppy',
    demo: 'https://simpleshoppy.vercel.app'
  },
  {
    title: 'Women Safety Analytics 🚨',
    image: womenSafetyImg,
    github: 'https://github.com/YashAstro11/women-safety-analytics',
    demo: 'https://women-safe.vercel.app'
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

