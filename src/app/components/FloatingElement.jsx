
import React from 'react';

const FloatingElement = ({ children, delay = 0 }) => (
  <div 
    className="animate-pulse"
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: '3s',
      animationIterationCount: 'infinite'
    }}
  >
    {children}
  </div>
);

export default FloatingElement;