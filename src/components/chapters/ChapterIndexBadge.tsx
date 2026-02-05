interface ChapterIndexBadgeProps {
  index: number;
}

export default function ChapterIndexBadge({ index }: ChapterIndexBadgeProps) {
  return (
    <div className="inline-block rounded border border-blue-600 px-3 py-1">
      <span className="font-mono text-xs font-medium uppercase tracking-wider text-blue-600">
        CHS-{index}
      </span>
    </div>
  );
}
