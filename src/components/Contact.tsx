import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';

interface ContactLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className: string }>;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactLinks: ContactLink[] = [
    {
      name: 'GitHub',
      url: t('contact.links.github'),
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: t('contact.links.linkedin'),
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: `mailto:${t('contact.links.email')}`,
      icon: FaEnvelope,
    }
  ];

  return (
    <section id="contact" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          <div className="flex justify-center space-x-8">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerChildren.item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center text-gray-600 dark:text-gray-300 
                hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <link.icon className="w-8 h-8 mb-2" />
                <span className="text-sm">{link.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={staggerChildren.item}
            className="mt-12 text-center text-gray-600 dark:text-gray-300"
          >
            <p className="mb-4">
              {t('contact.message.line1')}
              <br />
              {t('contact.message.line2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 