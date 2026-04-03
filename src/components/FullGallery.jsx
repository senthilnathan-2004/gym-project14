import React from 'react';
import './FullGallery.css';

const allImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522898467493-49726bf28798?q=80&w=1000&auto=format&fit=crop"
];

const FullGallery = ({ onClose }) => {
  return (
    <div className="full-gallery-overlay animate-fade">
      <div className="full-gallery-container animate-slide-up">
        <header className="full-gallery-header">
          <h2>BODY <span>LIFE</span> GALLERY</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </header>
        
        <div className="full-gallery-grid">
          {allImages.map((src, idx) => (
            <div key={idx} className="full-gallery-item">
              <img src={src} alt={`Facility ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
