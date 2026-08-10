import { useState } from 'react';
import { Github, Linkedin, Mail, GraduationCap, Briefcase, FolderGit2, Palette } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import ProjectCard from '@/pages/Projects/ProjectCard';
import ProjectDetail from '@/pages/Projects/ProjectDetail';
import Art from '@/pages/Art/Art';
import type { Project, UserData } from '@/data/types';

import './UserHome.scss';

const UserHome = ({ data }: { data: UserData }) => {
  const [active, setActive] = useState<{ project: Project; origin: DOMRect } | null>(null);

  return (
    <div className="user-home">
      <section id="snapshot" className="hero">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p className="intro">{data.intro}</p>
        <div className="hero-links">
          <a href={data.links.github} target="_blank" rel="noreferrer">
            <Github size={20} /> GitHub
          </a>
          {data.links.linkedin && (
            <a href={data.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} /> LinkedIn
            </a>
          )}
          {data.links.email && (
            <a href={data.links.email}>
              <Mail size={20} /> Email
            </a>
          )}
        </div>
      </section>

      <Navbar />

      <div className="sections">
        <section id="education" className="band">
          <div className="band-inner">
            <h2 className="section-heading">
              <GraduationCap /> Education
            </h2>
            <Timeline entries={data.education} />
          </div>
        </section>

        <section id="experience" className="band">
          <div className="band-inner">
            <h2 className="section-heading">
              <Briefcase /> Experience
            </h2>
            <Timeline entries={data.experience} />
          </div>
        </section>

        <section id="projects" className="band">
          <div className="band-inner">
            <h2 className="section-heading">
              <FolderGit2 /> Projects
            </h2>
            <div className="projects-grid">
              {data.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onOpen={(origin) => setActive({ project, origin })}
                />
              ))}
            </div>
          </div>
        </section>

        {data.showArt && (
          <section id="art" className="band">
            <div className="band-inner">
              <h2 className="section-heading">
                <Palette /> Art Studio
              </h2>
              <Art />
            </div>
          </section>
        )}
      </div>

      {active && (
        <ProjectDetail project={active.project} origin={active.origin} onClose={() => setActive(null)} />
      )}
    </div>
  );
};

export default UserHome;
