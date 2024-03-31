/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#40b884",
        light: "#f6f5f8",
      },
    },
  },
  plugins: [],
};
