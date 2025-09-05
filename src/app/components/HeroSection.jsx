import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const HeroSection = ({ isLoaded }) => {
  return (
    <section className="text-center py-10 md:py-20">
      <div className={`transform transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-6xl py-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-bold">
          Michael Macharia
        </h2>
        
        <div className="relative inline-block">
          <h3 className="text-xl md:text-3xl py-2 text-gray-700 dark:text-gray-300 font-medium">
            Software Developer/Data Scientist
          </h3>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 transform scale-x-0 animate-pulse" style={{
            animation: 'scaleX 2s ease-out 1s forwards, pulse 2s infinite 3s'
          }}></div>
        </div>
        
        <p className="text-sm md:text-lg py-5 leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hi, I'm Mike. I'm a passionate software developer based in Nairobi, Kenya, 
          specializing in full-stack development and AI/Machine Learning solutions.
        </p>
      </div>
      
      {/* Social Links */}
      <div className={`flex justify-center space-x-6 mt-8 transform transition-all duration-1000 delay-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {[
          { Icon: AiFillGithub, color: 'hover:text-gray-800 dark:hover:text-white' },
          { Icon: AiFillTwitterCircle, color: 'hover:text-blue-500' },
          { Icon: AiFillLinkedin, color: 'hover:text-blue-700' }
        ].map(({ Icon, color }, index) => (
          <Icon 
            key={index}
            className={`text-3xl md:text-4xl text-gray-600 dark:text-gray-400 ${color} transform hover:scale-125 transition-all duration-300 cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;