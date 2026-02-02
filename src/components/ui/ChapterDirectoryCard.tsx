import Link from "next/link";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import type { Chapter } from "@/lib/types";

export default function ChapterDirectoryCard({
  chapter,
}: {
  chapter: Chapter;
}) {
  return (
    <Link href={`/chapters/${chapter.societyId}`} className="group block">
      <Card className="h-full border border-grey-200 transition-colors duration-150 group-hover:border-blue-600">
        <div className="mb-3 flex items-center gap-2">
          <Heading as="h3">{chapter.name}</Heading>
        </div>
        <span className="inline-block rounded-full bg-grey-100 px-3 py-1 text-xs font-medium text-grey-600">
          {chapter.location}
        </span>
        <Text className="mt-4 text-grey-600" size="sm">
          {chapter.description}
        </Text>
        <div className="mt-4 flex gap-4 border-t border-grey-200 pt-4 text-sm text-grey-400">
          <span>{chapter.stats.members}+ members</span>
          <span>{chapter.stats.events} events</span>
          <span>Est. {chapter.founded}</span>
        </div>
      </Card>
    </Link>
  );
}
