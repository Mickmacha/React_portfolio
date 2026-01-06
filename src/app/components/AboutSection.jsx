'use client'
import React from 'react';

// Using HeroIcons v2 (Hi2) which is more reliable in react-icons
import { HiBriefcase, HiAcademicCap, HiTrophy } from 'react-icons/hi2';
import { FaAward } from 'react-icons/fa';

const AboutSection = () => {
  const experiences = [
    {
      icon: HiBriefcase,
      title: 'Full-Stack Developer',
      company: 'Abya Africa',
      period: 'June 2023 – Present',
      location: 'Nairobi, Kenya',
      description: 'Developing custom AI agents for a decentralized Learning Management System. Initially built LMS using Django framework, later transitioned to Web3/Blockchain approach. Enhanced collaboration skills working in a team environment.',
      highlights: [
        'Custom AI agents for personalized learning',
        'Django ORM and MVT architecture',
        'Web3/Blockchain integration',
        'Team collaboration and front-end integration'
      ]
    },
    {
      icon: HiBriefcase,
      title: 'Full-Stack Conversational AI Developer',
      company: 'AmigosGrill UK',
      period: 'June 2025 – Sep 2025',
      location: 'Remote, UK',
      description: 'Designed, developed, and deployed an end-to-end voice-to-order system to automate restaurant ordering using conversational AI and e-commerce APIs.',
      highlights: [
        'Voice-to-order pipeline with Vapi and Twilio',
        'Python/Flask backend integration',
        'Square POS API integration',
        'Automated business processes'
      ]
    },
    {
      icon: HiTrophy,
      title: 'Competitive Data Scientist',
      company: 'Zindi',
      period: '2022 – Present',
      location: 'Remote',
      description: 'Participating in machine learning competitions, achieving top results in various challenges.',
      highlights: [
        'Cryptojacking Prediction: F1 score of 0.965',
        'Air Quality Challenge: MAE of 14.65',
        '5 Bronze Medals across competitions'
      ]
    }
  ];

  const education = {
    icon: HiAcademicCap,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Multimedia University of Kenya',
    period: 'Graduated October 2023',
    honors: 'Second Class, Upper Honours',
    role: 'Data Science Tech Lead MMU 2022-2023'
  };

  const EducationIcon = education.icon;

  return (
    <section id="about" className="py-10 md:py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl py-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-bold">
          About & Experience
        </h2>
        <p className="text-sm md:text-lg py-5 leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          My journey in software development and AI/ML engineering
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <HiBriefcase className="text-cyan-600 dark:text-cyan-400 text-3xl" />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="relative pl-8 md:pl-12 border-l-2 border-cyan-500 dark:border-cyan-400"
                >
                  <div className="absolute -left-3 md:-left-4 top-0 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                        <Icon className="text-2xl text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-cyan-500 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <HiAcademicCap className="text-cyan-600 dark:text-cyan-400 text-3xl" />
            Education
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                <EducationIcon className="text-2xl text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                  {education.degree}
                </h4>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                  {education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {education.period} • {education.honors}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <FaAward className="text-yellow-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {education.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;