/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#265df2",
          secondary: "#111",
          accent: "#16507b",
          neutral: "#fff",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
