import { cn } from "@/lib/utils";

export default function Section({
  children,
  variant = "light",
  id,
  className,
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "off-white";
  id?: string;
  className?: string;
}) {
  const variantStyles = {
    light: "bg-white text-black",
    dark: "bg-black text-white",
    "off-white": "bg-off-white text-black",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
