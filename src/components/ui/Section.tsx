import { cn } from "@/lib/utils";

export default function Section({
  children,
  variant = "light",
  id,
  className,
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-20",
        variant === "dark" ? "bg-black text-white" : "bg-white text-black",
        className,
      )}
    >
      {children}
    </section>
  );
}
