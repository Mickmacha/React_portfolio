"use client";
// Skill card component for improving user interface
import React, { useState, useEffect } from 'react';

const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(skill.level), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);
  
  const IconComponent = skill.icon;
  
  return (
    <div 
      className={`group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <div className="relative">
          <IconComponent className={`text-5xl ${skill.color} transform group-hover:scale-110 transition-transform duration-300`} />
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </div>
        
        <h3 className="font-semibold text-gray-800 dark:text-white text-lg">{skill.name}</h3>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;