import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FlagshipChapterPage from "@/components/chapters/FlagshipChapterPage";
import ProductChapterPage from "@/components/chapters/ProductChapterPage";
import {
  getChapterBySocietyId,
  getAllChapterSlugs,
} from "@/lib/sanity/fetchers";

export async function generateStaticParams() {
  const slugs = await getAllChapterSlugs();
  return slugs.map((societyId) => ({ societyId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ societyId: string }>;
}): Promise<Metadata> {
  const { societyId } = await params;
  const chapter = await getChapterBySocietyId(societyId);
  if (!chapter) return { title: "Chapter Not Found" };

  return {
    title: chapter.displayName,
    description: chapter.description,
  };
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<{ societyId: string }>;
}) {
  const { societyId } = await params;
  const chapter = await getChapterBySocietyId(societyId);

  if (!chapter) {
    notFound();
  }

  // Conditional layout rendering based on isFlagship field
  if (chapter.isFlagship) {
    return <FlagshipChapterPage chapter={chapter} />;
  }

  return <ProductChapterPage chapter={chapter} />;
}
