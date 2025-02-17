import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "음주 기록 애플리케이션",
      period: "2023.10 ~ 운영 예정",
      icon: <FaCloud />,
      description: [
        "Java, Spring Boot",
        "홈서버를 활용한 인프라 구축",
        "CI/CD 파이프라인 구축 및 운영 경험",
        "Spring Security와 JWT를 이용한 인증/인가 구현",
        "JPA/Querydsl을 활용한 데이터 접근 계층 구현"
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
          Experience
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
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, idx) => (
                      <li 
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 
                        text-indigo-600 dark:text-indigo-300 rounded-full"
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