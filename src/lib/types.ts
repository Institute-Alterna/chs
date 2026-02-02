export interface ChapterStats {
  members: number;
  events: number;
  workshops?: number;
}

export interface Strategist {
  _id: string;
  name: string;
  role: string;
  roleLabel: string;
  photoUrl?: string;
}

export interface Chapter {
  _id: string;
  societyId: string;
  name: string;
  displayName: string;
  location: string;
  description: string;
  stats: ChapterStats;
  strategists: Strategist[];
  achievements: string[];
  founded: string;
  tallyContactFormId?: string;
}

export interface ImpactStats {
  chapters: number;
  members: number;
  events: number;
  countries: number;
}
