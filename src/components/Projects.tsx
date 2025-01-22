import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "React와 TypeScript를 사용한 개인 포트폴리오 웹사이트",
      imageUrl: "/projects/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/hyoonpark/portfolio/tree/dev",
      demoUrl: "https://hyoonpark.github.io/portfolio/"
    },
    {
      id: 2,
      title: "저속 노화 기록 애플리케이션",
      description: "MSA 기반의 주식 포트폴리오 관리 서비스",
      imageUrl: "/projects/stock.png",
      technologies: ["Spring Boot", "Spring Cloud", "AWS", "Docker", "Jenkins"],
      githubUrl: "https://github.com/hyoonpark/stock-app",
      demoUrl: null
    }
  ];

  return (
    <section id="projects" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 className={sectionStyles.title}>
          Projects
        </motion.h2>
        <div className={`${sectionStyles.content} ${sectionStyles.grid}`}>
          {projects.map((project) => (
            <motion.div className={sectionStyles.card}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 
                      text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 
                    hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 
                      hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      Demo
                    </a>
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

export default Projects; 