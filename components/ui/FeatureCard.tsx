import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  copy: string;
  href: string;
  cta?: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  copy,
  href,
  cta = "Read more",
}: Props) {
  return (
    <Link
      href={href}
      className="spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-gray bg-brand-darker p-7 transition duration-300 hover:border-brand-orange/60 hover:-translate-y-1"
    >
      <div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-orange/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-brand-black shadow-glow-sm">
        <Icon className="h-6 w-6" strokeWidth={2.25} />
      </div>

      <h3 className="mt-6 font-display text-lg uppercase tracking-tightish text-white">
        {title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">
        {copy}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-brand-orange px-5 py-2 pr-1.5 font-condensed text-xs font-semibold uppercase tracking-[0.12em] text-brand-black transition group-hover:bg-white">
        {cta}
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-black text-brand-orange transition group-hover:bg-brand-orange group-hover:text-brand-black">
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </span>
    </Link>
  );
}
