import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface ContactLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
}

const Contact: React.FC = () => {
  const contactLinks: ContactLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/hyoonpark',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hyoonpark/',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:the.day0619@gmail.com',
      icon: FaEnvelope,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-bg">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-heading">
            Contact Me
          </h2>
          <div className="flex justify-center space-x-8">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center text-gray-600 dark:text-gray-300 
                hover:text-indigo-600 dark:hover:text-dark-primary transition-colors duration-200"
              >
                <link.icon className="w-8 h-8 mb-2" />
                <span className="text-sm">{link.name}</span>
              </motion.a>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-600 dark:text-gray-300"
          >
            <p className="mb-4">
              새로운 기회를 찾고 있습니다.
              <br />
              함께 일하고 싶으시다면 연락 주세요!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 