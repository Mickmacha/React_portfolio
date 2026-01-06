import React from 'react';

const CallToAction = () => {
  return (
    <section className="text-center py-20">
      <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/20 dark:to-teal-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-cyan-200/30 dark:border-cyan-700/30">
        <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Let&apos;s Build Something Amazing Together
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base">
          Ready to turn your ideas into reality? Let&apos;s connect and create something extraordinary.
        </p>
        <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default CallToAction;