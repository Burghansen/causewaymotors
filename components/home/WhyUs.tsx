"use client";

import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const claims = [
  "Free diagnostic scan",
  "No appointment necessary",
  "AA motoring approved",
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-28 sm:py-36">
      <div
        className="absolute -left-48 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-orange/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <SectionEyebrow>Why us</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
            Built on trust,
            <br />
            <span className="text-brand-orange">since 1966.</span>
          </h2>
          <p className="mt-6 max-w-sm text-pretty text-white/70">
            Every vehicle through our workshop is diagnosed with the latest test
            equipment and repaired by mechanics with decades of hands-on experience.
            That&apos;s how we&apos;ve kept Auckland moving for nearly six decades.
          </p>
          <div className="mt-10">
            <PillButton href="/about">View more</PillButton>
          </div>
        </motion.div>

        <div className="lg:col-span-8">
          <ul className="space-y-3 sm:space-y-5">
            {claims.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                <span
                  aria-hidden="true"
                  className="block font-display uppercase leading-[0.9] tracking-tightest transition duration-500 text-stroke text-4xl sm:text-5xl lg:text-7xl group-hover:text-brand-orange group-hover:[-webkit-text-stroke:0]"
                >
                  {c}
                </span>
                <span className="sr-only">{c}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
