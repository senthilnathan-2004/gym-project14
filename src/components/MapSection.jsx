import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <section id="location" className="map-section">
      <div className="container">
        <div className="map-container glass-panel">
          <div className="map-info">
            <h2>FIND <span>US</span></h2>
            <p className="address">
              <strong>Body Life Fitness Center</strong><br />
              412, Mambakkam - Medavakkam Main Rd,<br />
              Ponmar, Medavakkam,<br />
              Chennai, Tamil Nadu 600127
            </p>
            <div className="hours">
              <h3>Working Hours</h3>
              <p>Morning: Open - Closes 11 am</p>
              <p>Evening: Reopens 4 pm</p>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <p>096003 30599</p>
            </div>
            <a 
              href="https://www.google.com/maps/place/Body+Life+Fitness+Center/@12.8635093,80.1743164,15z" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary map-btn"
            >
              Get Directions
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Body Life Fitness Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15558.113271168535!2d80.1743164!3d12.8635093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259004cfe9065%3A0xdd6a93aa6e42d57f!2sBody%20Life%20Fitness%20Center!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
