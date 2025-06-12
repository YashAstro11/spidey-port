import React, { useState } from 'react';
import './BlogEditor.css';

const BlogEditor = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      title,
      summary: content.slice(0, 100) + '...',
      content,
      date: new Date().toLocaleDateString(),
    };

    onAddPost(newPost);
    setTitle('');
    setContent('');
  };

  return (
    <section className="blog-editor">
      <h2>✍️ Write a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows="6"
          placeholder="Write your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">🕸️ Publish</button>
      </form>
    </section>
  );
};

export default BlogEditor;
