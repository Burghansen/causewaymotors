"use client";

import { motion } from "framer-motion";
import { Gauge, Wrench, Truck } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: Gauge,
    title: "Performance Check",
    copy: "Full computer diagnostic scan, emissions check, and performance report across every drivetrain system.",
    href: "/services#diagnostics",
  },
  {
    icon: Wrench,
    title: "Auto Repair",
    copy: "Engine, brakes, transmission, suspension, electrical — 59 years of workshop experience on every repair.",
    href: "/services#repair",
  },
  {
    icon: Truck,
    title: "Fleet Services",
    copy: "Scheduled servicing and WOF programmes for company vehicles across the North Shore and greater Auckland.",
    href: "/services#fleet",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeatureStrip() {
  return (
    <section className="relative -mt-16 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
