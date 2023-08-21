import React from 'react';
import './hero.css';
import heroImage from '../../Images/idea.png'; // Replace with your image file
import Navbar from '../../Components/navbar';
const Hero = () => {
  return (
    <section id='about' className="hero">
              <Navbar></Navbar>

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            MarginTop Solutions
          </h1>
          
          <h4 className="hero-subtitle">
            Elevating Ideas, Transforming Futures
          </h4>
         
          <p className="hero-description">
            Welcome to a realm where <span className="highlight">innovation</span> meets <span className="highlight">expertise</span>. At <span className="highlight">MarginTop Solutions</span>, we craft success stories through <b>innovative tech solutions</b> .
          </p>
          <div className='button'><button className="cta-button">Explore Excellence</button></div>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="MarginTop Solutions" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
