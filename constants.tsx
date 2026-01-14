
import { NavLink, TimelineStep, ContactLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Experience', page: 'HOME' },
  { label: 'Philosophy', page: 'PHILOSOPHY' },
  { label: 'Connect', page: 'CONNECT' },
];

export const TIMELINE: TimelineStep[] = [
  { year: '2022', title: 'Conception', description: 'Defining the architectural foundations of minimalist luxury.', status: 'completed' },
  { year: '2023', title: 'Refinement', description: 'Polishing the interface to match the precision of high horology.', status: 'completed' },
  { year: '2024', title: 'Manifesto', description: 'The launch of the Aurum Card: an identity beyond wealth.', status: 'ongoing' },
];

export const CONTACT_LINKS: ContactLink[] = [
  { id: '01', label: 'Portfolio', icon: 'arrow_outward', url: '#' },
  { id: '02', label: 'Contact', icon: 'mail', url: '#' },
  { id: '03', label: 'LinkedIn', icon: 'open_in_new', url: '#' },
];
