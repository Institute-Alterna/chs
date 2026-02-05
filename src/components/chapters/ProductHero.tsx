import Image from "next/image";
import ChapterIndexBadge from "./ChapterIndexBadge";
import SpecsGrid from "./SpecsGrid";
import type { ChapterStats } from "@/lib/types";

interface ProductHeroProps {
  name: string;
  tagline: string;
  chapterIndex: number;
  stats: ChapterStats;
  founded: string;
  location: string;
  heroImageUrl?: string;
}

export default function ProductHero({
  name,
  tagline,
  chapterIndex,
  stats,
  founded,
  location,
  heroImageUrl,
}: ProductHeroProps) {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">

        {/* Mobile and tablet: stacked layout */}
        <div className="lg:grid lg:grid-cols-[1fr,auto] lg:gap-16">
          {/* Title and tagline */}
          <div>
            <h1 className="mb-4 font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {name}
            </h1>
                    <div className="mb-8">
          <ChapterIndexBadge index={chapterIndex} />
        </div>

            <p className="text-xl text-grey-300 md:text-2xl">{tagline}</p>
          </div>

          {/* Specs sidebar (desktop) / below (mobile) */}
          <div className="mt-12 lg:mt-0 lg:min-w-[400px]">
            <SpecsGrid stats={stats} founded={founded} location={location} />
          </div>
        </div>
      </div>

      {/* Hero Image - Full width */}
      <div className="mt-16">
        {heroImageUrl ? (
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src={heroImageUrl}
              alt={`${name} hero`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="flex items-center justify-center bg-grey-800"
            style={{ aspectRatio: "16/9" }}
          >
            <span className="text-sm text-grey-400">Hero Image</span>
          </div>
        )}
      </div>
    </section>
  );
}
