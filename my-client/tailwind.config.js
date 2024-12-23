/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {}, // Extend Tailwind themes if needed
  },
  plugins: [require('daisyui')], // Add DaisyUI plugin
};
