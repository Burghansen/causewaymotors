import type { Metadata } from "next";
import Image from "next/image";
import {
  Wrench,
  Gauge,
  ShieldCheck,
  Disc3,
  Cog,
  Zap,
  Paintbrush,
  CircleDot,
  Snowflake,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import PricingTiers from "@/components/ui/PricingTiers";
import BrandStrip from "@/components/ui/BrandStrip";
import PillButton from "@/components/ui/PillButton";
import CtaBand from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service Auckland workshop: WOF, servicing, diagnostics, brakes, transmission, panelbeating, and engine tuning. Since 1966.",
};

const services = [
  {
    id: "wof",
    title: "WOF Inspection",
    copy: "While-you-wait Warrant of Fitness covering brakes, tyres, lights, steering, structure, and glazing.",
    icon: ShieldCheck,
    image:
      "/images/svc_wof.png",
  },
  {
    id: "servicing",
    title: "Full Servicing",
    copy: "Manufacturer-spec servicing with premium oils, filters, and fluids — keeps warranties valid and engines smooth.",
    icon: Wrench,
    image:
      "/images/svc_servicing.png",
  },
  {
    id: "diagnostics",
    title: "Computer Diagnostics",
    copy: "OBD-II fault scans across engine, gearbox, ABS, airbags — plain-English reports, no jargon.",
    icon: Gauge,
    image:
      "/images/svc_diagnostics.png",
  },
  {
    id: "brakes",
    title: "Brakes & Suspension",
    copy: "Pads, rotors, struts, shocks — precision handling and stopping power, restored.",
    icon: Disc3,
    image:
      "/images/svc_brakes.png",
  },
  {
    id: "transmission",
    title: "Transmission & Clutch",
    copy: "Manual, automatic, CVT — diagnosis, fluid service, clutch replacement, and full rebuilds.",
    icon: Cog,
    image:
      "/images/svc_transmission.png",
  },
  {
    id: "engine",
    title: "Engine Tuning & Carbon Clean",
    copy: "Specialist engine tuning plus carbon cleaning for direct-injection petrol and diesel engines.",
    icon: Zap,
    image:
      "/images/svc_engine.png",
  },
  {
    id: "tyres",
    title: "Tyres & Wheel Alignment",
    copy: "New tyres, puncture repair, wheel balancing, and laser wheel alignment.",
    icon: CircleDot,
    image:
      "/images/svc_tyres.png",
  },
  {
    id: "ac",
    title: "Air Conditioning",
    copy: "A/C re-gas, leak detection, and full climate system servicing for every make.",
    icon: Snowflake,
    image:
      "/images/svc_ac.png",
  },
  {
    id: "panel",
    title: "Panelbeating & Painting",
    copy: "Accident repair, panel replacement, and colour-matched respray — returned like new.",
    icon: Paintbrush,
    image:
      "/images/svc_panel.png",
  },
];

const tiers = [
  {
    name: "Starter",
    price: 189,
    originalPrice: 220,
    featured: false,
    href: "/contact#book",
    features: [
      "Oil & filter change",
      "Fluid top-ups",
      "Battery & alternator test",
      "Tyre pressure & tread check",
      "Basic 20-point inspection",
    ],
  },
  {
    name: "Regular",
    price: 289,
    originalPrice: 349,
    featured: true,
    href: "/contact#book",
    features: [
      "Everything in Starter",
      "Wheel balancing",
      "Brake pad & disc check",
      "Power steering service",
      "Full 40-point inspection",
      "Free computer diagnostic",
    ],
  },
  {
    name: "Advanced",
    price: 459,
    originalPrice: 549,
    featured: false,
    href: "/contact#book",
    features: [
      "Everything in Regular",
      "Engine tune-up",
      "New wiper blades & bulbs",
      "Coolant & brake fluid flush",
      "Air-con performance check",
      "Priority booking",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Our services"
        orangeWord="services"
        intro="From a 45-minute WOF to a full engine rebuild — one family-run Auckland workshop covering every job your vehicle will ever need."
        image="/images/auto_maintenance.png"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Service cards grid */}
      <section className="bg-brand-black py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>High-quality workmanship</SectionEyebrow>
              <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
                At a <span className="text-brand-orange">fair price.</span>
              </h2>
            </div>
            <p className="max-w-md text-pretty text-white/65">
              Every job is quoted upfront and backed by our 12-month workmanship
              guarantee. If it isn&apos;t right, we make it right.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, title, copy, icon: Icon, image }) => (
              <article
                key={id}
                id={id}
                className="group relative overflow-hidden rounded-2xl border border-brand-gray bg-brand-darker transition hover:border-brand-orange/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/30 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-brand-black shadow-glow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg uppercase tracking-tightish text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative bg-brand-darker py-28 sm:py-36">
        <div className="absolute inset-x-0 top-0 h-px divider-orange" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow className="justify-center">Service packs</SectionEyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-6xl">
              Choose your <span className="text-brand-orange">pack.</span>
            </h2>
            <p className="mt-5 text-pretty text-white/65">
              Fixed-price service packs for the jobs you book most. Custom
              quotes on every other repair.
            </p>
          </div>

          <div className="mt-16">
            <PricingTiers tiers={tiers} />
          </div>

          <p className="mt-10 text-center text-xs uppercase tracking-[0.18em] text-white/45">
            Afterpay available on all packs · GST inclusive
          </p>
        </div>
      </section>

      {/* Fleet CTA block */}
      <section className="bg-brand-black py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <SectionEyebrow>Fleet services</SectionEyebrow>
            <h2
              id="fleet"
              className="mt-5 font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl"
            >
              Keep your fleet <span className="text-brand-orange">on the road.</span>
            </h2>
            <p className="mt-6 text-pretty text-white/70">
              We run scheduled servicing and WOF programmes for courier
              companies, trades, and rental fleets across the North Shore and
              greater Auckland. One point of contact, consolidated invoicing,
              and priority bookings.
            </p>
            <div className="mt-10">
              <PillButton href="/contact#book">Talk to our fleet team</PillButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-gray">
            <Image
              src="/vehicle-fleet.jpg"
              alt="Fleet of service vans at a workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover sepia-[.3] contrast-[1.1] saturate-[1.2]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 50%, rgba(0,0,0,0.6) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBand />
    </>
  );
}
