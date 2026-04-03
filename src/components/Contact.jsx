import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-content">
            <h2 className="section-title">GET IN <span>TOUCH</span></h2>
            <p className="contact-text">
              Ready to start your fitness journey? Reach out to us through any of our social channels or WhatsApp. We're always here to help you achieve your goals.
            </p>
            
            <div className="social-buttons">
              <a href="https://wa.me/919600330599" target="_blank" rel="noreferrer" className="social-btn whatsapp" title="WhatsApp">
                <span className="icon"><FaWhatsapp /></span>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-btn instagram" title="Instagram">
                <span className="icon"><FaInstagram /></span>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-btn facebook" title="Facebook">
                <span className="icon"><FaFacebookF /></span>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-btn twitter" title="X (Twitter)">
                <span className="icon"><FaXTwitter /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
