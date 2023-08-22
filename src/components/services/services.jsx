import React from 'react';
import {BiNetworkChart} from 'react-icons/bi'
import {FaMobile} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'
import {MdDesignServices} from 'react-icons/md'
import {GiChariot} from 'react-icons/gi'
import {BsDatabaseCheck} from 'react-icons/bs'
import {GiArtificialHive} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {SiBmcsoftware} from 'react-icons/si'
import './services.css'

  

const servicesData = [
  {
    title: 'Machine Learning and Data Science',
    description: 'Machine learning model development and deployment with Data analysis, feature engineering, and predictive modeling',
    image: <BiNetworkChart color="green" size={40}/>,
  },
  {
    title: 'Android and iOS Development',
    description: 'Custom mobile app development for iOS and Android with cross-platform solutions for diverse business needs',
    image: <FaMobile color="green" size={40}/>,
  },
  {
    title: 'Web Development',
    description: 'Responsive website design and development like E-commerce, portfolio, and informational site creation',
    image: <CgWebsite color="green" size={40}/>,
  },
  {
    title: 'UI/UX and Graphics Design',
    description: 'User-centered UI/UX design for apps and websites with graphic design, branding, and visual identity solutions',
    image: <MdDesignServices color="green" size={40}/>,
  },
  {
    title: 'Automation and IoT Services',
    description: 'IoT device integration, control, and monitoring with process automation and smart system implementation',
    image: <GiChariot color="green" size={40}/>,
  },
  {
    title: 'Data Analytics and Insights',
    description: 'Data collection, processing, and visualization with insightful dashboards and interactive data reports',
    image: <BsDatabaseCheck color="green" size={40}/>,
  },
  {
    title: 'Low Code development using AI',
    description: 'Rapid AI application development using low-code platforms using AI-driven process enhancements and task automation',
    image: <GiArtificialHive color="green" size={40}/>,
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platform setup and customization with payment gateway integration and online store optimization',
    image: <AiOutlineShoppingCart color="green" size={40}/>,
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet specific business needs, including design, development, and implementation',
    image: <SiBmcsoftware size={40} color="green"/>,
  },
];


const Services = () => {
  return (
    <section id='services' className="services">
      <div className="services-content">
        <div className='title'><h2>Our Services</h2><p>Empowering Your Journey with Innovation</p></div>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className="service">
              <div className="image-container">
                <span>{service.image}</span>
              </div>
              <div className="service-details">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;