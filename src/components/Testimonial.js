import React from 'react';
import './Testimonial.css';

const sidePhotos = [
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    cls: 'side-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face',
    cls: 'side-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    cls: 'side-3',
  },
  {
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face',
    cls: 'side-right-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face',
    cls: 'side-right-2',
  },
];

const Testimonial = () => (
  <section className="testimonial" id="contact">
    <div className="testimonial-inner">

      <div className="testimonial-side left">
        {sidePhotos.slice(0, 3).map((p) => (
          <div key={p.cls} className={`side-avatar ${p.cls}`}>
            <img src={p.src} alt="customer" />
          </div>
        ))}
      </div>

      <div className="testimonial-center">
        <h2 className="testimonial-heading">
          What our customer<br />
          says <span className="underline-yellow">About Us</span>
        </h2>

        <blockquote className="testimonial-quote">
          <span className="quote-mark open">"</span>
          Elementum delivered the site with in the timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
          <span className="quote-mark close">"</span>
        </blockquote>
      </div>

      <div className="testimonial-side right">
        {sidePhotos.slice(3).map((p) => (
          <div key={p.cls} className={`side-avatar ${p.cls}`}>
            <img src={p.src} alt="customer" />
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonial;
