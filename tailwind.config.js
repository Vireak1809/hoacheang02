/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002045",
        secondary: "#875200",
        "secondary-container": "#ffb55c",
        surface: "#f9f9ff",
        "surface-container": "#e7eeff",
        "surface-container-low": "#f0f3ff",
        "surface-container-highest": "#d9e3f9",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#121c2c",
        "on-surface-variant": "#43474e",
        outline: "#74777f",
        "outline-variant": "#c4c6cf",
        background: "#f9f9ff",
        "on-primary": "#ffffff",
        "primary-container": "#1a365d",
        "on-primary-container": "#86a0cd",
        "primary-fixed": "#d6e3ff",
        "secondary-fixed": "#ffddba",
        "on-secondary": "#ffffff",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
      fontFamily: {
        sans: ["Hanuman", "serif"]
      }
    },
  },
  plugins: [],
}