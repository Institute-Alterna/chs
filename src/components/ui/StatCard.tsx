import { cn } from "@/lib/utils";

export default function StatCard({
  value,
  label,
  className,
}: {
  value: string | number;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-heading text-4xl font-bold tracking-tight text-blue-600 md:text-5xl">
        {value}
      </div>
      <div className="font-mono-label mt-2 text-grey-400">{label}</div>
    </div>
  );
}
