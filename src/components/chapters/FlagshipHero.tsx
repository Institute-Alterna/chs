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
    <section className="relative bg-black pt-50 lg:pt-[60vh]">
      <div className="container mx-auto px-6">
        <h1 className="mb-4 font-heading text-6xl font-bold leading-none text-white md:text-7xl lg:text-8xl">
          {name}
        </h1>

        <div className="mb-4 px-2">
          <ChapterIndexBadge index={chapterIndex} isFlagship={true} />
        </div>

        <div className="mb-12 px-2">
          <p className="font-mono text-sm font-medium uppercase tracking-wider text-grey-400">
            {isRobinson ? "ENGINEERED FOR EXCELLENCE" : tagline} <br />
            {isRobinson ? "IN THE SUNNY COAST OF" : "" } <br />
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
