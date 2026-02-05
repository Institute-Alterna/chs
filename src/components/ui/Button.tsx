import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "filled" | "ghost";
  children: React.ReactNode;
  className?: string;
} & (
  | { href: string; onClick?: never }
  | { onClick?: () => void; href?: never }
);

const variantStyles = {
  primary:
    "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  secondary:
    "border border-grey-300 text-grey-600 hover:border-black hover:text-black",
  filled:
    "bg-blue-600 text-white hover:bg-blue-500 border border-transparent",
  ghost: "text-current hover:opacity-70",
};

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-5 py-2.5 text-sm font-medium transition-colors duration-150 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
    variantStyles[variant],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
