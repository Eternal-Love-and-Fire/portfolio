/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        'fuck': "50px repeat(11, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
