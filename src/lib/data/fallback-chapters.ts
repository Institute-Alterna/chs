import type { Chapter } from "@/lib/types";

export const fallbackChapters: Chapter[] = [
  {
    _id: "chapter-robinson",
    societyId: "robinson",
    name: "CHS Robinson",
    displayName: "Robinson",
    location: "Tampa, FL",
    description:
      "The founding chapter of the Computing Honour Society, established at Robinson High School. Focused on delivering workshops, mentorship, and community-driven tech education.",
    stats: {
      members: 15,
      events: 3,
      workshops: 3,
    },
    strategists: [],
    achievements: [
      "Hosted first-ever CHS workshop series",
      "Partnered with local tech organisations",
    ],
    founded: "2024",
  },
  {
    _id: "chapter-lakes",
    societyId: "lakes",
    name: "CHS Lakes",
    displayName: "Lakes",
    location: "Tampa, FL",
    description:
      "One of the earliest CHS chapters, based at Gaither High School. Dedicated to making technology accessible and empowering students through hands-on projects and events.",
    stats: {
      members: 10,
      events: 2,
    },
    strategists: [],
    achievements: [
      "Launched community outreach programme",
      "Organised school-wide coding event",
    ],
    founded: "2024",
  },
];
