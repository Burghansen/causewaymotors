"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

type Service = {
  title: string;
  copy: string;
  image: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Scheduled service",
    copy: "Manufacturer-spec servicing, oils, filters, fluids — all the routine work that keeps warranties valid.",
    image:
      "/images/service_scheduled.png",
    href: "/services#servicing",
  },
  {
    title: "Engine & tuning",
    copy: "Engine diagnostics, timing belts, carbon cleaning, performance tuning for European and Japanese builds.",
    image:
      "/images/service_engine.png",
    href: "/services#engine",
  },
  {
    title: "Panelbeating",
    copy: "Accident repair, panel replacement, colour-matched respray — we put it back the way it came.",
    image:
      "/images/service_panelbeating.png",
    href: "/services#panel",
  },
  {
    title: "WOF & inspection",
    copy: "While-you-wait Warrant of Fitness plus pre-purchase and fleet inspections across all makes.",
    image:
      "/images/service_wof.png",
    href: "/services#wof",
  },
];

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceGrid() {
  return (
    <section id="services" className="relative bg-brand-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow>Our services</SectionEyebrow>
            <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-6xl">
              Everything your car needs,{" "}
              <span className="text-brand-orange">under one roof.</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-white/65">
            From a 45-minute WOF to a full engine rebuild — we service every
            make on New Zealand roads, including Audi, BMW, Mercedes, VW, Volvo,
            and all Japanese vehicles.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <Link
                href={s.href}
                className="group relative block overflow-hidden rounded-2xl border border-brand-gray bg-brand-darker transition hover:border-brand-orange/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1 font-condensed text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-black">
                    Available
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg uppercase tracking-tightish text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {s.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-condensed text-xs font-semibold uppercase tracking-[0.16em] text-brand-orange">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
