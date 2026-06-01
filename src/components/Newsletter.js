import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="newsletter">
      <div className="nl-blob-purple"></div>
      <div className="nl-inner">
        <svg className="nl-squiggle" viewBox="0 0 200 80" fill="none">
          <path d="M10 40 Q60 10 100 40 T190 40" stroke="#9b59b6" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>

        <h2 className="nl-heading">
          Subscribe to<br />our newsletter
        </h2>
        <p className="nl-sub">To make your stay special and even more memorable</p>

        {submitted ? (
          <div className="nl-success">🎉 Thank you for subscribing!</div>
        ) : (
          <button className="nl-btn" onClick={() => setSubmitted(true)}>
            Subscribe Now
          </button>
        )}
      </div>
    </section>
  );
};

export default Newsletter;