import Image from "next/image";
import { site } from "@/lib/site";

const brandLogos: Record<string, string> = {
  "Audi": "/logos/audi.svg",
  "BMW": "/logos/bmw.svg",
  "Mercedes-Benz": "/logos/mercedes.svg",
  "Volkswagen": "/logos/volkswagen.svg",
  "Volvo": "/logos/volvo.svg",
  "Saab": "/logos/saab.svg",
  "Subaru": "/logos/subaru.svg",
  "Toyota": "/logos/toyota.svg",
  "Honda": "/logos/honda.svg",
  "Mazda": "/logos/mazda.svg",
  "Nissan": "/logos/nissan.svg",
};

export default function BrandStrip() {
  const items = [...site.specialties, ...site.specialties];
  return (
    <section
      aria-label="Vehicle specialties"
      className="relative overflow-hidden border-y border-brand-gray bg-brand-darker py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-brand-darker to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-brand-darker to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-14 whitespace-nowrap will-change-transform">
        {items.map((brand, i) => (
          <div key={`${brand}-${i}`} className="flex items-center gap-14">
            <div className="flex items-center gap-4 group cursor-default">
              {brandLogos[brand] && (
                <div className="relative h-8 w-12 opacity-55 transition group-hover:opacity-100 group-hover:drop-shadow-glow">
                  <Image
                    src={brandLogos[brand]}
                    alt={`${brand} logo`}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
              )}
              <span className="font-display text-2xl uppercase tracking-tightest text-white/55 transition group-hover:text-brand-orange sm:text-3xl">
                {brand}
              </span>
            </div>
            {/* Separator */}
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gray" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
