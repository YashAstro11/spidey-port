import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🕷️ Thanks, ${formData.name}! Your message was sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>🕷️ Contact Your Friendly Neighborhood Dev</h2>
      <form onSubmit={handleSubmit}>
        <label>🧍 Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>📧 Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>💬 Message</label>
        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required />

        <button type="submit">🕸️ Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
