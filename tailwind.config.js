/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "rgba(255,255,255,0.06)",
        surface2: "rgba(255,255,255,0.09)",
        stroke: "rgba(255,255,255,0.10)",
        glow: "rgba(132, 56, 255, 0.40)",
        brand: "#ff5a2c",
      },
      boxShadow: {
        glow: "0 0 120px rgba(132, 56, 255, 0.30)",
        card: "0 12px 35px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};
