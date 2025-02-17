import React from 'react';
import { motion } from 'framer-motion';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';
import { 
  FaJava, FaPython, FaJs, FaAws, FaUbuntu, FaDocker, FaGit,
  FaJira
} from 'react-icons/fa';
import { 
  SiSpringboot, SiSpring, SiDjango, SiFlask, SiMysql, 
  SiMariadb, SiPostgresql, SiMongodb, SiNginx, SiJenkins, SiGerrit,
  SiGooglecolab, SiGithubactions
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Language",
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
          details: [
            "객체지향 프로그래밍 이해 및 활용",
            "Stream API, Lambda 등 Java 8 이상 기능 활용",
            "Multi-threading 및 동시성 프로그래밍",
            "JVM 구조 이해 및 메모리 관리"
          ]
        },
        {
          name: "Python",
          icon: <FaPython />,
          details: [
            "기본 문법 및 객체지향 프로그래밍",
            "데이터 분석 및 처리",
            "웹 크롤링 및 자동화 스크립트 작성"
          ]
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
          details: [
            "ES6+ 문법 활용",
            "비동기 프로그래밍(Promise, async/await)",
            "DOM 조작 및 이벤트 핸들링"
          ]
        }
      ]
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
          details: [
            "RESTful API 설계 및 구현",
            "Spring Security를 활용한 인증/인가",
            "JPA/Hibernate를 이용한 데이터 접근 계층 구현"
          ]
        },
        {
          name: "Spring Cloud",
          icon: <SiSpring />,
          details: [
            "MSA 아키텍처 설계 및 구현",
            "Service Discovery, Config Server 활용",
            "API Gateway 적용"
          ]
        },
        {
          name: "Django",
          icon: <SiDjango />,
          details: [
            "MVT 패턴 기반 웹 애플리케이션 개발",
            "ORM을 활용한 데이터베이스 조작",
            "Django REST framework 활용"
          ]
        },
        {
          name: "Flask",
          icon: <SiFlask />,
          details: [
            "경량 웹 애플리케이션 개발",
            "RESTful API 구현",
            "SQLAlchemy를 통한 데이터베이스 연동"
          ]
        },
        {
          name: "Google Colab",
          icon: <SiGooglecolab />,
          details: [
            "데이터 분석 및 머신러닝 모델 개발",
            "GPU 활용 학습 환경 구성"
          ]
        }
      ]
    },
    {
      category: "Database",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
          details: [
            "데이터베이스 설계 및 모델링",
            "성능 최적화 및 인덱스 설계",
            "트랜잭션 관리"
          ]
        },
        {
          name: "MariaDB",
          icon: <SiMariadb />,
          details: [
            "고가용성 데이터베이스 구성",
            "백업 및 복구 전략 수립"
          ]
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          details: [
            "관계형 데이터베이스 관리",
            "JSON 데이터 타입 활용"
          ]
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          details: [
            "NoSQL 데이터베이스 설계",
            "분산 데이터베이스 구성"
          ]
        }
      ]
    },
    {
      category: "Infra",
      skills: [
        {
          name: "AWS",
          icon: <FaAws />,
          details: [
            "EC2, RDS, S3 등 핵심 서비스 활용",
            "ECS를 통한 컨테이너 오케스트레이션",
            "CloudWatch를 통한 모니터링"
          ]
        },
        {
          name: "Ubuntu",
          icon: <FaUbuntu />,
          details: [
            "서버 환경 구성 및 관리",
            "쉘 스크립트 작성"
          ]
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          details: [
            "컨테이너 이미지 생성 및 관리",
            "Docker Compose를 통한 멀티 컨테이너 관리"
          ]
        },
        {
          name: "Nginx",
          icon: <SiNginx />,
          details: [
            "웹 서버 설정 및 관리",
            "로드 밸런싱 구성"
          ]
        },
        {
          name: "Jenkins",
          icon: <SiJenkins />,
          details: [
            "CI/CD 파이프라인 구축",
            "자동화 빌드 및 배포"
          ]
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions />,
          details: [
            "CI/CD 워크플로우 구성",
            "자동화된 테스트 및 배포 파이프라인 구축"
          ]
        }
      ]
    },
    {
      category: "Collaboration",
      skills: [
        {
          name: "Git",
          icon: <FaGit />,
          details: [
            "버전 관리 및 브랜치 전략",
            "코드 리뷰 및 협업"
          ]
        },
        {
          name: "Jira",
          icon: <FaJira />,
          details: [
            "애자일/스크럼 프로세스 관리",
            "이슈 트래킹"
          ]
        },
        {
          name: "Gerrit",
          icon: <SiGerrit />,
          details: [
            "코드 리뷰 시스템 활용",
            "변경사항 관리"
          ]
        }
      ]
    }
  ];

  return (
    <section id="skills" className={sectionStyles.wrapper}>
      <div className={sectionStyles.container}>
        <motion.h2 
          className={sectionStyles.title}
          {...scrollAnimation}
        >
          Teck Stack
        </motion.h2>
        
        <motion.div 
          className={sectionStyles.content}
          variants={staggerChildren.container}
          initial="initial"
          animate="animate"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={staggerChildren.item}
              className="mb-12 last:mb-0"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={staggerChildren.item}
                    className={sectionStyles.card}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl text-indigo-600 dark:text-indigo-400 mr-3">
                        {skill.icon}
                      </span>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.details.map((detail, i) => (
                        <li 
                          key={i}
                          className="text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 mt-2"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 