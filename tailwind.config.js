/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        maxHeight: {
          '75': '75%',
        },
        maxWidth: {
          '75': '75%',
        },
        colors: {
          "color-500":"var(--color-500)",
          "color-600":"var(--color-600)",
          "color-700":"var(--color-700)",
          "color-800":"var(--color-800)",
          "bg-primary":"var(--bg-primary)",
          "bg-secondary":"var(--bg-secondary)",
          "bg-light":"var(--bg-light)",
          "bg-dark":"var(--bg-dark)",
          "border-primary":"var(--border-primary)",
          "border-secondary":"var(--border-secondary)",
          "font-primary":"var(--font-primary)",
          "font-secondary":"var(--font-secondary)",
          "shadow-color":"var(--shadow-color)",
          "btn-primary": "var(--btn-primary)",
          "btn-secondary": "var(--btn-secondary)",
          "btn-success": "var(--btn-success)",
          "btn-danger": "var(--btn-danger)",
        },
        boxShadow: {
          "primary": "0 0 6px 1px var(--shadow-color)"
        },
    },
  },
  plugins: [],
  darkMode: 'class',
}
