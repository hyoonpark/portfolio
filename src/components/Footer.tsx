import React from 'react';
import { Link } from 'react-scroll';
import { sectionStyles } from '../styles/common';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-dark-card text-white dark:text-dark-text py-8">
      <div className={sectionStyles.container}>
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} HaYoon Park. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-400 dark:text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <div className="mt-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-indigo-400 
              dark:hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
            >
              Back to Top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 