import React from 'react';
import './About.css';

const About = () => (
  <section className="about" id="studio">
    <div className="about-inner">

      {/* Row 1: text left, image right */}
      <div className="about-row row-1">
        <div className="about-text">
          <h2 className="about-heading">
            <span className="underline-red">Tomorrow</span> should<br />
            be better than today
          </h2>
          <p>
            We are a team of strategists, designers communicators, researchers.
            Togsether, we belive that progress only happens when you refuse
            to play things safe.
          </p>
          <a href="#services" className="read-more">
            Read more <span className="arrow">→</span>
          </a>
        </div>

        <div className="about-visual right">
          <div className="triangle tri-pink tri-top-right"></div>
          <div className="circle-img">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop"
              alt="Team meeting"
            />
          </div>
          <div className="pink-glow"></div>
        </div>
      </div>

      {/* Row 2: image left, text right */}
      <div className="about-row row-2">
        <div className="about-visual left">
          <div className="triangle tri-red tri-bottom-left"></div>
          <div className="triangle tri-red tri-top-left small"></div>
          <div className="circle-img">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop"
              alt="Working together"
            />
          </div>
        </div>

        <div className="about-text right-text">
          <h2 className="about-heading">
            See how we can<br />help you progress
          </h2>
          <p>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#services" className="read-more">
            Read more <span className="arrow">→</span>
          </a>
        </div>
      </div>

    </div>

    {/* Decorative red squiggle line */}
    <svg className="squiggle-line" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 100 Q150 20 300 100 T600 100" stroke="#e05a5a" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  </section>
);

export default About;
