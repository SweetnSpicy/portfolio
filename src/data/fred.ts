import type { UserData } from './types';
import Eventide from '@assets/images/Eventide.png';

const fred: UserData = {
  id: 'fred',
  name: 'Frederson',
  title: 'CS Kid',
  intro:
    'Software Engineering co-op student at McGill University who likes building things for the web. Currently hunting for that first internship.',
  links: {
    github: 'https://github.com/Frederic-Yao',
    linkedin: 'https://www.linkedin.com/in/frederic-yao-814b45383/',
    email: 'mailto:fredericyao@outlook.com',
  },
  education: [
    {
      org: 'McGill University',
      role: 'B.Eng. in Software Engineering (Co-op)',
      dates: 'Expected May 2029',
      location: 'Montreal, QC',
    },
    {
      org: 'Cegep Heritage College',
      role: "DEC in Science — Diplôme d'Études Collégiales",
      dates: 'Aug. 2023 – May 2025',
      location: 'Gatineau, QC',
    },
  ],
  experience: [
    {
      org: 'Your company here',
      role: 'First co-op position',
      dates: '20XX',
      details: 'Placeholder: what you built and shipped there.',
    },
  ],
  projects: [
    {
      title: 'Portfolio site',
      stack: ['React', 'TypeScript', 'Vite', 'Sass'],
      description:
        'This very website: a two-person portfolio with per-user pages, scroll-anchored sections, and way too many placeholder jokes.',
      details: [
        'Placeholder: the longer story of the project — what it does, why it exists, what was tricky to build.',
        'Placeholder: a second paragraph about the design choices, like the construction-paper aesthetic and the crayon fonts.',
      ],
      image: Eventide,
      link: 'https://github.com/Frederic-Yao',
    },
    {
      title: 'Project title',
      stack: ['skills', 'used'],
      description: 'Description of said project (no link on this one to show the optional prop).',
      details: [
        'Placeholder: in-depth description shown when the post-it is peeled open.',
      ],
      image: Eventide,
    },
  ],
};

export default fred;
