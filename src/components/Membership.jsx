import React from 'react';
import './Membership.css';

const plans = [
  {
    name: "Basic",
    price: "₹2,499",
    features: [
      "Gym Access",
      "All Equipment",
      "Basic Equipment",
      "Opening Hours Access",
      "Locker Facility"
    ]
  },
  {
    name: "Premium",
    price: "₹4,999",
    popular: true,
    features: [
      "Everything in Basic",
      "2 Personal Training Sessions",
      "Nutrition Guidance",
      "24/7 Access Available",
      "Priority Locker",
      "Free Consultation"
    ]
  },
  {
    name: "Elite",
    price: "₹7,999",
    features: [
      "Everything in Premium",
      "Unlimited Personal Training",
      "Body Composition Analysis",
      "Custom Meal Plans",
      "Priority Equipment Access",
      "Monthly Progress Tracking"
    ]
  }
];

const whyChooseUs = [
  {
    number: "1",
    title: "No Hidden Charges",
    desc: "Transparent Pricing"
  },
  {
    number: "2",
    title: "Flexible Plans",
    desc: "Pause or Cancel Anytime"
  },
  {
    number: "3",
    title: "Money-Back Guarantee",
    desc: "30 Days"
  },
  {
    number: "4",
    title: "Free Trial",
    desc: "Experience First"
  }
];

const Membership = () => {
  return (
    <section id="membership" className="membership-section">
      <div className="container">
        <h2 className="section-title">CHOOSE YOUR <span>PLAN</span></h2>
        <p className="membership-subtitle">Choose the perfect plan for your fitness journey</p>
        
        <div className="plans-grid">
          {plans.map((plan, idx) => (
            <div key={idx} className={`plan-card glass-panel ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}<span>/month</span></div>
              <ul className="plan-features">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn-primary plan-btn">Join Now</button>
            </div>
          ))}
        </div>

        <div className="why-choose-us">
          <h2 className="section-title">WHY CHOOSE <span>BODY LIFE?</span></h2>
          <div className="reasons-grid">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="reason-item">
                <div className="reason-number">{reason.number}</div>
                <div className="reason-text">
                  <h4>{reason.title}</h4>
                  <p>{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
