import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
const Navigation = ({ isLoggedIn, logout }) => {
const navigate = useNavigate(); // Get navigate function

  return isLoggedIn ? (
    <button onClick={logout}>Logout</button> // Show logout button when logged in
  ) : (
    <button onClick={() => navigate('/login')}>Login</button> // Show login button when logged out
  );
};

const Navbar = ({ isLoggedIn, logout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) { // Adjust the scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src="logo-kle.png" alt="Logo" className="logo" />
      </div>
      <ul className='ulnav'>
        <li><Link to="/home"  className="home">Home</Link></li>
        <li><Link to="/viewpage" className='home'>View</Link></li>
        <li><Navigation isLoggedIn={isLoggedIn} logout={logout} className="login" /></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
