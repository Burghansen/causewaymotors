"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";

    if (!name.trim()) {
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // TODO: Replace with real form endpoint (e.g. Formspree, Netlify Forms, or API route)
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    form.reset();
  }

  const inputBase =
    "w-full rounded-xl border border-brand-gray bg-brand-black px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/30";

  return (
    <form
      id="book"
      onSubmit={onSubmit}
      className="rounded-2xl border border-brand-gray bg-brand-darker p-6 sm:p-8"
      noValidate
    >
      <h3 className="font-display text-2xl uppercase tracking-tightish text-white">
        Send us a message
      </h3>
      <p className="mt-2 text-sm text-white/60">
        Book a job, request a quote, or ask us anything. We reply within one
        business day.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-white/75">Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputBase}
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-white/75">Phone</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="021 123 4567"
            className={`${inputBase} tabular`}
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-white/75">Vehicle</span>
          <input
            name="car"
            type="text"
            placeholder="e.g. 2015 BMW 320i"
            className={inputBase}
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-white/75">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputBase}
          />
        </label>

        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium text-white/75">Message</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us what's going on with your car…"
            className={`${inputBase} resize-y`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 rounded-full bg-brand-orange px-6 py-3 pr-1.5 font-condensed font-semibold uppercase tracking-[0.12em] text-brand-black shadow-glow ring-1 ring-brand-orange/60 transition hover:bg-[var(--brand-orange-soft)] active:scale-[0.98] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Book an appointment"}
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-black text-brand-orange transition group-hover:bg-white group-hover:text-brand-black">
            <Send className="h-4 w-4" />
          </span>
        </button>

        {status === "success" && (
          <p className="text-sm text-brand-orange">
            Message sent. We&apos;ll be in touch shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Please fill in your name and a valid email address.
          </p>
        )}
      </div>
    </form>
  );
}
