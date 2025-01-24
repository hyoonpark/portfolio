import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';
import drinkImage from '../assets/thumbnail.jpg';
import ssgImage from '../assets/ssg.png';
import goodsduckImage from '../assets/goodsduck.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "마이크로서비스 기반 굿즈 경매 플랫폼",
      period: "2024.04 - 2024.07",
      team: "백엔드 3명, 프론트엔드 2명",
      description: "MSA 아키텍처를 활용한 대규모 트래픽 처리가 가능한 경매 시스템 구축",
      imageUrl: goodsduckImage,
      details: [
        "주문/결제 마이크로서비스 개발",
        "Kafka를 활용한 이벤트 기반 아키텍처 구현",
        "Docker, Docker Compose를 활용한 컨테이너 기반 배포 환경 구축"
      ],
      technologies: ["Spring Boot", "Spring Cloud", "Kafka", "Docker", "Kubernetes", "MySQL", "Redis"],
      githubUrl: "https://github.com/4-Nuga",
      demoUrl: null
    },
    {
      id: 2,
      title: "쓱닷컴 클론코딩",
      period: "2024.02 - 2024.04",
      team: "백엔드 3명, 프론트엔드 2명",
      description: "쓱닷컴의 핵심 기능을 클론코딩하여 설계부터 개발까지 진행",
      imageUrl: ssgImage,
      details: [
        "백엔드 서버 구현"
      ],
      technologies: ["Java", "Spring Boot", "PostGIS", "GitHub Actions", "Docker", "AWS"],
      githubUrl: "https://github.com/3-isekaiSSG",
      demoUrl: null
    },
    {
      id: 3,
      title: "건강한 음주생활을 위한 음주 기록 트래커",
      period: "2023.10 - 2023.11",
      team: "백엔드 3명, 프론트엔드 3명",
      description: "음주량과 건강 상태를 기록하고 분석하는 서비스",
      imageUrl: drinkImage,
      details: [
        "Spring Boot 기반 백엔드 서버 개발",
        "사용자 음주 패턴 분석 및 리포트 생성",
        "건강 정보 API 연동 및 데이터 시각화"
      ],
      technologies: ["Spring Boot", "MySQL", "AWS", "Docker", "Jenkins"],
      githubUrl: "https://github.com/official-dev-ohyes/weeklivernote_v2",
      demoUrl: null
    }
  ];

  return (
    <section id="projects" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          Projects
        </motion.h2>

        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerChildren.item}
              className="mb-12 last:mb-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
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
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={sectionStyles.tag}
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
                    className={`flex items-center ${sectionStyles.link}`}
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${sectionStyles.link}`}
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 