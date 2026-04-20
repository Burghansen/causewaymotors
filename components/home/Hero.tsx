"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import PillButton from "@/components/ui/PillButton";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92dvh] items-center overflow-hidden bg-brand-black pt-28 pb-24 sm:pt-36">
      <Image
        src="/hero-workshop.jpg"
        alt="Technician inspecting a vehicle under workshop lighting"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-[0.55]"
      />
      <div className="absolute inset-0 -z-10 hero-overlay" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hero-ambient" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-7xl grid-cols-12 gap-y-12 px-6 lg:px-8"
      >
        <div className="col-span-12">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 rounded-full border border-brand-orange/40 bg-brand-orange/[0.08] px-4 py-1.5"
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-brand-orange"
              aria-hidden="true"
            />
            <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Auckland mechanics · since 1966
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-balance font-display uppercase leading-[0.92] tracking-tightest text-white"
          >
            <span className="block text-4xl sm:text-5xl lg:text-[5rem]">
              Professional
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-[5rem]">
              <span className="text-brand-orange text-glow">auto repair</span>
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-[5rem]">
              &amp; maintenance
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-8 flex items-start gap-5">
            <span
              className="mt-2 block h-14 w-[3px] flex-none rounded-full bg-brand-orange shadow-glow-sm"
              aria-hidden="true"
            />
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              We make your auto problems disappear — fast. {site.name} has been
              Auckland&apos;s trusted workshop since {site.foundedYear}, keeping
              every make on the road with honest diagnosis and precision repair.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <PillButton href={site.bookingHref}>
              Get an appointment
            </PillButton>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-brand-orange sm:ml-4"
            >
              <Phone className="h-4 w-4" />
              <span className="tabular">{site.phone}</span>
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55"
          >
            {site.accreditations.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-orange"
                  aria-hidden="true"
                />
                {a}
              </li>
            ))}
          </motion.ul>
        </div>

      </motion.div>
    </section>
  );
}