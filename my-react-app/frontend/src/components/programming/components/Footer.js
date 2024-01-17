// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center absolute bottom-0 left-0 right-0 mt-60 ">
      <p className="mb-2">&copy; 2024 Coding Exercise Platform. All rights reserved.</p>
      <div className="flex justify-center">
        <a href="/privacy" className="text-blue-400 hover:text-blue-300 mx-2">
          Privacy Policy
        </a>
        <a href="/terms" className="text-blue-400 hover:text-blue-300 mx-2">
          Terms of Service
        </a>
      </div>
      <div className="mt-2">
        <a href="https://twitter.com/example" className="text-blue-400 hover:text-blue-300 mx-2">
          Twitter
        </a>
        <a href="https://facebook.com/example" className="text-blue-400 hover:text-blue-300 mx-2">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;



