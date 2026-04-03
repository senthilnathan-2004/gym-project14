import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: "Strength Training",
    description: "Professional strength programs with free weights and machines for all fitness levels.",
    icon: "💪"
  },
  {
    title: "Cardio & Conditioning",
    description: "State-of-the-art cardio equipment to improve your endurance and cardiovascular health.",
    icon: "🏃‍♂️"
  },
  {
    title: "CrossFit Programs",
    description: "High-intensity functional training with dedicated space and certified coaches.",
    icon: "🏋️‍♂️"
  },
  {
    title: "Flexibility Training",
    description: "Yoga and stretching programs to improve mobility and reduce injury risk.",
    icon: "🧘‍♂️"
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching from expert trainers tailored to your specific goals.",
    icon: "🎯"
  },
  {
    title: "Body Composition",
    description: "Personalized nutrition and training plans for optimal body transformation.",
    icon: "🥗"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">OUR <span>SERVICES</span></h2>
        
        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="service-card glass-panel">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
