import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaDatabase, FaLanguage } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "정보처리기사",
      date: "2024.06",
      icon: <FaCertificate />,
      organization: "한국산업인력공단"
    },
    {
      title: "SQLD",
      date: "2024.06",
      icon: <FaDatabase />,
      organization: "한국데이터산업진흥원"
    },
    {
      title: "OPIc",
      date: "2024.08",
      icon: <FaLanguage />,
      organization: "ACTFL",
      level: "Intermediate Mid"
    }
  ];

  return (
    <section id="certificates" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 className={sectionStyles.title}>
          Certificates
        </motion.h2>

        <div className={`${sectionStyles.content} ${sectionStyles.grid}`}>
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={sectionStyles.card}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl text-indigo-600 dark:text-indigo-400 mr-3">
                  {cert.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </p>
                  {cert.level && (
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                      {cert.level}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 