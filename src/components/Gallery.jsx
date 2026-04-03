import React, { useState } from 'react';
import FullGallery from './FullGallery';
import './Gallery.css';

const allImages = [
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop"
];

const Gallery = () => {
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">OUR <span>FACILITIES</span></h2>
          <div className="gallery-grid">
            {allImages.map((src, idx) => (
              <div key={idx} className="gallery-item animate-fade">
                <div className="gallery-overlay"></div>
                <img src={src} alt={`Gym Facility ${idx + 1}`} onClick={() => setIsFullGalleryOpen(true)} />
              </div>
            ))}
          </div>

          <div className="gallery-actions">
            <button
              id="view-all-btn"
              className="btn-primary"
              onClick={() => setIsFullGalleryOpen(true)}
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {isFullGalleryOpen && <FullGallery onClose={() => setIsFullGalleryOpen(false)} />}
    </>
  );
};

export default Gallery;
