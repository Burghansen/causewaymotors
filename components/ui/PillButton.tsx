import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-brand-black shadow-glow ring-1 ring-brand-orange/60 hover:bg-[var(--brand-orange-soft)]",
  ghost:
    "bg-transparent text-white ring-1 ring-white/20 hover:ring-brand-orange/60 hover:text-brand-orange",
};

const sizes: Record<Size, string> = {
  md: "pl-6 pr-1.5 py-1.5 text-sm",
  sm: "pl-4 pr-1 py-1 text-xs",
};

const badgeSizes: Record<Size, string> = {
  md: "h-10 w-10",
  sm: "h-7 w-7",
};

export default function PillButton({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
  ...rest
}: Props) {
  const inner = (
    <>
      <span className="font-condensed font-semibold uppercase tracking-[0.1em]">
        {children}
      </span>
      <span
        className={`ml-3 inline-flex ${badgeSizes[size]} items-center justify-center rounded-full bg-brand-black text-brand-orange transition group-hover:bg-white group-hover:text-brand-black`}
        aria-hidden="true"
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </>
  );

  const classes = `group inline-flex items-center justify-between gap-1 rounded-full font-semibold transition duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}
