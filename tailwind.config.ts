import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#f7f4ee",
        bone: "#fffaf0",
        chrome: "#c8d0d9",
        graphite: "#1a1a1a",
        signal: "#d9ff2f",
        cosmic: "#245cff",
        solar: "#ff5a1f"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["var(--font-body)", "ui-serif", "Georgia", "serif"]
      },
      fontSize: {
        "label-xs": ["0.625rem", { lineHeight: "1rem", letterSpacing: "0.18em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5rem" }],
        "body-md": ["1rem", { lineHeight: "1.75rem" }],
        dek: ["1.5rem", { lineHeight: "1.12" }],
        "display-md": ["4rem", { lineHeight: "0.88" }],
        "display-lg": ["7rem", { lineHeight: "0.82" }]
      },
      boxShadow: {
        hard: "10px 10px 0 #050505",
        glow: "0 24px 80px rgba(36, 92, 255, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
