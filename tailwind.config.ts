import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        card: "#F4EDE1",
        coffee: "#C97A3D",
        "coffee-dark": "#7A4A2B",
        tea: "#4F6B4A",
        ink: "#2B2118",
        "text-secondary": "#5C4A38",
        muted: "#8A7A66",
        divider: "#E4D8C6",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        label: ["var(--font-instrument-serif)"],
        body: ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        ticket: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
