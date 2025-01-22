import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';

const Education: React.FC = () => {
  return (
    <section id="education" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 className={sectionStyles.title}>
          Education
        </motion.h2>
        <div className={sectionStyles.content}>
          <motion.div className={sectionStyles.card}>
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-2xl text-indigo-600 dark:text-indigo-400 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  부산대학교
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  유기소재시스템공학과 (2015.03 ~ 2021.02)
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