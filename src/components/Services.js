import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    meta: 'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    meta: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    meta: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <h2 className="services-heading">
            What we <span className="highlight-green">can</span><br />
            offer you!
          </h2>
          <svg className="red-swirl" viewBox="0 0 300 120" fill="none">
            <path d="M280 10 Q200 60 150 60 Q80 60 20 100" stroke="#e05a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        <div className="services-list">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-row ${hovered === i ? 'active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="service-meta">{s.meta}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
