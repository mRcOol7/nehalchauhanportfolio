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
        background: {
          light: "#F5F2EA",
          dark: "#1A1A1A",
        },
        foreground: {
          light: "#8B7355",
          dark: "#F2E8D9",
        },
        primary: {
          DEFAULT: "#8B7355",
          dark: "#C0A062",
        },
        secondary: {
          DEFAULT: "#F5F2EA",
          dark: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#FFFFF0",
          dark: "#C0A062",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        mono: ["Courier Prime", "monospace"],
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
        "theme-toggle": "themeToggle 0.3s ease-in-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        themeToggle: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backgroundImage: {
        'grain': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzM2QjeuAAAACHRSTlMABgkNERQXGx8w6xQAAABgSURBVDjLY2BABYxFDAwMLAwMjCUMDGwODAyMBQwM7AYMDEy5QAEBBgbWDgYGZl8GBpZwBgZWBwYGFgMGBmYHqDgvA4PCBQYGNgcGBsYCBgZ2AwYGpgKgTkRYMmBBcx8AJt8H1RpZdnwAAAAASUVORK5CYII=')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
