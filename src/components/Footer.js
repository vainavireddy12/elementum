import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          {['Home', 'Studio', 'Services', 'Blog'].map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer-col">
        <h4>Terms & Policies</h4>
        <ul>
          {['Privacy Policy', 'Terms & Conditions', 'License', 'Accessibility'].map(l => (
            <li key={l}><a href="#!">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer-col">
        <h4>Follow Us</h4>
        <ul>
          {['Instagram', 'LinkedIn', 'YouTube', 'Twitter'].map(l => (
            <li key={l}><a href="#!">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer-col">
        <h4>Terms & Policies</h4>
        <p className="footer-address">1699a Flynn rd, STE 2D Chicago, IL 63867</p>
        <p className="footer-contact">(123) 456-7890</p>
        <p className="footer-contact"><a href="mailto:info@elementum.com">info@elementum.com</a></p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>©2021 Elementum. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
