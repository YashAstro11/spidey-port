import React, { useState, Suspense, lazy } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Always-loaded components
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AskSpidey from './components/AskSpidey';
import BackToTop from './components/BackToTop';
import BlogEditor from './components/BlogEditor';
import SpideyBlog from './components/SpideyBlog';

// Lazy-loaded components
const Hero = lazy(() => import('./components/Hero'));
const SpiderTimeline = lazy(() => import('./components/SpiderTimeline'));
const SkillsRadar = lazy(() => import('./components/SkillsRadar'));
const Projects = lazy(() => import('./components/Projects'));
const SpiderFacts = lazy(() => import('./components/SpiderFacts'));
const SpiderScan = lazy(() => import('./components/SpiderScan'));
const Contact = lazy(() => import('./components/Contact'));



function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  
  const addBlogPost = (post) => {
    setBlogPosts([post, ...blogPosts]);
  };
  const deleteBlogPost = (index) => {
    const updated = [...blogPosts];
    updated.splice(index, 1);
    setBlogPosts(updated);
  };
  
  const updateBlogPost = (index, updatedPost) => {
    const updated = [...blogPosts];
    updated[index] = updatedPost;
    setBlogPosts(updated);
  };
  
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />

      <Suspense fallback={<div className="loader">🕸️ Loading...</div>}>
        <section id="hero" data-aos="fade-up"><Hero /></section>
        <section id="timeline" data-aos="fade-right"><SpiderTimeline /></section>
        <section id="skills" data-aos="fade-left"><SkillsRadar /></section>
        <section id="projects" data-aos="zoom-in"><Projects /></section>
        <SpiderFacts />
        <SpiderScan />

        <section id="blog" data-aos="fade-up">
          <BlogEditor onAddPost={addBlogPost} />
          <SpideyBlog
          posts={blogPosts}
          onDelete={deleteBlogPost}
          onUpdate={updateBlogPost}
          />
        </section>

        <section id="contact" data-aos="fade-up"><Contact /></section>
      </Suspense>

      <BackToTop />
      <AskSpidey />
    </div>
  );
}

export default App;
