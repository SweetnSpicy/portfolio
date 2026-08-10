export interface TimelineEntry {
  org: string;
  role: string;
  dates: string;
  location?: string;
  details?: string;
}

export interface Project {
  title: string;
  stack: string[];
  description: string;
  /** Longer paragraphs for the detail view; the post-it face shows `description`. */
  details?: string[];
  image: string;
  imageAlt?: string;
  link?: string;
}

export interface UserData {
  id: 'fred' | 'caully';
  name: string;
  title: string;
  intro: string;
  links: {
    github: string;
    linkedin?: string;
    email?: string;
  };
  education: TimelineEntry[];
  experience: TimelineEntry[];
  projects: Project[];
  showArt?: boolean;
}
