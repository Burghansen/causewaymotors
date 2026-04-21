import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Warrant of Fitness", href: "/services#wof" },
      { label: "Full servicing", href: "/services#servicing" },
      { label: "Diagnostics", href: "/services#diagnostics" },
      { label: "Brakes & suspension", href: "/services#brakes" },
    ],
  },
  {
    heading: "Workshop",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book online", href: "/contact#book" },
      { label: "Fleet services", href: "/services#fleet" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-brand-gray bg-brand-black pt-20 pb-10"
    >
      <div className="absolute inset-x-0 top-0 h-px divider-orange" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-orange/[0.05] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label={site.name}
          >
            <Image
              src="/Causewaymotors-logo.png"
              alt={site.name}
              width={981}
              height={478}
              className="h-28 w-auto drop-shadow-[0_2px_18px_rgba(255,107,0,0.35)]"
            />
          </Link>
          <p className="mt-6 max-w-sm text-pretty text-[0.95rem] leading-relaxed text-white/65">
            Precision auto care for Auckland drivers since 1966. AA Approved,
            MTA Assured, and backed by a 12-month workmanship guarantee.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-orange" />
              <span>63 Barrys Point Road, Takapuna, Auckland 0622</span>
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
              <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-orange" />
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-brand-orange"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-brand-orange" />
              <span className="tabular">
                Mon–Fri 7:30–17:00 · Sat–Sun Closed
              </span>
            </li>
          </ul>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 lg:col-span-7"
        >
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="transition hover:text-brand-orange"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-brand-gray px-6 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Causeway Motors Ltd. All rights reserved.</p>
        <p className="tabular">NZBN 9429046218473 · GST 123-456-789</p>
      </div>
    </footer>
  );
}
