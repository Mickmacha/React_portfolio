import React from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode, isLoaded }) => {
  return (
    <nav className="py-6 md:py-10 mb-8 md:mb-12 flex justify-between items-center">
      <h1 className={`font-bold text-xl md:text-2xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent transform transition-all duration-500 ${
        isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        By Mike
      </h1>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {darkMode ? 
            <BsSunFill className="text-yellow-500 text-xl" /> : 
            <BsMoonStarsFill className="text-gray-700 text-xl" />
          }
        </button>
        
        <a 
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
          href="#"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;