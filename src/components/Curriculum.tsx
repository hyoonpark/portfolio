import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Curriculum: React.FC = () => {
  const { t } = useTranslation();

  const courses = [
    {
      title: t('curriculum.sparos.title'),
      period: t('curriculum.sparos.period'),
      icon: <FaLaptopCode />,
      details: [
        t('curriculum.sparos.details.1'),
        t('curriculum.sparos.details.2'),
        t('curriculum.sparos.details.3')
      ]
    },
    {
      title: t('curriculum.ssafy.title'),
      period: t('curriculum.ssafy.period'),
      icon: <FaCode />,
      details: [
        t('curriculum.ssafy.details.1'),
        t('curriculum.ssafy.details.2'),
        t('curriculum.ssafy.details.3')
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {t('curriculum.title')}
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start">
                <span className="text-2xl text-indigo-600 dark:text-indigo-400 mr-4 mt-1">
                  {course.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {course.period}
                  </p>
                  <ul className="space-y-2">
                    {course.details.map((detail, idx) => (
                      <li 
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum; 