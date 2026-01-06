"use client";
// Minimal, professional skill pill
import React, { useState, useEffect } from 'react';

const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  const IconComponent = skill.icon;

  return (
    <div
      className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 px-4 py-3 rounded-full shadow-sm hover:shadow-md transform transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-teal-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex items-center gap-3">
        {IconComponent && (
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 dark:bg-cyan-900/40">
            <IconComponent className={`text-xl ${skill.color || 'text-cyan-600 dark:text-cyan-400'}`} />
          </span>
        )}
        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;