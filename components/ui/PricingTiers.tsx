import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

type Tier = {
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  featured?: boolean;
  href: string;
};

type Props = {
  tiers: Tier[];
};

export default function PricingTiers({ tiers }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {tiers.map((tier) => {
        const featured = tier.featured;
        return (
          <div
            key={tier.name}
            className={`relative flex flex-col overflow-hidden rounded-2xl p-8 transition ${
              featured
                ? "border-2 border-brand-orange bg-brand-orange/[0.07] shadow-glow-lg lg:-translate-y-2"
                : "border border-brand-gray bg-brand-darker hover:border-brand-orange/40"
            }`}
          >
            {featured && (
              <span className="absolute right-5 top-5 rounded-full bg-brand-orange px-3 py-1 font-condensed text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-black">
                Most booked
              </span>
            )}

            <p className="font-condensed text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              {tier.name}
            </p>

            <div className="mt-4 flex items-baseline gap-3">
              <span
                className={`tabular font-display text-5xl ${
                  featured ? "text-brand-orange" : "text-white"
                }`}
              >
                ${tier.price}
              </span>
              {tier.originalPrice && (
                <span className="tabular text-xl text-white/35 line-through">
                  ${tier.originalPrice}
                </span>
              )}
            </div>

            <ul className="mt-8 space-y-3.5 border-t border-white/5 pt-6 text-sm">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/80">
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                      featured
                        ? "bg-brand-orange text-brand-black"
                        : "bg-brand-orange/15 text-brand-orange ring-1 ring-inset ring-brand-orange/40"
                    }`}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={tier.href}
              className={`mt-10 inline-flex items-center gap-3 self-start rounded-full py-2 pl-5 pr-1 font-condensed text-sm font-semibold uppercase tracking-[0.12em] transition active:scale-[0.98] ${
                featured
                  ? "bg-brand-orange text-brand-black hover:bg-[var(--brand-orange-soft)]"
                  : "bg-white/10 text-white hover:bg-brand-orange hover:text-brand-black"
              }`}
            >
              Get started
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition ${
                  featured
                    ? "bg-brand-black text-brand-orange"
                    : "bg-brand-black text-white group-hover:text-brand-orange"
                }`}
              >
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
