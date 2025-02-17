import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';

const Awards: React.FC = () => {
  const { t } = useTranslation();

  const awards = [
    {
      title: t('awards.sparos.title'),
      date: t('awards.sparos.date'),
      organization: t('awards.sparos.organization'),
      description: t('awards.sparos.description')
    },
    {
      title: t('awards.clone.title'),
      date: t('awards.clone.date'),
      organization: t('awards.clone.organization'),
      description: t('awards.clone.description')
    },
    {
      title: t('awards.ssafy.title'),
      date: t('awards.ssafy.date'),
      organization: t('awards.ssafy.organization'),
      description: t('awards.ssafy.description')
    }
  ];

  return (
    <section id="awards" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          {t('awards.title')}
        </motion.h2>
        
        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={staggerChildren.item}
                className={sectionStyles.card}
              >
                <div className="flex items-start">
                  <span className="text-2xl text-indigo-600 dark:text-indigo-400 mr-4">
                    <FaTrophy />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      {award.organization} | {award.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards; 