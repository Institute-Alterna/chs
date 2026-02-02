import { cn } from "@/lib/utils";

const sizeStyles = {
  lg: "text-lg leading-7",
  base: "text-base leading-6",
  sm: "text-sm leading-5 tracking-[0.01em]",
};

export default function Text({
  size = "base",
  children,
  className,
  as: Tag = "p",
}: {
  size?: "lg" | "base" | "sm";
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
}) {
  return (
    <Tag className={cn("font-body", sizeStyles[size], className)}>
      {children}
    </Tag>
  );
}
