"use client";

import { motion } from "framer-motion";

type Step = {
  title: string;
  copy: string;
};

type Props = {
  steps: Step[];
};

export default function NumberedSteps({ steps }: Props) {
  return (
    <ol className="relative grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
      <div
        className="step-dashed pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-0.5 sm:block"
        aria-hidden="true"
      />

      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center text-center"
        >
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange font-display text-2xl text-brand-black shadow-glow">
            {i + 1}
            <span
              className="absolute inset-0 -z-10 rounded-full bg-brand-orange/30 blur-xl"
              aria-hidden="true"
            />
          </span>
          <h3 className="mt-6 font-display text-xl uppercase tracking-tightish text-brand-orange">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            {step.copy}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
