// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(97% 0 0)",
          "base-300": "oklch(92% 0 0)",
          "base-content": "oklch(20% 0 0)",

          "primary": "oklch(85% 0.199 91.936)",
          "primary-content": "oklch(42% 0.095 57.708)",

          "secondary": "oklch(75% 0.183 55.934)",
          "secondary-content": "oklch(40% 0.123 38.172)",

          "accent": "oklch(0% 0 0)",
          "accent-content": "oklch(100% 0 0)",

          "neutral": "oklch(37% 0.01 67.558)",
          "neutral-content": "oklch(92% 0.003 48.717)",

          "info": "oklch(74% 0.16 232.661)",
          "info-content": "oklch(39% 0.09 240.876)",

          "success": "oklch(76% 0.177 163.223)",
          "success-content": "oklch(37% 0.077 168.94)",

          "warning": "oklch(82% 0.189 84.429)",
          "warning-content": "oklch(41% 0.112 45.904)",

          "error": "oklch(70% 0.191 22.216)",
          "error-content": "oklch(39% 0.141 25.723)",

          "--rounded-box": "1rem",
          "--rounded-btn": "1rem",
          "--rounded-badge": "0.5rem",

          "--tab-border": "1px",
          "--tab-border-radius": "1rem",
        },
      },
    ],
  },
};
