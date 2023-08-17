import React from 'react';
import '../css/navbar.css';
import logo from '../Images/image.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> <a href="#"><img src={logo} alt="" srcset="" /></a> </div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
