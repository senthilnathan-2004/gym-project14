import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">BODY <span>LIFE</span></div>
          <p className="footer-tagline">Achieve your fitness goals with pro equipment and expert guidance.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#game">Mini Game</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">IG</a>
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Body Life Fitness Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
