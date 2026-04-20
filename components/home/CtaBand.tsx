import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import { Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-black py-28 sm:py-36">
      <Image
        src="/images/car_light_smoke.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-25"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-condensed text-sm font-semibold uppercase tracking-[0.24em] text-brand-orange">
            Book your vehicle in
          </p>
          <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-6xl">
            Something feels off?{" "}
            <span className="text-brand-orange">Let&apos;s take a look.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-lg text-white/75">
            Free diagnostic scan on every booking. No appointment necessary —
            but calling ahead means you won&apos;t wait.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <PillButton href={site.bookingHref}>Book a service</PillButton>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 font-condensed text-base font-semibold uppercase tracking-[0.14em] text-white transition hover:text-brand-orange"
            >
              <Phone className="h-4 w-4" />
              <span className="tabular">{site.phone}</span>
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/55">
            <MapPin className="h-4 w-4 text-brand-orange" />
            {site.address.street}, {site.address.suburb}, {site.address.city}
          </p>
        </div>
      </div>
    </section>
  );
}
