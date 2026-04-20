import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactForm from "@/components/ui/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit Causeway Motors at ${site.address.street}, ${site.address.suburb}, Auckland. Phone ${site.phone}. Open Mon–Fri 7:30 to 17:00.`,
};

const mapsEmbed =
  "https://www.google.com/maps?q=63+Barrys+Point+Road+Takapuna+Auckland&output=embed";
const mapsDirections =
  "https://www.google.com/maps/dir/?api=1&destination=63+Barrys+Point+Road+Takapuna+Auckland+0622";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        orangeWord="us"
        intro="Drop in, call us, or send a message. We reply within one business day and book most jobs within the week."
        image="/ContactUs-Page.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Office card (single location) */}
      <section className="bg-brand-black py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <InfoCard
              icon={MapPin}
              label="Visit the workshop"
              lines={[
                site.address.street,
                `${site.address.suburb}, ${site.address.city} ${site.address.postcode}`,
                site.address.country,
              ]}
              action={{ label: "Get directions", href: mapsDirections, external: true }}
            />
            <InfoCard
              icon={Phone}
              label="Call the team"
              lines={[site.phone, "No appointment necessary"]}
              action={{ label: `Call ${site.phone}`, href: site.phoneHref }}
            />
            <InfoCard
              icon={Clock}
              label="Opening hours"
              lines={[
                "Mon – Fri · 7:30 to 17:00",
                "Saturday · Closed",
                "Sunday · Closed",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-brand-darker">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-brand-gray">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <iframe
                src={mapsEmbed}
                title="Causeway Motors on Google Maps"
                loading="lazy"
                className="absolute inset-0 h-full w-full [filter:grayscale(1)_invert(0.92)_hue-rotate(180deg)_contrast(0.9)_saturate(1.15)]"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.08) 60%, rgba(0,0,0,0.25) 100%)",
                }}
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-4 rounded-2xl border border-brand-orange/30 bg-brand-black/90 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-orange text-brand-black">
                <Navigation className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-condensed text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  {site.address.street}
                </p>
                <p className="text-xs text-white/60">
                  {site.address.suburb}, {site.address.city} {site.address.postcode}
                </p>
              </div>
              <a
                href={mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-orange px-4 py-2 font-condensed text-xs font-semibold uppercase tracking-[0.14em] text-brand-black transition hover:bg-[var(--brand-orange-soft)]"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form + support copy */}
      <section className="bg-brand-black py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <SectionEyebrow>Book a job</SectionEyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
              Contact our
              <br />
              <span className="text-brand-orange">support team.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-white/70">
              Tell us what&apos;s going on with your vehicle and we&apos;ll
              come back with a quote or a booking slot — usually the same
              morning.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-orange" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition hover:text-brand-orange"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-orange" />
                <a
                  href={site.phoneHref}
                  className="tabular transition hover:text-brand-orange"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-orange" />
                <span>
                  {site.address.street}, {site.address.suburb},{" "}
                  {site.address.city} {site.address.postcode}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  lines,
  action,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  lines: string[];
  action?: { label: string; href: string; external?: boolean };
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-gray bg-brand-darker p-6 transition hover:border-brand-orange/60">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-brand-black shadow-glow-sm">
        <Icon className="h-5 w-5" strokeWidth={2.25} />
      </div>
      <p className="mt-5 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
        {label}
      </p>
      <ul className="mt-2 space-y-1 text-[0.95rem] leading-relaxed text-white/80">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      {action && (
        <a
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
          className="mt-auto inline-flex items-center gap-2 pt-6 font-condensed text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange transition hover:text-white"
        >
          {action.label} <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
}
