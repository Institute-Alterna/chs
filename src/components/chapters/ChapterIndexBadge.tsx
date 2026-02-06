interface ChapterIndexBadgeProps {
  index: number;
  isFlagship?: boolean;
}

export default function ChapterIndexBadge({
  index,
  isFlagship = false,
}: ChapterIndexBadgeProps) {
  return (
    <div
      className={`inline-block rounded border px-3 pt-0.7 pb-1 ${
        isFlagship ? "border-gray-200" : "border-blue-600"
      }`}
    >
      <span
        className={`font-mono text-xs font-medium uppercase tracking-wider ${
          isFlagship ? "text-gray-200" : "text-blue-500"
        }`}
      >
        CHS-{index}
      </span>
    </div>
  );
}
