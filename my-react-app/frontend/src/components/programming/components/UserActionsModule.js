// UserActionsModule.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserActionsModule = () => {
  return (
    <div className="bg-gray-200 p-4 text-center">
      <p className="text-lg font-semibold">
        Ready for the challenge? Register for the contest now!
      </p>
      <Link to="/register" className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 inline-block hover:bg-blue-700 mr-2">
        Register for Contest
      </Link>
      {/* <span className="text-gray-500">or</span> */}
      <Link to="/create-account" className="bg-green-500 text-white py-2 px-4 rounded-full mt-4 inline-block hover:bg-green-700 ml-2">
        Create an Account
      </Link>
      <p className="mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
      <p className="mt-4">
        Explore our{' '}
        <Link to="/questions" className="text-blue-500 hover:underline">
          Coding Challenges
        </Link>
      </p>
    </div>
  );
};

export default UserActionsModule;
