import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08080A",
        surface: "#131316",
        "surface-2": "#1A1A1E",
        ink: "#F2F1EE",
        "ink-muted": "#94938F",
        brass: "#C9A15C",
        "brass-dim": "#8C7141",
        line: "#232327",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
