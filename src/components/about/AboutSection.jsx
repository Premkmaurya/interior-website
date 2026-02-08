import React from 'react';
import './AboutSection.scss';
import useScrollToTop from '../../hooks/useScrollToTop';

const AboutSection = () => {
  useScrollToTop()
  return (
    <div className="about-container">
      {/* 4.1 Hero Section [cite: 34] */}
      <section className="hero-section">
        <span className="eyebrow">FROM FOREST TO SALON</span>
        <h1 className="editorial-heading">Crafting Timeless <br/> Sanctuary</h1>
        <div className="hero-image-wrapper">
          <img src="/img/image.jpg" alt="Minimalist Scandinavian interior" />
        </div>
      </section>

      {/* 4.2 Brand Story [cite: 40] */}
      <section className="story-section">
        <div className="content-block">
          <h2>Our Philosophy</h2>
          <p>
            We believe in the soul of natural wood and the quiet strength of 
            Scandinavian design. Every piece is a dialogue between nature and 
            craftsmanship[cite: 6, 43].
          </p>
        </div>
      </section>

      {/* 4.3 Heritage Section [cite: 46] */}
      <section className="heritage-section">
        <div className="heritage-grid">
          <div className="heritage-text">
            <span className="micro-heading">SINCE 1984</span>
            <h3>A Legacy of Responsibility</h3>
            <p>Founded on the principles of longevity and respect for the forest[cite: 43, 49].</p>
          </div>
          {/* Visual Divider Image [cite: 53] */}
          <div className="full-width-image">
            <img src="/img/image-2.jpg" alt="Woodworking detail" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;