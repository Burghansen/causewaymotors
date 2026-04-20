"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CallFAB() {
  return (
    <motion.a
      href={site.phoneHref}
      aria-label={`Call ${site.name} at ${site.phone}`}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3.5 text-sm font-semibold text-brand-black shadow-glow ring-1 ring-brand-orange/60 md:hidden"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-black/50" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-black" />
      </span>
      <Phone className="h-4 w-4" strokeWidth={2.5} />
      Call Now
    </motion.a>
  );
}
