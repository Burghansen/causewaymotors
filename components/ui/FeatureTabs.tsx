"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

type Tab = {
  id: string;
  label: string;
  image: string;
  features: string[];
};

type Props = {
  tabs: Tab[];
};

export default function FeatureTabs({ tabs }: Props) {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Workshop specialties"
        className="grid grid-cols-1 overflow-hidden rounded-2xl border border-brand-gray sm:grid-cols-3"
      >
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`px-5 py-4 text-left font-condensed text-sm font-semibold uppercase tracking-[0.14em] transition ${
                isActive
                  ? "bg-brand-orange text-brand-black"
                  : "bg-brand-darker text-white/70 hover:bg-brand-dark hover:text-white"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-brand-gray bg-brand-darker lg:grid-cols-5"
        >
          <ul className="divide-y divide-brand-gray lg:col-span-3">
            {current.features.map((f) => (
              <li
                key={f}
                className="flex items-center justify-between gap-4 px-6 py-5"
              >
                <span className="font-condensed text-base font-semibold uppercase tracking-[0.1em] text-white">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <div className="relative min-h-[240px] lg:col-span-2">
            <Image
              src={current.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/40 to-transparent lg:from-brand-darker/80"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
