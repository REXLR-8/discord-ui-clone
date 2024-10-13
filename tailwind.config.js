/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.html", // Scan all HTML files in the root folder
  ],
  theme: {
    extend: {
      fontFamily: {
        abcgintonord: ["abcgintonord", "sans-serif"],
        ggsans: ["ggsans", "sans-serif"],
        ggsansm: ["ggsansm", "sans-serif"],
        ggsanssb: ["ggsanssb", "sans-serif"],
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        moving: "move 30s linear infinite",
      },
    },
  },
  plugins: [],
};
