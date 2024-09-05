/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timberwolf: "#d8d7cc",
        ebony: "#212939",
      },
    },
  },
  plugins: [],
};
