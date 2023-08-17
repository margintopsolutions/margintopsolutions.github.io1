import React from 'react';
import Slider from 'react-slick';
import '../css/technology.css';

// Array of technologies
const technologies = [
  {
    name: 'Technology 1',
    logo: 'https://example.com/technology1-logo.png',
  },
  {
    name: 'Technology 2',
    logo: 'https://example.com/technology2-logo.png',
  },
  {
    name: 'Technology 1',
    logo: 'https://example.com/technology1-logo.png',
  },
  {
    name: 'Technology 2',
    logo: 'https://example.com/technology2-logo.png',
  },
  {
    name: 'Technology 1',
    logo: 'https://example.com/technology1-logo.png',
  },
  {
    name: 'Technology 2',
    logo: 'https://example.com/technology2-logo.png',
  },
  // Add more technologies as needed
];

const TechnologiesPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one logo at a time
    slidesToScroll: 1,
    autoplay: true, // Set autoplay to true
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds
  };

  return (
    <section className="technologies">
      <div className="technologies-content">
        <h2>Technologies We Use</h2>
        <Slider {...settings}>
          {technologies.map((technology, index) => (
            <div key={index} className="technology">
              <img src={technology.logo} alt={technology.name} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechnologiesPage;
