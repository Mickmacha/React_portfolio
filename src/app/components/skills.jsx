import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl py-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-bold">
          Skills & Technologies
        </h2>
        <p className="text-sm md:text-lg py-5 leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are the technologies I work with to bring ideas to life
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;