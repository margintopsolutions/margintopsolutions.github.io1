import React from 'react';
import '../css/ContactSection.css';

const ContactSection = () => {
  return (
    <section id='contact' className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Please fill out the form below:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
