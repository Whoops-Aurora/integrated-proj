// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-8 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Coding Exercises</Link>
        <div className="flex space-x-4">
         <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/questions" className="text-white hover:text-gray-300">Practice</Link>
          {/* <Link to="/leaderboard" className="text-white hover:text-gray-300">Leaderboard</Link> */}
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
