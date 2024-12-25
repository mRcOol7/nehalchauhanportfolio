import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FFFFFF",
        foreground: "#000000",
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#F5F5F5",
          foreground: "#000000",
        },
      },
      fontFamily: {
        sans: ["Romanine", "monospace"],
        mono: ["Courier New", "monospace"],
      },
      fontSize: {
        "heading-1": ["48px", { lineHeight: "1.2", letterSpacing: "0.5px" }],
        "heading-2": ["24px", { lineHeight: "1.4", letterSpacing: "0.5px" }],
        body: ["16px", { lineHeight: "1.6" }],
      },
      spacing: {
        section: "80px",
        content: "40px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      gridTemplateColumns: {
        portfolio: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;