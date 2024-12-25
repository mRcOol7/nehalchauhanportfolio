import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        // Base colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Background colors
        background: {
          light: "#F5F2EA", // Light mode background
          dark: "#1A1A1A", // Dark mode background
        },

        // Foreground colors
        foreground: {
          light: "#8B7355", // Light mode text
          dark: "#F2E8D9", // Dark mode text
        },

        // Primary colors
        primary: {
          DEFAULT: "#8B7355", // Light mode primary
          dark: "#C0A062", // Dark mode primary
        },

        // Secondary colors
        secondary: {
          DEFAULT: "#F5F2EA", // Light mode secondary
          dark: "#1A1A1A", // Dark mode secondary
        },

        // Accent colors
        accent: {
          DEFAULT: "#FFFFF0", // Light mode accent
          dark: "#C0A062", // Dark mode accent
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"], // Classic serif font
        mono: ["Courier Prime", "monospace"], // Vintage monospace font
      },
      fontSize: {
        "heading-1": ["48px", { lineHeight: "1.2", letterSpacing: "0.5px" }], // Large heading
        "heading-2": ["24px", { lineHeight: "1.4", letterSpacing: "0.5px" }], // Medium heading
        body: ["16px", { lineHeight: "1.6" }], // Default body text
      },
      spacing: {
        section: "80px", // Section padding
        content: "40px", // Content padding
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards", // Fade-in animation
        "theme-toggle": "themeToggle 0.3s ease-in-out", // Theme toggle animation
        "float": "float 3s ease-in-out infinite", // Floating animation
        "grain": "grain 8s steps(10) infinite", // Grain animation
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
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
      backgroundImage: {
        'grain-light': "url('https://img.freepik.com/free-photo/white-rough-texture-pattern_1194-6701.jpg')", // Light mode grain texture
        'grain-dark': "url('https://img.freepik.com/free-photo/black-rough-abrasive-surface_1194-7665.jpg')", // Dark mode grain texture
      },
      backgroundSize: {
        'cover': 'cover', // Ensure the background covers the entire area
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat', // Prevent the background from repeating
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;