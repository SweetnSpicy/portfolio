import type { Project } from '@/data/types';

import './Projects.scss'

interface ProjectCardProps {
  project: Project;
  onOpen: (rect: DOMRect) => void;
}

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => (
  <button
    type="button"
    className="post-it"
    onClick={(e) => onOpen(e.currentTarget.getBoundingClientRect())}
  >
    <img src={project.image} alt={project.imageAlt ?? project.title} className="post-it-photo" />
    <h3>{project.title}</h3>
    <ul className="project-stack">
      {project.stack.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
    <p>{project.description}</p>
  </button>
);

export default ProjectCard;
