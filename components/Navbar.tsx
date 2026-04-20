"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveHref(pathname ?? "/");
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? activeHref === "/" : activeHref.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/Causewaymotors-logo.png"
            alt={site.name}
            width={981}
            height={478}
            priority
            className="h-20 w-auto drop-shadow-[0_2px_14px_rgba(255,107,0,0.35)]"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((n) => {
            const active = isActive(n.href);
            return (
              <li key={n.href} className="relative">
                <Link
                  href={n.href}
                  className={`relative inline-block rounded-full px-3.5 py-2 text-sm font-medium transition ${
                    active
                      ? "text-brand-orange link-glow"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-brand-orange/10 ring-1 ring-inset ring-brand-orange/40"
                      aria-hidden="true"
                    />
                  )}
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white/80 transition hover:text-brand-orange md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            <span className="tabular">{site.phone}</span>
          </a>
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block"
              >
                <Link
                  href={site.bookingHref}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-brand-black shadow-glow ring-1 ring-brand-orange/60 transition hover:bg-[var(--brand-orange-soft)] active:scale-[0.98]"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book now
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-gray bg-brand-dark text-white transition active:scale-95 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-gray bg-brand-black md:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {site.nav.map((n) => {
                const active = isActive(n.href);
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-base font-medium transition ${
                        active
                          ? "bg-brand-orange/10 text-brand-orange ring-1 ring-inset ring-brand-orange/30"
                          : "text-white/85 hover:bg-brand-dark hover:text-brand-orange"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href={site.bookingHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-brand-black shadow-glow"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book service online
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
