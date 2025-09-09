
import React from 'react';
import FloatingElement from './FloatingElement';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20 blur-xl"></div>
      </FloatingElement>
      <FloatingElement delay={1000}>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 blur-xl"></div>
      </FloatingElement>
      <FloatingElement delay={2000}>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl"></div>
      </FloatingElement>
    </div>
  );
};

export default BackgroundElements;