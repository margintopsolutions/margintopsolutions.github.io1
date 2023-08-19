import React from 'react';
import '../css/footer.css';
import logo from '../Images/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons' 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="" srcset="" ></img>
        </div>
        <div className="footer-info">
          <p>Pokhara Nepal</p>
          <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+9779845926945">+977-98-45926945</a>| <a href="tel:+9779814148108">+977-98-14148108</a></p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:margintopsolutions@gmail.com">margintopsolutions@gmail.com</a></p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} MarginTop Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

