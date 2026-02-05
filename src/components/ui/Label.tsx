import { cn } from "@/lib/utils";

export default function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("font-mono-label text-grey-500", className)}>
      {children}
    </span>
  );
}
