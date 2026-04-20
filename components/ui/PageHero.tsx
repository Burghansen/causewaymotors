import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  orangeWord?: string;
  intro?: string;
  image: string;
  imageClassName?: string;
  crumbs?: Crumb[];
};

export default function PageHero({
  eyebrow,
  title,
  orangeWord,
  intro,
  image,
  imageClassName = "object-cover",
  crumbs,
}: Props) {
  const renderTitle = () => {
    if (!orangeWord) return title;
    const parts = title.split(orangeWord);
    return (
      <>
        {parts[0]}
        <span className="text-brand-orange">{orangeWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-brand-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`absolute inset-0 -z-20 opacity-30 ${imageClassName}`}
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-black/60 via-brand-black/80 to-brand-black"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 hero-ambient" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition hover:text-brand-orange"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <ChevronRight className="h-3 w-3 text-white/30" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="font-condensed text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-display uppercase leading-[0.9] tracking-tightest text-white text-[2.75rem] sm:text-6xl lg:text-7xl">
          {renderTitle()}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
