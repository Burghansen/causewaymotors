import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          "orange-soft": "#FF8124",
          black: "#000000",
          dark: "#121212",
          darker: "#0A0A0A",
          gray: "#1F2937",
          "gray-soft": "#2A2F37",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        condensed: ["var(--font-condensed)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tightish: "-0.02em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,107,0,0.35), 0 10px 40px -8px rgba(255,107,0,0.65)",
        "glow-sm": "0 0 18px -2px rgba(255,107,0,0.6)",
        "glow-lg": "0 0 0 1px rgba(255,107,0,0.4), 0 20px 60px -10px rgba(255,107,0,0.55)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 10px 30px -12px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 55%, #000000 100%)",
      },
      dropShadow: {
        glow: "0 0 12px rgba(255,107,0,0.55)",
      },
      animation: {
        "marquee": "marquee 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
