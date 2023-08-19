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
    image: 'https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=2000',
  },
  {
    title: 'Web Development',
    description: 'Responsive website design and development like E-commerce, portfolio, and informational site creation',
    image: 'https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-1994.jpg?w=2000',
  },
  {
    title: 'UI/UX and Graphics Design',
    description: 'User-centered UI/UX design for apps and websites with graphic design, branding, and visual identity solutions',
    image: 'https://img.freepik.com/premium-vector/ui-ux-design-concept-with-people-scene-flat-cartoon-design-woman-illustrator-creates-graphic-elements-places-buttons-working-with-layout-interface-vector-illustration-visual-story-web_9209-9545.jpg?w=2000',
  },
  {
    title: 'Automation and IoT Services',
    description: 'IoT device integration, control, and monitoring with process automation and smart system implementation',
    image: 'https://img.freepik.com/premium-vector/iot-automation-concept-man-holds-panel-with-analyzers-indicators-his-hands-good-websites-presentations-trendy-flat-style-vector_174639-57886.jpg?w=2000',
  },
  {
    title: 'Data Analytics and Insights',
    description: 'Data collection, processing, and visualization with insightful dashboards and interactive data reports',
    image: 'https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg',
  },
  {
    title: 'Low Code development using AI',
    description: 'Rapid AI application development using low-code platforms using AI-driven process enhancements and task automation',
    image: 'https://img.freepik.com/premium-vector/single-page-application-abstract-concept-vector-illustration_107173-25611.jpg?w=2000',
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platform setup and customization with payment gateway integration and online store optimization',
    image: 'https://img.freepik.com/free-vector/maternity-care-products-abstract-concept-vector-illustration-maternity-special-products-healthy-natural-cosmetics-clean-care-goods-pregnant-newborn-skin-treatment-abstract-metaphor_335657-4100.jpg',
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet specific business needs, including design, development, and implementation',
    image: 'https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?w=2000',
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
              <div className="image-container">
                <img src={service.image} alt={service.title} />
                <div className="image-overlay"></div>
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