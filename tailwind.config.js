/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B3D2E",
          50: "#E7F0EC",
          100: "#C7DED4",
          200: "#9FC6B3",
          300: "#6FA98D",
          400: "#3F8A6A",
          500: "#1F6B4D",
          600: "#0B3D2E",
          700: "#093225",
          800: "#06241A",
          900: "#031410",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#F5C518",
          dark: "#9C7D1B",
        },
        cream: "#F7F3EC",
        ink: "#1A1A1A",
      },
      fontFamily: {
        arabic: ["Cairo", "Tajawal", "sans-serif"],
        display: ["Cairo", "serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
}