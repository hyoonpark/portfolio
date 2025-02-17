import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { sectionStyles } from '../styles/common';
import { scrollAnimation, staggerChildren } from '../styles/animations';
import { 
  FaJava, FaPython, FaJs, FaAws, FaUbuntu, FaDocker, FaGit, FaJira
} from 'react-icons/fa';
import { 
  SiSpringboot, SiSpring, SiDjango, SiFlask, SiMysql, 
  SiMariadb, SiPostgresql, SiMongodb, SiNginx, SiJenkins, SiGerrit,
  SiGooglecolab, SiGithubactions
} from 'react-icons/si';

interface SkillDetail {
  name: string;
  icon: React.ReactNode;
  details: string[];
}

interface SkillCategory {
  category: string;
  skills: SkillDetail[];
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      category: t('skills.language.title'),
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
          details: [
            t('skills.language.java.1'),
            t('skills.language.java.2'),
            t('skills.language.java.3'),
            t('skills.language.java.4')
          ]
        },
        {
          name: "Python",
          icon: <FaPython />,
          details: [
            t('skills.language.python.1'),
            t('skills.language.python.2'),
            t('skills.language.python.3')
          ]
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
          details: [
            t('skills.language.javascript.1'),
            t('skills.language.javascript.2'),
            t('skills.language.javascript.3')
          ]
        }
      ]
    },
    {
      category: t('skills.backend.title'),
      skills: [
        {
          name: "Spring Boot",
          icon: <SiSpringboot />,
          details: [
            t('skills.backend.springboot.1'),
            t('skills.backend.springboot.2'),
            t('skills.backend.springboot.3')
          ]
        },
        {
          name: "Spring Cloud",
          icon: <SiSpring />,
          details: [
            t('skills.backend.springcloud.1'),
            t('skills.backend.springcloud.2'),
            t('skills.backend.springcloud.3')
          ]
        },
        {
          name: "Django",
          icon: <SiDjango />,
          details: [
            t('skills.backend.django.1'),
            t('skills.backend.django.2'),
            t('skills.backend.django.3')
          ]
        },
        {
          name: "Flask",
          icon: <SiFlask />,
          details: [
            t('skills.backend.flask.1'),
            t('skills.backend.flask.2'),
            t('skills.backend.flask.3')
          ]
        },
        {
          name: "Google Colab",
          icon: <SiGooglecolab />,
          details: [
            t('skills.backend.googlecolab.1'),
            t('skills.backend.googlecolab.2')
          ]
        }
      ]
    },
    {
      category: t('skills.database.title'),
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql />,
          details: [
            t('skills.database.mysql.1'),
            t('skills.database.mysql.2'),
            t('skills.database.mysql.3')
          ]
        },
        {
          name: "MariaDB",
          icon: <SiMariadb />,
          details: [
            t('skills.database.mariadb.1'),
            t('skills.database.mariadb.2')
          ]
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          details: [
            t('skills.database.postgresql.1'),
            t('skills.database.postgresql.2')
          ]
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          details: [
            t('skills.database.mongodb.1'),
            t('skills.database.mongodb.2')
          ]
        }
      ]
    },
    {
      category: t('skills.devops.title'),
      skills: [
        {
          name: "AWS",
          icon: <FaAws />,
          details: [
            t('skills.devops.aws.1'),
            t('skills.devops.aws.2')
          ]
        },
        {
          name: "Ubuntu",
          icon: <FaUbuntu />,
          details: [
            t('skills.devops.ubuntu.1'),
            t('skills.devops.ubuntu.2')
          ]
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          details: [
            t('skills.devops.docker.1'),
            t('skills.devops.docker.2')
          ]
        },
        {
          name: "Nginx",
          icon: <SiNginx />,
          details: [
            t('skills.devops.nginx.1'),
            t('skills.devops.nginx.2'),
            t('skills.devops.nginx.3')
          ]
        },
        {
          name: "Jenkins",
          icon: <SiJenkins />,
          details: [
            t('skills.devops.jenkins.1'),
            t('skills.devops.jenkins.2')
          ]
        },
        {
          name: "GitHub Actions",
          icon: <SiGithubactions />,
          details: [
            t('skills.devops.githubactions.1'),
            t('skills.devops.githubactions.2')
          ]
        }
      ]
    },
    {
      category: t('skills.collaboration.title'),
      skills: [
        {
          name: "Git",
          icon: <FaGit />,
          details: [
            t('skills.collaboration.git.1'),
            t('skills.collaboration.git.2')
          ]
        },
        {
          name: "Jira",
          icon: <FaJira />,
          details: [
            t('skills.collaboration.jira.1'),
            t('skills.collaboration.jira.2')
          ]
        },
        {
          name: "Gerrit",
          icon: <SiGerrit />,
          details: [
            t('skills.collaboration.gerrit.1'),
            t('skills.collaboration.gerrit.2')
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
          {t('skills.title')}
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