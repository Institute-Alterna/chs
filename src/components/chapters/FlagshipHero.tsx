import Image from "next/image";
import ChapterIndexBadge from "./ChapterIndexBadge";

interface FlagshipHeroProps {
  name: string;
  tagline: string;
  location: string;
  chapterIndex: number;
  heroImageUrl?: string;
  isRobinson?: boolean;
}

export default function FlagshipHero({
  name,
  tagline,
  location,
  chapterIndex,
  heroImageUrl,
  isRobinson = false,
}: FlagshipHeroProps) {
  return (
    <section className="relative bg-black py-20">
      <div className="container mx-auto px-6">
        <h1 className="mb-6 font-heading text-6xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
          {name}
        </h1>

        <div className="mb-8">
          <ChapterIndexBadge index={chapterIndex} />
        </div>

        <div className="mb-12">
          <p className="font-mono text-sm font-medium uppercase tracking-wider text-grey-400">
            {isRobinson ? "THE FOUNDING CHAPTER" : tagline}
          </p>
          <p className="mt-2 font-mono text-sm font-medium uppercase tracking-wider text-grey-400">
            {location}
          </p>
        </div>
      </div>

      {/* Hero Image - Full width */}
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
    </section>
  );
}
