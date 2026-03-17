import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepIndigo: "#1E1B4B",
        electricPurple: "#7C3AED",
        softCyan: "#06B6D4",
        midnight: "#111827",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 45px rgba(124, 58, 237, 0.25)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(124, 58, 237, 0.25), transparent 55%), radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.2), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
