'use client'
import React from 'react';
import Link from 'next/link';
import ResumeDisplay from '../components/ResumeDisplay';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Link 
            href="/"
            className="inline-block mb-6 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my experience, skills, and achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Resume Display */}
        <ResumeDisplay />
      </div>
    </div>
  );
};

export default ResumePage;
