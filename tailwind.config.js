/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/*.html", "./dist/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        dark: "radial-gradient(circle at center,rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url('/assets/img/dark-texture.jpg');",
      },
    },
  },
  plugins: [],
};
