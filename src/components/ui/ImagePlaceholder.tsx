import { cn } from "@/lib/utils";

export default function ImagePlaceholder({
  aspectRatio = "16/9",
  label = "Image",
  className,
}: {
  aspectRatio?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-grey-200 text-sm text-grey-400",
        className,
      )}
      style={{ aspectRatio }}
    >
      {label}
    </div>
  );
}
