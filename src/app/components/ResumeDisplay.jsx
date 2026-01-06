'use client'
import React, { useState } from 'react';
import { HiBriefcase, HiAcademicCap, HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaAward, FaPython, FaReact, FaNode } from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiPytorch, SiDocker, SiJavascript, SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb, SiNumpy, SiPandas, SiScikitlearn, SiBlockchaindotcom, SiSolidity } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import Image from 'next/image';

const ResumeDisplay = () => {
  const [imageError, setImageError] = useState(false);
  const personalInfo = {
    name: 'Michael Kimani',
    title: 'ML/AI Engineer & Software Developer',
    location: 'Nairobi, Kenya',
    phone: '+254798806663',
    email: 'mikekimani2023@gmail.com',
    github: 'https://github.com/Mickmacha',
    linkedin: 'https://www.linkedin.com/in/michaelmacharia254/'
  };

  const summary = `Proactive AI/ML engineer with a strong background in data science and full-stack development. 
  I specialize in building custom AI agents, developing robust software solutions, and turning complex problems 
  into elegant solutions. Passionate about applying technical skills to create innovative and intelligent solutions.`;

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Abya Africa',
      period: 'June 2023 – Present',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      description: 'Developing custom AI agents for a decentralized Learning Management System, integrating advanced machine learning to enhance user experience.',
      achievements: [
        'Currently developing custom AI agents for a decentralized Learning Management System',
        'Initially developed LMS using Python\'s Django framework, later transitioning to Web3/Blockchain approach',
        'Enhanced collaboration skills working in a team environment',
        'Gained significant understanding of Django ORM and MVT architecture'
      ]
    },
    {
      title: 'Full-Stack Conversational AI Developer',
      company: 'AmigosGrill UK',
      period: 'June 2025 – Sep 2025',
      location: 'Remote, UK',
      type: 'Contract',
      description: 'Designed, developed, and deployed an end-to-end voice-to-order system to automate restaurant ordering using conversational AI and e-commerce APIs.',
      achievements: [
        'Engineered a working, real-time voice-to-order pipeline by integrating Vapi (Voice AI), Twilio (telephony), Python/Flask backend, and Square POS API',
        'Developed custom API logic within Flask to handle complex order customization, inventory lookups, and secure transaction authorization',
        'Automated key business processes, leading to significant reduction in manual employee handling time'
      ]
    },
    {
      title: 'Competitive Data Scientist',
      company: 'Zindi',
      period: '2022 – Present',
      location: 'Remote',
      type: 'Competitions',
      description: 'Participating in machine learning competitions, achieving top results in various challenges.',
      achievements: [
        'Cryptojacking Prediction Challenge: Developed ML model achieving F1 score of 0.965',
        'Air Quality Challenge: Built model predicting air quality with MAE of 14.65',
        'Achieved 5 Bronze Medals across multiple competitions'
      ]
    }
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Multimedia University of Kenya',
    period: 'Graduated October 2023',
    honors: 'Second Class, Upper Honours',
    role: 'Data Science Tech Lead MMU 2022-2023'
  };

  const skillCategories = {
    'ML/AI': [
      { name: 'Python', icon: FaPython, level: 92 },
      { name: 'PyTorch', icon: SiPytorch, level: 85 },
      { name: 'NumPy', icon: SiNumpy, level: 88 },
      { name: 'Pandas', icon: SiPandas, level: 90 },
      { name: 'Scikit-Learn', icon: SiScikitlearn, level: 87 },
      { name: 'Custom Agent Development', level: 85 },
      { name: 'Data Analysis & Preprocessing', level: 90 },
      { name: 'Model Training & Validation', level: 88 }
    ],
    'Frontend': [
      { name: 'React', icon: FaReact, level: 88 },
      { name: 'Next.js', icon: TbBrandNextjs, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 }
    ],
    'Backend': [
      { name: 'Django', icon: DiDjango, level: 88 },
      { name: 'Flask', icon: SiFlask, level: 87 },
      { name: 'FastAPI', icon: SiFastapi, level: 85 },
      { name: 'Node.js', icon: FaNode, level: 80 },
      { name: 'REST APIs', level: 88 }
    ],
    'Database & Tools': [
      { name: 'MySQL', icon: SiMysql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'Docker', icon: SiDocker, level: 82 },
      { name: 'Git', level: 88 },
      { name: 'Linux', level: 85 }
    ],
    'Web3/Blockchain': [
      { name: 'Blockchain', icon: SiBlockchaindotcom, level: 75 },
      { name: 'Solidity', icon: SiSolidity, level: 70 }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 p-8 text-white md:p-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: Name & Title */}
          <div className="text-center md:text-left">
            <h1 className="mb-1 text-3xl font-bold md:text-4xl">{personalInfo.name}</h1>
            <h2 className="text-md mb-4 text-cyan-100 md:text-lg">
              {personalInfo.title}
            </h2>
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-3 text-xs md:justify-start md:text-sm">
              <div className="flex items-center gap-1.5">
                <HiLocationMarker className="text-lg" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiPhone className="text-lg" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiMail className="text-lg" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Right: Profile photo & social */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/80 shadow-lg md:h-28 md:w-28">
              {imageError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 text-white text-2xl font-bold">
                  MK
                </div>
              ) : (
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Michael Kimani"
                  fill
                  sizes="112px"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-all duration-300 hover:bg-white/30 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-10 space-y-8">
        {/* Summary */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></div>
            Professional Summary
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {summary}
          </p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <HiBriefcase className="text-cyan-600 dark:text-cyan-400 text-2xl" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-cyan-500 dark:border-cyan-400 pl-6 pb-6 last:pb-0"
              >
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {exp.period}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {exp.location} • {exp.type}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-cyan-500 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <HiAcademicCap className="text-cyan-600 dark:text-cyan-400 text-2xl" />
            Education
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {education.degree}
            </h4>
            <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
              {education.institution}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {education.period} • {education.honors}
            </p>
            <div className="flex items-center gap-2">
              <FaAward className="text-yellow-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                {education.role}
              </span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
          <FaAward className="text-cyan-600 dark:text-cyan-400 text-2xl" />
            Technical Skills
          </h3>
          <div className="space-y-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  {category}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, idx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3"
                      >
                        {IconComponent && (
                          <IconComponent className="text-xl text-cyan-600 dark:text-cyan-400" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {skill.name}
                          </p>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <FaAward className="text-cyan-600 dark:text-cyan-400 text-2xl" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg p-5 border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                Cryptojacking Detection
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Developed ML model achieving F1 score of <span className="font-bold text-cyan-600">0.965</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg p-5 border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                Air Quality Prediction
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built model with Mean Absolute Error of <span className="font-bold text-cyan-600">14.65</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg p-5 border border-cyan-200 dark:border-cyan-800 md:col-span-2">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                Zindi Competitions
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Achieved <span className="font-bold text-cyan-600">5 Bronze Medals</span> across multiple machine learning competitions
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeDisplay;

