import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/profile.JPG';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-4"
        >
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-dark-text sm:text-5xl md:text-6xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block mb-2 md:mb-4"
              >
                {t('hero.greeting')}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block text-indigo-600 dark:text-dark-primary"
              >
                {t('hero.title').split('<br/>')[0]}<br className="hidden sm:block" />
                {t('hero.title').split('<br/>')[1]}
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              {t('hero.description').split('<br/>')[0]}<br className="hidden sm:block" />
              {t('hero.description').split('<br/>')[1]}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 md:mt-8 flex justify-center md:justify-start"
            >
              <div className="rounded-md shadow hover:shadow-lg transition-shadow duration-300">
                <a 
                  href="#contact" 
                  className="w-full flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                >
                  {t('hero.contactButton')}
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 md:mt-[-2rem] mb-6 md:mb-0"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-800"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 