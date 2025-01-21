export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: {
    name: string;
    icon: string;
    level?: string;
  }[];
} 