import React from 'react';
import '../css/services.css';

const servicesData = [
  {
    title: 'Machine Learning and Data Science',
    description: 'Machine learning model development and deployment with Data analysis, feature engineering, and predictive modeling',
    image: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg?w=2000',
  },
  {
    title: 'Android and IOS Development',
    description: 'Custom mobile app development for iOS and Android with cross-platform solutions for diverse business needs',
    image: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=2000',
  },
  {
    title: 'Web Development',
    description: 'Responsive website design and development like E-commerce, portfolio, and informational site creation',
    image: 'https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-1994.jpg?w=2000',
  },
  {
    title: 'UI/UX and Graphics Design',
    description: 'User-centered UI/UX design for apps and websites with graphic design, branding, and visual identity solutions',
    image: 'https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093996.jpg',
  },
  {
    title: 'Automation and IoT Services',
    description: 'IoT device integration, control, and monitoring with process automation and smart system implementation',
    image: 'https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61200.jpg?w=2000',
  },
  {
    title: 'Data Analytics and Insights',
    description: 'Data collection, processing, and visualization with insightful dashboards and interactive data reports',
    image: 'https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg',
  },
  {
    title: 'Low Code development using AI',
    description: 'Rapid AI application development using low-code platforms using AI-driven process enhancements and task automation',
    image: 'https://img.freepik.com/free-vector/hand-drawn-rpa-illustration_23-2149243331.jpg',
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platform setup and customization with payment gateway integration and online store optimization',
    image: 'https://img.freepik.com/free-vector/maternity-care-products-abstract-concept-vector-illustration-maternity-special-products-healthy-natural-cosmetics-clean-care-goods-pregnant-newborn-skin-treatment-abstract-metaphor_335657-4100.jpg',
  },
  
];

const Services = () => {
  return (
    <section id='services' className="services">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className="service">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
