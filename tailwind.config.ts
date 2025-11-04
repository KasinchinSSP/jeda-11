import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  safelist: [
    "text-neutral-900/80",
    "bg-brandBrown/90",
    "ring-primary-600/20",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#16A34A",
          700: "#15803D",
        },
        accent: {
          400: "#34D399",
        },
        brandBrown: "#8B5E34",
        brandBeige: "#F2EDE4",
        neutral: {
          900: "#1C1917",
          700: "#44403C",
          500: "#78716C",
          300: "#D6D3D1",
          100: "#F5F5F4",
          50: "#FAFAF9",
        },
        success: "#22C55E",
        warning: "#FACC15",
        info: "#0EA5E9",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Prompt", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "72rem",
        },
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom, rgba(21,128,61,0.6), rgba(139,94,52,0.5))",
        "gradient-cta": "linear-gradient(135deg, #16A34A 0%, #8B5E34 100%)",
      },
      transitionTimingFunction: {
        "ease-soft": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [forms, typography],
};

export default config;
