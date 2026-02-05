import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "dark" | "blue";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-grey-100 text-grey-600",
  dark: "bg-grey-800 text-grey-300",
  blue: "bg-blue-100 text-blue-600",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
