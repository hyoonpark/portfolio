import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';
import goodsduckImage from '../assets/goodsduck.png';
import ssgImage from '../assets/ssg.png';
import drinkImage from '../assets/thumbnail.jpg';

interface ProjectDetail {
  title: string;
  period: string;
  team: string;
  description: string;
  details: string[];
  techStack: string[];
  githubUrl: string;
  image: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: ProjectDetail[] = [
    {
      title: t('projects.goodsduck.title'),
      period: t('projects.goodsduck.period'),
      team: t('projects.goodsduck.team'),
      description: t('projects.goodsduck.description'),
      details: [
        t('projects.goodsduck.details.1'),
        t('projects.goodsduck.details.2'),
        t('projects.goodsduck.details.3')
      ],
      techStack: t('projects.goodsduck.techStack', { returnObjects: true }),
      githubUrl: t('projects.goodsduck.githubUrl'),
      image: goodsduckImage
    },
    {
      title: t('projects.ssg.title'),
      period: t('projects.ssg.period'),
      team: t('projects.ssg.team'),
      description: t('projects.ssg.description'),
      details: [
        t('projects.ssg.details.1'),
        t('projects.ssg.details.2'),
        t('projects.ssg.details.3')
      ],
      techStack: t('projects.ssg.techStack', { returnObjects: true }),
      githubUrl: t('projects.ssg.githubUrl'),
      image: ssgImage
    },
    {
      title: t('projects.drink.title'),
      period: t('projects.drink.period'),
      team: t('projects.drink.team'),
      description: t('projects.drink.description'),
      details: [
        t('projects.drink.details.1'),
        t('projects.drink.details.2'),
        t('projects.drink.details.3')
      ],
      techStack: t('projects.drink.techStack', { returnObjects: true }),
      githubUrl: t('projects.drink.githubUrl'),
      image: drinkImage
    }
  ];

  return (
    <section id="projects" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          {t('projects.title')}
        </motion.h2>
        
        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerChildren.item}
              className="mb-12 last:mb-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {project.period} | {project.team}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {project.details.map((detail, idx) => (
                    <li 
                      key={idx}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 