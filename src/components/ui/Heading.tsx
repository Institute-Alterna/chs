import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

const styles: Record<HeadingLevel, string> = {
  h1: "text-3xl md:text-4xl lg:text-[48px] lg:leading-[56px] font-bold tracking-[-0.02em]",
  h2: "text-2xl md:text-3xl lg:text-[36px] lg:leading-[44px] font-semibold tracking-[-0.01em]",
  h3: "text-xl md:text-2xl font-semibold",
  h4: "text-lg md:text-xl font-semibold",
};

export default function Heading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag className={cn("font-heading", styles[Tag], className)}>
      {children}
    </Tag>
  );
}
