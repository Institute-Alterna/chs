import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "hero";

const styles: Record<HeadingLevel, string> = {
  hero: "text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] lg:text-[72px] lg:leading-[76px] font-bold tracking-[-0.03em]",
  h1: "text-[36px] leading-[40px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] font-bold tracking-[-0.025em]",
  h2: "text-[28px] leading-[32px] md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[44px] font-semibold tracking-[-0.02em]",
  h3: "text-[22px] leading-[28px] md:text-[24px] md:leading-[28px] lg:text-[28px] lg:leading-[32px] font-semibold tracking-[-0.015em]",
  h4: "text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-semibold tracking-[-0.01em]",
};

export default function Heading({
  as: Tag = "h2",
  variant,
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}) {
  const styleKey = variant || Tag;
  return (
    <Tag className={cn("font-heading", styles[styleKey], className)}>
      {children}
    </Tag>
  );
}
