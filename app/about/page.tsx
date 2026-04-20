import type { Metadata } from "next";
import Image from "next/image";
import { Award, Clock, MapPin, Users, ShieldCheck, Wrench } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import FeatureTabs from "@/components/ui/FeatureTabs";
import PillButton from "@/components/ui/PillButton";
import BrandStrip from "@/components/ui/BrandStrip";
import CtaBand from "@/components/home/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Causeway Motors — a family-run Auckland workshop trusted to repair and maintain Auckland vehicles since 1966.",
};

const tabs = [
  {
    id: "performance",
    label: "Performance Check",
    image:
      "/images/auto_maintenance.png",
    features: [
      "Fuel injection inspection",
      "Computer diagnostics",
      "Steering and suspension",
      "Cooling & thermal check",
      "Emissions & sensor scan",
    ],
  },
  {
    id: "maintenance",
    label: "Auto Maintenance",
    image:
      "/images/auto_maintenance.png",
    features: [
      "Oil and filter service",
      "Cambelt replacement",
      "Brake pad & disc service",
      "Coolant & brake fluid flush",
      "Battery & alternator check",
    ],
  },
  {
    id: "fleet",
    label: "Fleet Services",
    image:
      "/vehicle-fleet2.jpg",
    features: [
      "Scheduled WOF programme",
      "Priority booking slots",
      "Consolidated invoicing",
      "On-site vehicle collection",
      "Monthly fleet reporting",
    ],
  },
];

const values = [
  {
    icon: Clock,
    title: "Since 1966",
    copy: "Nearly six decades on Takapuna's back streets, now run by the second generation.",
  },
  {
    icon: Users,
    title: "Family-run",
    copy: "Owner-operated. No chain-store targets — just the people who’ll work on your car.",
  },
  {
    icon: ShieldCheck,
    title: "AA approved",
    copy: "Independently audited to AA Motoring standards. MTA assured workmanship.",
  },
  {
    icon: Wrench,
    title: "Every make",
    copy: "Specialist expertise across Audi, BMW, Mercedes, VW, Volvo, Saab, and all Japanese marques.",
  },
];

const history = [
  { year: "1966", event: "Causeway Motors opens on Barrys Point Road, Takapuna." },
  { year: "1984", event: "Expanded to include European vehicle specialisation." },
  { year: "2008", event: "AA Motoring Approved accreditation awarded." },
  { year: "2019", event: "Digital diagnostics suite installed — every bay online." },
  { year: "2025", event: "Crossed 14,200 vehicles serviced." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the workshop"
        title="Who we are"
        orangeWord="we are"
        intro={`Since ${site.foundedYear}, ${site.name} has been providing Auckland with top-quality auto repair. Decades of experience, a family-run workshop, and a reputation built one customer at a time.`}
        image="/Aboutus-page.jpg"
        imageClassName="object-cover object-center"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Tabbed specialties */}
      <section className="bg-brand-black py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>What we cover</SectionEyebrow>
              <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
                Every system, <span className="text-brand-orange">every bay.</span>
              </h2>
            </div>
            <p className="max-w-md text-pretty text-white/65">
              Our workshop is equipped for everything from a five-minute warrant
              inspection to a complete engine rebuild. Pick a specialty to see
              what&apos;s covered.
            </p>
          </div>

          <div className="mt-14">
            <FeatureTabs tabs={tabs} />
          </div>
        </div>
      </section>

      {/* Why choose us — values grid */}
      <section className="relative bg-brand-darker py-28 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px divider-orange" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <SectionEyebrow>Why choose us</SectionEyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
              Old-school workmanship,
              <br />
              <span className="text-brand-orange">modern tools.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-white/70">
              We believe the best workshops are the ones that can tell you
              exactly what&apos;s wrong with your car — and exactly what it
              should cost to fix. No upsell, no guesswork, no &ldquo;while
              we&apos;re in there&rdquo;.
            </p>
            <div className="mt-10">
              <PillButton href="/services">Explore services</PillButton>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {values.map(({ icon: Icon, title, copy }) => (
              <li
                key={title}
                className="rounded-2xl border border-brand-gray bg-brand-black p-6 transition hover:border-brand-orange/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-brand-black shadow-glow-sm">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <h3 className="mt-5 font-display text-lg uppercase tracking-tightish text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portrait + history timeline */}
      <section className="bg-brand-black py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-brand-gray">
              <Image
                src="/Aboutus-page.jpg"
                alt="Causeway Motors mechanic at a workbench"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-brand-orange/30 bg-brand-dark/90 p-4 backdrop-blur-md shadow-card sm:left-auto sm:-right-6 sm:w-[280px]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-orange/15 ring-1 ring-brand-orange/40">
                  <Award className="h-5 w-5 text-brand-orange drop-shadow-glow" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    AA Motoring Approved
                  </p>
                  <p className="mt-0.5 text-xs text-white/60">
                    Independently audited workshop
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionEyebrow>Our story</SectionEyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
              Five decades on the
              <br />
              <span className="text-brand-orange">same corner.</span>
            </h2>

            <ol className="mt-12 space-y-0">
              {history.map((h, i) => (
                <li
                  key={h.year}
                  className="relative flex gap-6 border-l-2 border-brand-gray pb-8 pl-8 last:pb-0"
                >
                  <span
                    className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-brand-orange ring-4 ring-brand-black"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="tabular font-display text-2xl text-brand-orange">
                      {h.year}
                    </p>
                    <p className="mt-2 max-w-xl text-pretty text-white/75">
                      {h.event}
                    </p>
                  </div>
                  <span className="sr-only">Step {i + 1}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-center gap-3 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-brand-orange" />
              {site.address.street}, {site.address.suburb}
            </div>
          </div>
        </div>
      </section>

      <BrandStrip />
      <CtaBand />
    </>
  );
}
