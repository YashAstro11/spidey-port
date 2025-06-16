import React, { useState } from 'react';
import './SpideyBlog.css';

const SpideyBlog = ({ posts, onDelete, onUpdate }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEdit = (index) => {
    setEditIndex(index);
    setEditTitle(posts[index].title);
    setEditContent(posts[index].content);
  };

  const saveEdit = () => {
    const updatedPost = {
      ...posts[editIndex],
      title: editTitle,
      summary: editContent.slice(0, 100) + '...',
      content: editContent,
    };
    onUpdate(editIndex, updatedPost);
    setEditIndex(null);
    setEditTitle('');
    setEditContent('');
  };

  return (
    <section className="spidey-blog">
      <h2>📰 Web-Slinging Articles</h2>
      <div className="blog-grid">
        {posts.length === 0 ? (
          <p>No blogs yet. Be the first to publish!</p>
        ) : (
          posts.map((post, i) => (
            <div key={i} className="blog-card">
              {editIndex === i ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <button onClick={saveEdit}>💾 Save</button>
                </>
              ) : (
                <>
                  <h3>{post.title}</h3>
                  <span>{post.date}</span>
                  <p>{post.summary}</p>
                  <div className="blog-actions">
                    <button onClick={() => startEdit(i)}>✏️ Edit</button>
                    <button onClick={() => onDelete(i)}>🗑️ Delete</button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SpideyBlog;
