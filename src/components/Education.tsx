import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 className={sectionStyles.title}>
          {t('education.title')}
        </motion.h2>
        <div className={sectionStyles.content}>
          <motion.div className={sectionStyles.card}>
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-2xl text-indigo-600 dark:text-indigo-400 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t('education.university')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('education.major')}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {t('education.period')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 