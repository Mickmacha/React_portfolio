'use client'
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { BsArrowDown } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const roles = [
  'ML/AI Engineer',
  'Software Developer',
  'Full-Stack Developer',
  'Data Scientist'
];

const HeroSection = ({ isLoaded }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    
    const currentRole = roles[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText.length < currentRole.length) {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      } else if (!isDeleting && currentText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else if (isDeleting && currentText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, isLoaded]);

  return (
    <section className="min-h-[85vh] flex items-center py-12 md:py-20 relative">
      <div
        className={`mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 md:flex-row md:items-center md:justify-between transform transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left: Text content */}
        <div className="w-full text-center md:w-3/5 md:text-left">
          {/* Location Badge */}
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 md:justify-start">
            <HiLocationMarker className="text-cyan-600 dark:text-cyan-400" />
            <span>Nairobi, Kenya</span>
          </div>

          {/* Main Heading */}
          <h1 className="py-2 text-4xl font-extrabold md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Michael Kimani
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="relative mt-2 min-h-[52px] md:min-h-[64px]">
            <h2 className="py-2 text-xl font-semibold text-gray-700 dark:text-gray-300 md:text-3xl">
              <span className="text-gray-600 dark:text-gray-400">I&apos;m a </span>
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent font-bold">
                {currentText}
              </span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
            Proactive ML/AI engineer and software developer with a strong background in data science and full‑stack development.
            I build custom AI agents and end‑to‑end systems that turn complex problems into elegant, production‑ready solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Link
              href="/projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-cyan-600 hover:to-teal-600 hover:shadow-2xl hover:scale-[1.02]"
            >
              View Work
            </Link>
            <Link
              href="/resume"
              className="rounded-xl border-2 border-cyan-500 bg-white px-8 py-3 text-base font-semibold text-gray-800 shadow-md transition-all duration-300 hover:bg-cyan-50 hover:shadow-xl dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
            >
              View Resume
            </Link>
          </div>
        </div>

        {/* Right: Profile card */}
        <div className="w-full md:w-2/5">
          <div className="relative mx-auto flex max-w-xs flex-col items-center rounded-3xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:bg-gray-900/80">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-cyan-500/20 blur-2xl" />
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-800">
              {imageError ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-500 text-3xl font-bold text-white">
                  MK
                </div>
              ) : (
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Michael Kimani"
                  fill
                  sizes="128px"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              ML/AI Engineer & Software Developer
            </h3>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
              Focused on AI agents, conversational systems, and full‑stack web applications.
            </p>
          </div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className={`flex justify-center space-x-6 mt-10 transform transition-all duration-1000 delay-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <a 
          href="https://github.com/Mickmacha" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <AiFillGithub className="text-4xl md:text-5xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transform hover:scale-125 transition-all duration-300 cursor-pointer" />
        </a>
        <a 
          href="https://www.linkedin.com/in/michaelmacharia254/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <AiFillLinkedin className="text-4xl md:text-5xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-125 transition-all duration-300 cursor-pointer" />
        </a>
        <a 
          href="mailto:mikekimani2023@gmail.com"
          className="group"
        >
          <AiOutlineMail className="text-4xl md:text-5xl text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transform hover:scale-125 transition-all duration-300 cursor-pointer" />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <BsArrowDown className="text-2xl text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
};

export default HeroSection;