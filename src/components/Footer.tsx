import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-dark-card text-white dark:text-dark-text py-8">
      <div className="container-wrapper">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HaYoon Park. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-400 dark:text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#about"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-dark-text transition-colors duration-200"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 