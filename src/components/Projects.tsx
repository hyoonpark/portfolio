import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-bg">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-dark-primary/20 
                        text-indigo-600 dark:text-dark-primary rounded-full text-sm"
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
                      hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
                        hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 