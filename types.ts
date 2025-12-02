export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  color: 'cyan' | 'purple' | 'blue';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  parts?: any[];  // Optional parts array for complex messages (e.g., with PDF attachments)
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Database' | 'Languages & Tools';
  items: SkillItem[];
}
