import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-slide-up">
        <h1 className="hero-title">
          TRANSFORM YOUR <span className="text-glow">BODY</span><br />
          CHANGE YOUR <span className="text-glow">LIFE</span>
        </h1>
        <p className="hero-subtitle">
          Join the ultimate fitness experience at Body Life Fitness Center. Top-tier equipment, pro trainers, and a motivating atmosphere for real results.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Google Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">Pro</span>
            <span className="stat-label">Equipment</span>
          </div>
          <div className="stat">
            <span className="stat-number">AC</span>
            <span className="stat-label">Fully Air Conditioned</span>
          </div>
        </div>
        <button className="btn-primary hero-btn">Start Your Journey</button>
      </div>
    </section>
  );
};

export default Hero;
