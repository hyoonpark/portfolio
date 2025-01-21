import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-bg">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text">
                  {exp.company}
                </h3>
                <p className="text-indigo-600 dark:text-dark-primary font-medium">
                  {exp.position}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {exp.period}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((desc, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 