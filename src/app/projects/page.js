'use client'
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiOutlineLink, AiFillStar, AiOutlineFork } from 'react-icons/ai';
import { SiPython, SiJavascript, SiReact, SiDjango, SiFlask, SiFastapi, SiPytorch } from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import Link from 'next/link';

// Technology icons mapping
const techIcons = {
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  'Next.js': TbBrandNextjs,
  Django: DiDjango,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  PyTorch: SiPytorch,
};

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Mickmacha/repos?sort=updated&per_page=12');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
        // Fallback projects if API fails
        setRepos([
          {
            id: 1,
            name: 'Learning Management System',
            description: 'Full-stack LMS built with Django and React, featuring custom AI agents for personalized learning experiences.',
            html_url: 'https://github.com/Mickmacha',
            language: 'Python',
            stargazers_count: 0,
            forks_count: 0,
            topics: ['django', 'react', 'ai', 'lms']
          },
          {
            id: 2,
            name: 'Voice-to-Order System',
            description: 'End-to-end voice-to-order system for restaurants using conversational AI, Vapi, Twilio, and Square POS API.',
            html_url: 'https://github.com/Mickmacha',
            language: 'Python',
            stargazers_count: 0,
            forks_count: 0,
            topics: ['flask', 'ai', 'voice-ai', 'restaurant']
          },
          {
            id: 3,
            name: 'Cryptojacking Detection',
            description: 'Machine learning model to identify malicious network activities, achieving F1 score of 0.965.',
            html_url: 'https://github.com/Mickmacha',
            language: 'Python',
            stargazers_count: 0,
            forks_count: 0,
            topics: ['machine-learning', 'pytorch', 'security']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getTechIcon = (language) => {
    if (!language) return null;
    const Icon = techIcons[language] || SiPython;
    return <Icon className="text-2xl" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-10 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            href="/"
            className="inline-block mb-8 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development, AI/ML solutions, and innovative applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-10 text-red-500">
            <p>Unable to load projects from GitHub. Showing featured projects instead.</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {repos.map((repo, index) => (
              <div
                key={repo.id || index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getTechIcon(repo.language) && (
                      <div className="text-cyan-600 dark:text-cyan-400">
                        {getTechIcon(repo.language)}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {repo.description || 'No description available'}
                </p>

                {/* Topics/Tags */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Stats and Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <AiFillStar />
                      <span>{repo.stargazers_count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AiOutlineFork />
                      <span>{repo.forks_count || 0}</span>
                    </div>
                    {repo.language && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <AiFillGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Mickmacha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold"
          >
            <AiFillGithub className="text-2xl" />
            View All on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;


