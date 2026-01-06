'use client'
import React, { useState, useEffect } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ darkMode, setDarkMode, isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="py-6 md:py-10 mb-8 md:mb-12 flex justify-between items-center relative">
      <Link href="/">
        <h1 className={`font-bold text-xl md:text-2xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent transform transition-all duration-500 cursor-pointer ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          Michael Kimani
        </h1>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
              pathname === link.href || (link.href === '/#skills' && pathname === '/')
                ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 ml-4"
        >
          {darkMode ? 
            <BsSunFill className="text-yellow-500 text-xl" /> : 
            <BsMoonStarsFill className="text-gray-700 text-xl" />
          }
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {darkMode ? 
            <BsSunFill className="text-yellow-500 text-xl" /> : 
            <BsMoonStarsFill className="text-gray-700 text-xl" />
          }
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {isMenuOpen ? (
            <HiX className="text-2xl text-gray-700 dark:text-gray-300" />
          ) : (
            <HiMenu className="text-2xl text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 md:hidden z-50">
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  pathname === link.href || (link.href === '/#skills' && pathname === '/')
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;