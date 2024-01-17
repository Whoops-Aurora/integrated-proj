
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>KLE Technological University (KLE Tech) has its roots in one of the premier Engineering Institutions of Karnataka,
             B. V. Bhoomaraddi College of Engineering and Technology (BVB), a prestigious Engineering College in Hubballi.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programming">Programming</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/association">Association</a></li>
            <li><a href="/literature">Literature</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: mail@kletec.ac.in</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; All rights reserved-CSE B Div.</p>
      </div>
    </footer>
  );
}

export default Footer;
