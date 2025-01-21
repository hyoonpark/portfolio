import { Experience, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "신세계I&C 스파로스 아카데미",
    position: "교육생",
    period: "2024.02 ~ 2024.07",
    description: [
      "백엔드 개발자 양성 과정 수료",
      "Spring Boot, JPA, MSA 등 학습",
    ]
  },
  {
    id: 2,
    company: "삼성 청년 SW 아카데미",
    position: "교육생",
    period: "2023.01 ~ 2023.12",
    description: [
      "풀스택 개발자 양성 과정 수료",
      "알고리즘, 자료구조, 웹 개발 등 학습",
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Language",
    items: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" }
    ]
  },
  {
    category: "Infrastructure",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Jenkins", icon: "jenkins" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description: "React와 TypeScript를 사용한 개인 포트폴리오 웹사이트",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/hyoonpark/portfolio"
  }
  // 추가 프로젝트는 여기에 작성
];