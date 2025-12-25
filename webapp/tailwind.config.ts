import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf9ff",
          100: "#d7f0ff",
          200: "#afe0ff",
          300: "#7fd0ff",
          400: "#49b7ff",
          500: "#1099ff",
          600: "#007bdb",
          700: "#005fb0",
          800: "#00427a",
          900: "#002840",
        },
        accent: {
          100: "#fff7e3",
          200: "#ffebbf",
          300: "#ffd888",
          400: "#ffc24d",
          500: "#fca311",
        },
      },
      backgroundImage: {
        "grid-overlay":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      fontFamily: {
        heading: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
