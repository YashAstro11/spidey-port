import React from 'react';
import './SpideyBlog.css';

const SpideyBlog = ({ posts }) => {
  return (
    <section className="spidey-blog" id="blog">
      <h2>📰 Web-Slinging Articles</h2>
      <div className="blog-grid">
        {posts.length === 0 ? (
          <p>No blogs yet. Be the first to publish!</p>
        ) : (
          posts.map((post, i) => (
            <div key={i} className="blog-card">
              <h3>{post.title}</h3>
              <span>{post.date}</span>
              <p>{post.summary}</p>
              <button className="read-more-btn">Read More →</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SpideyBlog;
