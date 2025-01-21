import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { 
  DiJava, DiPython, DiJavascript,
  DiMysql, DiPostgresql, DiMongodb, 
  DiAws, DiDocker, DiJenkins 
} from 'react-icons/di';
import { 
  SiSpring, SiDjango, SiFlask 
} from 'react-icons/si';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  java: DiJava,
  python: DiPython,
  javascript: DiJavascript,
  spring: SiSpring,
  django: SiDjango,
  flask: SiFlask,
  mysql: DiMysql,
  postgresql: DiPostgresql,
  mongodb: DiMongodb,
  aws: DiAws,
  docker: DiDocker,
  jenkins: DiJenkins,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-heading">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.items.map((item) => {
                    const Icon = iconMap[item.icon.toLowerCase()];
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center justify-center p-2 group"
                      >
                        {Icon && (
                          <Icon 
                            className="w-8 h-8 text-indigo-600 dark:text-dark-primary 
                            group-hover:text-indigo-700 dark:group-hover:text-opacity-90 
                            transition-colors duration-200" 
                          />
                        )}
                        <span className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 