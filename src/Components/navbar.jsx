import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../Images/image.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <button className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        {/* <li>
          <a href="#contact">Contact Us</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
