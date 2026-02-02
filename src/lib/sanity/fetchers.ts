import { client } from "./client";
import {
  allChaptersQuery,
  chapterBySlugQuery,
  allChapterSlugsQuery,
} from "./queries";
import { fallbackChapters } from "@/lib/data/fallback-chapters";
import type { Chapter, ImpactStats } from "@/lib/types";

const isSanityConfigured =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  !!process.env.NEXT_PUBLIC_SANITY_DATASET;

export async function getChapters(): Promise<Chapter[]> {
  if (!isSanityConfigured) {
    return fallbackChapters;
  }

  try {
    const chapters = await client.fetch<Chapter[]>(allChaptersQuery);
    return chapters.length > 0 ? chapters : fallbackChapters;
  } catch {
    return fallbackChapters;
  }
}

export async function getChapterBySocietyId(
  societyId: string
): Promise<Chapter | null> {
  if (!isSanityConfigured) {
    return fallbackChapters.find((c) => c.societyId === societyId) ?? null;
  }

  try {
    const chapter = await client.fetch<Chapter | null>(chapterBySlugQuery, {
      societyId,
    });
    return (
      chapter ?? fallbackChapters.find((c) => c.societyId === societyId) ?? null
    );
  } catch {
    return fallbackChapters.find((c) => c.societyId === societyId) ?? null;
  }
}

export async function getAllChapterSlugs(): Promise<string[]> {
  if (!isSanityConfigured) {
    return fallbackChapters.map((c) => c.societyId);
  }

  try {
    const slugs = await client.fetch<{ societyId: string }[]>(
      allChapterSlugsQuery
    );
    return slugs.length > 0
      ? slugs.map((s) => s.societyId)
      : fallbackChapters.map((c) => c.societyId);
  } catch {
    return fallbackChapters.map((c) => c.societyId);
  }
}

export async function getImpactStats(): Promise<ImpactStats> {
  const chapters = await getChapters();

  let totalMembers = 0;
  let totalEvents = 0;

  for (const chapter of chapters) {
    totalMembers += chapter.stats?.members ?? 0;
    totalEvents += chapter.stats?.events ?? 0;
  }

  return {
    chapters: chapters.length,
    members: totalMembers,
    events: totalEvents,
    countries: 1,
  };
}
