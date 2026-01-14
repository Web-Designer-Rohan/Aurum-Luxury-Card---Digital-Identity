
export type PageType = 'HOME' | 'PHILOSOPHY' | 'CONNECT';

export interface NavLink {
  label: string;
  page: PageType;
}

export interface TimelineStep {
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'ongoing';
}

export interface ContactLink {
  id: string;
  label: string;
  icon: string;
  url: string;
}
