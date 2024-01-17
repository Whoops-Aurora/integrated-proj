// Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserActionsModule from './UserActionsModule';
import UpcomingEventsModule from './UpcomingEventsModule';
import PastEventsModule from './PastEventsModule';
const Homepage = () => {
  return (
    <div className='py-32'>
      {/* <header className="bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Coding Exercise Platform</h1>
        <nav className="mt-2">
          <Link to="/" className="text-white hover:text-gray-300 mx-2">
            Home
          </Link>
          <Link to="/questions" className="text-white hover:text-gray-300 mx-2">
            Questions
          </Link>
          <Link to="/leaderboard" className="text-white hover:text-gray-300 mx-2">
            Leaderboard
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300 mx-2">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300 mx-2">
            Register
          </Link>
        </nav>
      </header> */}
     
      <section className="p-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Coding Exercise Platform</h2>
        <p className="text-gray-700">Sharpen your coding skills with a variety of programming challenges.</p>
        <Link to="/questions">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </section>
      <UserActionsModule />
      <UpcomingEventsModule/>
      <PastEventsModule/>
    </div>
  );
};

export default Homepage;
