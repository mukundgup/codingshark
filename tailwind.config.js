/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        shark: {
          DEFAULT: "#0EA5E9",
          dark: "#0369A1",
        }
      }
    },
  },
  plugins: [],
};
