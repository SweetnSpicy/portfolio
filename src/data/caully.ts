import type { UserData } from './types';
import Latto from '@assets/images/Latto.png';

const caully: UserData = {
  id: 'caully',
  name: "Sweetn'Spicy",
  title: 'Software Developer',
  intro:
    'Fullstack developer with 5+ years of experience shipping web applications, and a part-time digital artist.',
  links: {
    github: 'https://github.com/sweetnspicy',
  },
  education: [
    {
      org: 'Your school here',
      role: 'Placeholder: degree or program',
      dates: '20XX – 20XX',
    },
  ],
  experience: [
    {
      org: 'Company A',
      role: 'Senior Developer',
      dates: '2022 – Present',
      location: 'DC',
      details: 'Led a team of 5 developers...',
    },
    {
      org: 'Company B',
      role: 'Full Stack Developer',
      dates: '2020 – 2022',
      location: 'DC',
      details: 'Built responsive web applications...',
    },
  ],
  projects: [
    {
      title: 'Project title',
      stack: ['skills', 'used'],
      description: 'Description of said project.',
      details: [
        'Placeholder: in-depth description shown when the post-it is peeled open.',
      ],
      image: Latto,
      link: 'https://github.com/sweetnspicy',
    },
  ],
  showArt: true,
};

export default caully;
