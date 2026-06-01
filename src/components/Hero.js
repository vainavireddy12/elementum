import React from 'react';
import './Hero.css';

const teamImages = [
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', alt: 'Team member 1', cls: 'img-1' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face', alt: 'Team member 2', cls: 'img-2' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face', alt: 'Team member 3', cls: 'img-3' },
  { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', alt: 'Team member 4', cls: 'img-4' },
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', alt: 'Team member 5', cls: 'img-5' },
  { src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face', alt: 'Team member 6', cls: 'img-6' },
];

const Hero = () => (
  <section className="hero" id="home">
    {/* Decorative blobs */}
    <div className="blob blob-squiggle"></div>
    <div className="blob blob-purple"></div>

    <div className="hero-inner">
      <h1 className="hero-title">
        The <span className="highlight thinkers">thinkers</span> and<br />
        doers were <span className="highlight changing">changing</span><br />
        the <span className="highlight status">status</span> Quo with
      </h1>

      <p className="hero-sub">
        We are a team of strategists, designers communicators, researchers, Togsether,<br />
        we belive that progress only hgppens when you refuse to play things safe.
      </p>

      <div className="hero-avatars">
        {teamImages.map((img) => (
          <div key={img.cls} className={`avatar-wrap ${img.cls}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
