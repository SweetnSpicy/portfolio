import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { X, ExternalLink } from 'lucide-react';

import type { Project } from '@/data/types';

import './Projects.scss';

interface ProjectDetailProps {
  project: Project;
  /** Screen rect of the clicked post-it, so the sheet peels open from its spot. */
  origin: DOMRect;
  onClose: () => void;
}

const ProjectDetail = ({ project, origin, onClose }: ProjectDetailProps) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setClosing(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // guarantee unmount even if the closing animation never fires animationend
  // (e.g. OS-level "reduce motion" settings can suppress the animation)
  useEffect(() => {
    if (!closing) return;
    const timer = window.setTimeout(onClose, 400);
    return () => window.clearTimeout(timer);
  }, [closing, onClose]);

  // keep the page behind from scrolling while the sheet is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  const sheetStyle = {
    '--from-x': `${origin.left + origin.width / 2 - window.innerWidth / 2}px`,
    '--from-y': `${origin.top + origin.height / 2 - window.innerHeight / 2}px`,
  } as CSSProperties;

  const paragraphs = project.details ?? [project.description];

  return (
    <div
      className={`project-detail-backdrop${closing ? ' closing' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setClosing(true);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={`project-detail${closing ? ' closing' : ''}`}
        style={sheetStyle}
        onAnimationEnd={(e) => {
          if (closing && e.target === e.currentTarget) onClose();
        }}
      >
        <button type="button" className="project-detail-close" aria-label="Close" onClick={() => setClosing(true)}>
          <X size={26} />
        </button>
        <img src={project.image} alt={project.imageAlt ?? project.title} className="project-detail-image" />
        <h3>{project.title}</h3>
        <ul className="project-stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
            <ExternalLink size={18} /> View it live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
