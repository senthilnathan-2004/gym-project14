import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-slide-up">
            <h2 className="section-title">ABOUT <span>BODY LIFE</span></h2>
            <h3 className="about-subtitle">Your Partner in Fitness Excellence</h3>
            <p className="about-text">
              Body Life Fitness Center is Chennai's premier destination for fitness transformation. Located in Ponmar, Medavakkam, we pride ourselves on offering state-of-the-art equipment, world-class trainers, and an inspiring community of fitness enthusiasts.
            </p>
            <p className="about-text">
              With a 4.9-star rating and 85+ reviews, our members consistently report exceptional results. Whether you're a beginner starting your fitness journey or an advanced lifter seeking peak performance, Body Life has the perfect environment for you.
            </p>
            
            <ul className="about-features">
              <li>✓ Modern, Imported Pro-Level Equipment</li>
              <li>✓ Expert & Certified Trainers</li>
              <li>✓ Complete Air Conditioning</li>
              <li>✓ Ample Free Parking</li>
              <li>✓ Clean & Hygienic Facility</li>
              <li>✓ Personalized Training Programs</li>
            </ul>
          </div>
          
          <div className="about-images">
            <div className="img-wrapper main-img">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop" alt="Gym Environment" />
            </div>
            <div className="img-wrapper sub-img">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" alt="Gym Equipment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
