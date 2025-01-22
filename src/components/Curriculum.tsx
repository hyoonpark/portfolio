import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

const Curriculum: React.FC = () => {
  const courses = [
    {
      title: "신세계I&C 스파로스 아카데미 4기",
      period: "2024.02 ~ 2024.07",
      icon: <FaLaptopCode />,
      details: [
        "MSA 기반 애플리케이션 개발 과정",
        "Spring Cloud, AWS 기반 마이크로서비스 아키텍처 학습",
        "실무 프로젝트 경험"
      ]
    },
    {
      title: "삼성 청년 SW 아카데미 9기",
      period: "2023.01 ~ 2023.12",
      icon: <FaCode />,
      details: [
        "알고리즘, 자료구조 심화 학습",
        "Spring Boot 기반 웹 서비스 개발",
        "팀 프로젝트 수행 및 협업 경험"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Curriculum
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start">
                <span className="text-2xl text-indigo-600 dark:text-indigo-400 mr-4 mt-1">
                  {course.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    {course.period}
                  </p>
                  <ul className="space-y-2">
                    {course.details.map((detail, idx) => (
                      <li 
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum; 