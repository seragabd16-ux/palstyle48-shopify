import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Luxury Dark E-commerce Experience</h1>
        <p className="hero-subtitle">Discover premium products with 3D visualization and immersive interactions</p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Collection</button>
          <button className="btn-secondary">Watch Demo</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="3d-container">
          <div className="floating-element"></div>
          <div className="glowing-orb"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
