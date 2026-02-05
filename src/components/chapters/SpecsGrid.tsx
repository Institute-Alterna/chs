import type { ChapterStats } from "@/lib/types";

interface SpecsGridProps {
  stats: ChapterStats;
  founded: string;
  location: string;
}

export default function SpecsGrid({ stats, founded, location }: SpecsGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-grey-400">
          Members
        </div>
        <div className="mt-2 font-heading text-4xl font-bold text-blue-600">
          {stats.members}+
        </div>
      </div>
      <div>
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-grey-400">
          Events
        </div>
        <div className="mt-2 font-heading text-4xl font-bold text-blue-600">
          {stats.events}
        </div>
      </div>
      {stats.workshops !== undefined && (
        <div>
          <div className="font-mono text-xs font-medium uppercase tracking-wider text-grey-400">
            Workshops
          </div>
          <div className="mt-2 font-heading text-4xl font-bold text-blue-600">
            {stats.workshops}
          </div>
        </div>
      )}
      <div>
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-grey-400">
          Founded
        </div>
        <div className="mt-2 font-heading text-4xl font-bold text-white">
          {founded}
        </div>
      </div>
      <div>
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-grey-400">
          Location
        </div>
        <div className="mt-2 font-heading text-2xl font-bold text-white">
          {location}
        </div>
      </div>
    </div>
  );
}
