/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        stack: "repeat(auto-fit,minmax(160px,160px))",
        "stack-4": "repeat(4,minmax(160px,160px))",
      },
      colors: {
        timberwolf: "#d8d7cc",
        ebony: "#212939",
      },
    },
  },
  plugins: [],
};
