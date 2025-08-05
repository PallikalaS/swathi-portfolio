/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  colors: {
    background: "#ffffff",
    surface: "#f9fafb",         // light gray for cards if needed
    text: "#111111",
    muted: "#4B5563",
    accent: "#00EBCB",
    accentHover: "#06d6bd",
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['Geist Mono', 'monospace'],
  },
},
  },
  plugins: [],
}
