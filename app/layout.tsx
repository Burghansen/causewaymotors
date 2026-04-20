import type { Metadata } from "next";
import { Geist, Archivo_Black, Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar";
import CallFAB from "@/components/CallFAB";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://causewaymotors.co.nz"),
  title: {
    default: "Causeway Motors — Trusted Auto Repair Mechanics in Auckland",
    template: "%s · Causeway Motors",
  },
  description:
    "Auckland's trusted auto repair workshop since 1966. WOF, servicing, diagnostics, brakes, transmission — AA Motoring Approved. Takapuna, Auckland.",
  keywords: [
    "Auckland mechanic",
    "auto repair Auckland",
    "Takapuna mechanic",
    "WOF Auckland",
    "AA approved repairer",
    "Causeway Motors",
  ],
  openGraph: {
    title: "Causeway Motors — Trusted Auto Repair Mechanics in Auckland",
    description:
      "Auckland's trusted auto repair workshop since 1966. WOF, servicing, diagnostics. AA Motoring Approved.",
    type: "website",
    locale: "en_NZ",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${display.variable} ${condensed.variable}`}
    >
      <body className="bg-brand-black font-sans text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-orange focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-black"
        >
          Skip to content
        </a>
        <div
          className="pointer-events-none fixed inset-0 z-[1] grain-overlay"
          aria-hidden="true"
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <CallFAB />
      </body>
    </html>
  );
}
