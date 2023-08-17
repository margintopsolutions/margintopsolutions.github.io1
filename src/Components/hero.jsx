import React from 'react';
import '../css/HeroSection.css';

const Hero = () => {
  return (
    <section id='about' className="hero">
      <div className="hero-content">
        <h1>Welcome to MarginTop Solutions</h1>
        <h4><i>Where Tech Meets Brilliance.</i></h4>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
