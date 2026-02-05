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
      "Hosted first-ever CHS workshop series",
      "Partnered with local tech organisations",
      "Pioneered the student-led tech education model",
      "Connected students with industry mentors",
      "Established comprehensive mentorship programme",
      "Launched community outreach initiatives",
    ],
    founded: "2025",
    tallyContactFormId: "example-form-id",
    // New fields
    isFlagship: true,
    chapterIndex: 1,
    tagline: "The founding chapter",
    heroImageUrl: undefined,
    mission:
      "CHS Robinson set the standard for what a Computing Honour Society chapter can achieve. We pioneered the model of student-led tech education that now spans schools worldwide.",
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
    location: "Tampa, FL",
    description:
      "One of the earliest CHS chapters, based at Academy at The Lakes. Dedicated to making technology accessible and empowering students through hands-on projects and events.",
    stats: {
      members: 10,
      events: 2,
      workshops: 4,
    },
    strategists: [
      {
        _id: "strategist-5",
        name: "Benson Lončar",
        role: "principal",
        roleLabel: "Principal Strategist",
      },
      {
        _id: "strategist-6",
        name: "Casey Martinez",
        role: "academic",
        roleLabel: "Academic Strategist",
      },
      {
        _id: "strategist-7",
        name: "Drew Thompson",
        role: "community",
        roleLabel: "Community Strategist",
      },
    ],
    achievements: [
      "Launched community outreach programme",
      "Organised school-wide coding event",
      "Established inclusive learning workshops",
      "Built partnerships with local educators",
      "Created accessible tech curriculum",
    ],
    founded: "2026",
    tallyContactFormId: "example-form-id-lakes",
    // New fields
    isFlagship: false,
    chapterIndex: 2,
    tagline: "Making technology accessible",
    heroImageUrl: undefined,
    mission:
      "CHS Lakes brings the Computing Honour Society mission to Academy at The Lakes.",
    overview:
      "CHS Lakes brings the Computing Honour Society mission to Academy at The Lakes, with a focus on accessibility and hands-on learning. We believe everyone deserves the opportunity to explore technology.",
    features: [
      {
        _key: "accessible",
        title: "Accessible Learning",
        description:
          "Breaking down barriers to tech education through inclusive workshops and patient mentorship.",
      },
      {
        _key: "handson",
        title: "Hands-On Projects",
        description:
          "Learning by building — from simple scripts to full applications.",
      },
      {
        _key: "integration",
        title: "School Integration",
        description:
          "Partnering with teachers and administration to enhance the curriculum.",
      },
    ],
  },
];
