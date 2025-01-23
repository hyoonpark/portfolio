import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';

const Awards: React.FC = () => {
  const awards = [
    {
      title: "신세계아이앤씨 대표이사상",
      date: "2024.07",
      organization: "신세계아이앤씨",
      description: "신세계아이앤씨 스파로스 아카데미 우수 수료"
    },
    {
      title: "신세계아이앤씨 스파로스 아카데미 클론코딩 프로젝트 최우수상",
      date: "2024.04",
      organization: "신세계아이앤씨",
      description: "쓱닷컴 클론코딩 프로젝트 최우수상"
    },
    {
      title: "삼성 청년 SW 아카데미 공통 프로젝트 우수상",
      date: "2023.08",
      organization: "삼성전자",
      description: "체험형 마약 예방 플랫폼 개발"
    }
  ];

  return (
    <section id="awards" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          Awards
        </motion.h2>
        
        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={staggerChildren.item}
                className={sectionStyles.card}
              >
                <div className="flex items-start">
                  <span className="text-2xl text-indigo-600 dark:text-indigo-400 mr-4">
                    <FaTrophy />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {award.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      {award.organization} | {award.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {award.description}
                    </p>
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

export default Awards; 