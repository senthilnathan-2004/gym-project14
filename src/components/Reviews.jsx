import React from 'react';
import './Reviews.css';

const reviewData = [
  {
    name: "Jagadeesh Prashanth",
    time: "2 months ago",
    rating: 5,
    text: "Been in this gym for 1 year… dropped 27 kgs here… real work… real results… coach actually cares and pushes you when needed and corrects you when it matters… new machines and clean setup with no outdated junk… this place didn't just change my body it changed my life."
  },
  {
    name: "A Mohanraju",
    time: "2 months ago",
    rating: 5,
    text: "Body Life Gym is an excellent place for anyone serious about fitness and body transformation. The gym is well-equipped with modern machines and free weights, making it suitable for both beginners and advanced lifters."
  },
  {
    name: "Alpha 1999",
    time: "2 months ago",
    rating: 5,
    text: "Great gym with quality equipment and a motivating atmosphere. Trainers are friendly and professional, and the gym is always clean. Perfect place for serious workouts and real results."
  },
  {
    name: "vidhya c",
    time: "a year ago",
    rating: 5,
    text: "This newly opened gym is a fantastic find for women! It has ample parking, full air conditioning, and a comfortable, welcoming vibe. The equipment is brand new and pro-level with a separate CrossFit space."
  },
  {
    name: "Manikandan T",
    time: "3 months ago",
    rating: 5,
    text: "A high-energy, friendly environment with top-tier equipment that's clearly been invested in for serious training. The atmosphere is motivating, the setup is world-class, and every workout here feels productive."
  },
  {
    name: "D. TAMILMANI",
    time: "2 months ago",
    rating: 5,
    text: "Am one of the member of bodylife gym ponmar branch I genuinely saying this that bodylife gym is very clean and neat also spacious. The trainner Vinoth master is a kind person and so friendly. Best gym🔥"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container" style={{ padding: 0 }}>
        <h2 className="section-title">CLIENT <span>REVIEWS</span></h2>

        <div className="reviews-carousel">
          {reviewData.map((review, idx) => (
            <div key={idx} className="review-card glass-panel">
              <div className="review-header">
                <div className="avatar">{review.name.charAt(0)}</div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span className="review-time">{review.time}</span>
                </div>
              </div>
              <div className="stars">
                {"★".repeat(review.rating)}
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
