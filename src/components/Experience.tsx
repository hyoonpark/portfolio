import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';

interface ExperienceItem {
  id: number;
  title: string;
  period: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  techStack: string[];
}

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: t('experience.project1.title'),
      period: t('experience.project1.period'),
      icon: <FaCloud />,
      description: t('experience.project1.description'),
      details: [
        t('experience.project1.details.1'),
        t('experience.project1.details.2'),
        t('experience.project1.details.3'),
        t('experience.project1.details.4'),
        t('experience.project1.details.5')
      ],
      techStack: ["Java", "Spring Boot", "Docker", "Jenkins"]
    }
  ];

  return (
    <section id="experience" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          {t('experience.title')}
        </motion.h2>

        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={staggerChildren.item}
              className={sectionStyles.card}
            >
              <div className="flex items-start">
                <span className="text-2xl text-indigo-600 dark:text-indigo-400 mr-4 mt-1">
                  {exp.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {exp.details.map((detail, idx) => (
                      <li 
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={sectionStyles.tag}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 