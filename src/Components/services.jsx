import React from 'react';
import '../css/services.css';

const servicesData = [
  {
    title: 'Machine Learning and Data Science',
    description: 'Harness the power of data with advanced machine learning techniques.',
    image: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg?w=2000',
  },
  {
    title: 'Android Development',
    description: 'Create innovative and user-friendly Android applications.',
    image: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=2000',
  },
  {
    title: 'Web Development',
    description: 'Build responsive and dynamic websites for your business.',
    image: 'https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-1994.jpg?w=2000',
  },
  {
    title: 'UI/UX and Graphics Design',
    description: 'Design visually appealing user interfaces and stunning graphics.',
    image: 'https://img.freepik.com/free-vector/flat-design-ui-ux-background_23-2149093996.jpg',
  },
  {
    title: 'Automation and IoT Services',
    description: 'Automate processes and leverage IoT technology for efficiency.',
    image: 'https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61200.jpg?w=2000',
  },
  {
    title: 'Data Analytics and Insights',
    description: 'Unlock the potential of your business data with our data analytics services. We help you make informed decisions by collecting, analyzing, and visualizing data from various sources. Gain valuable insights and optimize your strategies for growth.',
    image: 'https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg',
  },
  {
    title: 'Low Code development using AI',
    description: 'we believe this is a new stack of app development. Using AI, we create a quick and self-scalable software depending on the requirements. We believe that by utilizing this technology, our clients will be able to maintain and upgrade their systems on their own.',
    image: 'https://img.freepik.com/free-vector/hand-drawn-rpa-illustration_23-2149243331.jpg',
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
