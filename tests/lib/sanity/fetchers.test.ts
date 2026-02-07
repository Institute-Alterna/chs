import { describe, it, expect, vi, beforeEach } from "vitest";
import { fallbackChapters } from "@/lib/data/fallback-chapters";

// Mock the client module so tests don't need Sanity credentials
vi.mock("@/lib/sanity/client", () => ({ client: null }));

// Import after mock is set up
const { getChapters, getChapterBySocietyId, getAllChapterSlugs, getImpactStats } =
  await import("@/lib/sanity/fetchers");

describe("fetchers (no Sanity configured)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getChapters returns fallback data", async () => {
    const chapters = await getChapters();
    expect(chapters).toEqual(fallbackChapters);
    expect(chapters.length).toBe(2);
  });

  it("getChapterBySocietyId returns matching fallback chapter", async () => {
    const chapter = await getChapterBySocietyId("robinson");
    expect(chapter).not.toBeNull();
    expect(chapter!.name).toBe("CHS Robinson");
  });

  it("getChapterBySocietyId returns null for unknown societyId", async () => {
    const chapter = await getChapterBySocietyId("nonexistent");
    expect(chapter).toBeNull();
  });

  it("getAllChapterSlugs returns fallback slugs", async () => {
    const slugs = await getAllChapterSlugs();
    expect(slugs).toEqual(["robinson", "lakes"]);
  });

  it("getImpactStats computes totals from fallback data", async () => {
    const stats = await getImpactStats();
    expect(stats.chapters).toBe(2);
    expect(stats.members).toBe(26); // 25 + 1
    expect(stats.events).toBe(3); // 3 + 0
    expect(stats.countries).toBe(1);
  });
});
