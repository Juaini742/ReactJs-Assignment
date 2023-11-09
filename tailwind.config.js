/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#c2410c",
        warning: "#ea580c",
        danger: "#dc2626",
      },
    },
  },
  plugins: [],
};
