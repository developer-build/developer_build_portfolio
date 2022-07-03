/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#2487ce",
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
