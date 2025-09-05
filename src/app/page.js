import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';
import CallToAction from '../components/CallToAction';
import BackgroundElements from '../components/BackgroundElements';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
        
        <BackgroundElements />
        
        <main className="relative z-10 px-4 md:px-10">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isLoaded={isLoaded} />
          <HeroSection isLoaded={isLoaded} />
          <Skills />
          <CallToAction />
        </main>
        
        <style jsx>{`
          @keyframes scaleX {
            to {
              transform: scaleX(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}