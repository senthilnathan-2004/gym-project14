import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          BODY <span>LIFE</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="nav-menu">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#membership">Plans</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#membership" className="btn-primary join-btn desktop-btn">Join Now</a>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Backdrop Overlay */}
        <div 
          className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
        ></div>

        {/* Mobile Nav */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <a href="#hero" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#membership" onClick={closeMenu}>Plans</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#membership" className="btn-primary join-btn-mobile" onClick={closeMenu}>Join Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
