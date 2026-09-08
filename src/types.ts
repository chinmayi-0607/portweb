export interface Project {
  id: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  contribution: string;
  technologies: string[];
  status: string;
  problem: string;
  solution: string;
  learning: string;
  metrics?: string;
  systemArchitecture?: string[];
  visualType: 'hardware' | 'chart' | 'wireframe';
}

export interface Milestone {
  step: string;
  category: string;
  title: string;
  institution: string;
  description: string;
  badge: string;
  isCurrent?: boolean;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  tag: string;
  categoryType: string;
  title: string;
  description: string;
  skills: { name: string; isPrimary?: boolean }[];
}

export interface Activity {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: string;
  abbr: string;
  title: string;
  issuer: string;
  verifiedDate: string;
  credentialId?: string;
}
