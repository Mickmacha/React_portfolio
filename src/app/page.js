'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import CallToAction from './components/CallToAction';
import BackgroundElements from './components/BackgroundElements';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Check for saved dark mode preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(systemPreference);
    }
  }, []);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        
        <BackgroundElements />
        
        <main className="relative z-10 px-4 md:px-10">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isLoaded={isLoaded} />
          <HeroSection isLoaded={isLoaded} />
          <AboutSection />
          <Skills />
          <CallToAction />
        </main>
        
        <style jsx>{`
          @keyframes scaleX {
            to {
              transform: scaleX(1);
            }
          }
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
            background-size: 200% auto;
          }
        `}</style>
      </div>
    </div>
  );
}