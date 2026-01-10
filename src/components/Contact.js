import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🕷️ Thanks, ${formData.name}! Your message was sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>🕷️ Contact Your Friendly Neighborhood Dev</h2>
      <div className="contact-info">
        <p><strong>📧 Email:</strong> <a href="mailto:ya45242@gmail.com">ya45242@gmail.com</a></p>
        <p><strong>📞 Phone:</strong> +91 9140506590</p>
        <p><strong>📍 Location:</strong> Lucknow, India</p>
      </div>
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
