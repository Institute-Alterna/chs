import type { Chapter } from "@/lib/types";

export const fallbackChapters: Chapter[] = [
  {
    _id: "chapter-robinson",
    societyId: "robinson",
    name: "CHS Robinson",
    displayName: "Robinson",
    location: "Tampa, Florida",
    description:
      "The founding chapter of the Computing Honour Society, established at Robinson High School. Focused on delivering workshops, mentorship, and community-driven tech education.",
    stats: {
      members: 25,
      events: 3,
      workshops: 5,
    },
    strategists: [
      {
        _id: "strategist-1",
        name: "Sebastián Camargo Marín",
        role: "principal",
        roleLabel: "Principal Strategist",
      },
      {
        _id: "strategist-2",
        name: "Jonathan Okoro",
        role: "academic",
        roleLabel: "Academic Strategist",
      },
      {
        _id: "strategist-3",
        name: "Zakary Beverly",
        role: "community",
        roleLabel: "Community Strategist",
      },
      {
        _id: "strategist-4",
        name: "Aleksander Meyer",
        role: "competition",
        roleLabel: "Competition Strategist",
      },
    ],
    achievements: [
      "Hosted first-ever CHS computer science education week workshop series",
      "Pioneered the student-led tech education model",
      "Established comprehensive mentorship programme",
      "Top-ranking in statewide cybersecurity competition",
    ],
    founded: "2025",
    // New fields
    isFlagship: true,
    chapterIndex: 1,
    tagline: "The founding chapter",
    heroImageUrl: "/chapters/robinson/hero.webp",
    mission:
      "CHS Robinson set the standard for what a Computing Honour Society chapter can achieve.",
    overview: undefined,
    features: [
      {
        _key: "workshops",
        title: "Workshop Series",
        description:
          "Comprehensive technical workshops covering programming fundamentals, web development, and emerging technologies.",
      },
      {
        _key: "mentorship",
        title: "Mentorship Programme",
        description:
          "Connecting experienced student technologists with those beginning their journey in computing.",
      },
      {
        _key: "community",
        title: "Community Outreach",
        description:
          "Bringing tech education beyond school walls through partnerships and public events.",
      },
      {
        _key: "competitive",
        title: "Competitive Edge",
        description:
          "Supporting students in hackathons, coding competitions, and tech challenges.",
      },
    ],
  },
  {
    _id: "chapter-lakes",
    societyId: "lakes",
    name: "CHS Lakes",
    displayName: "Lakes",
    location: "Tampa, United States",
    description:
      "This upcoming CHS chapter will be based at Academy at The Lakes.",
    stats: {
      members: 1,
      events: 0,
      workshops: 0,
    },
    strategists: [
      {
        _id: "strategist-5",
        name: "Benson Lončar",
        role: "principal",
        roleLabel: "Upcoming Principal Strategist",
      },
    ],
    achievements: [
      "We are excited to share the achievements of CHS Lakes soon as we continue to grow.",
    ],
    founded: "2026",
    // New fields
    isFlagship: false,
    chapterIndex: 2,
    tagline: "Upcoming chapter",
    heroImageUrl: undefined,
    mission:
      "CHS Lakes brings the Computing Honour Society mission to Academy at The Lakes.",
    overview:
      "CHS Lakes brings the Computing Honour Society mission to Academy at The Lakes, with a focus on accessibility and hands-on learning.",
    features: [
      {
        _key: "accessible",
        title: "Coming Soon",
        description:
          "We are excited to share more about CHS Lakes as we continue to grow.",
      },
    ],
  },
];
