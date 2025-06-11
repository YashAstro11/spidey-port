import React from 'react';
import './SpideyBlog.css';

const blogPosts = [
  {
    title: "🕷️ How I Built My Spider-Themed Portfolio",
    date: "June 2025",
    summary: "From Tailwind to timelines — a breakdown of how I built Spidey-Port step-by-step.",
    link: "#"
  },
  {
    title: "🚨 Behind Women Safety Analytics",
    date: "May 2025",
    summary: "How I used real-time data visualization and maps to address a critical issue.",
    link: "#"
  },
  {
    title: "⚛️ Why I Love React (and Web-Slinging)",
    date: "April 2025",
    summary: "React gives me Spider-sense-like speed for building dynamic UIs.",
    link: "#"
  }
];

const SpideyBlog = () => {
  return (
    <section className="spidey-blog" id="blog">
      <h2>📰 Web-Slinging Articles</h2>
      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <div key={i} className="blog-card">
            <h3>{post.title}</h3>
            <span>{post.date}</span>
            <p>{post.summary}</p>
            <a href={post.link}>Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpideyBlog;
