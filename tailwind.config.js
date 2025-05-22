// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Wichtig: Dies stellt sicher, dass Tailwind Ihre React-Dateien scannt
    "./public/index.html" // Optional: Wenn Sie auch HTML-Dateien mit Tailwind-Klassen haben
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}