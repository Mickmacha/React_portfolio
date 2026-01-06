'use client'
import React, { useState } from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/SkillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ML/AI');
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="py-10 md:py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl py-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-bold">
          Skills & Technologies
        </h2>
        <p className="text-sm md:text-lg py-5 leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are the technologies I work with to bring ideas to life
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
        {skillsData[activeCategory].map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;