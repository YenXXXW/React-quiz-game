/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simpleBg': "url('https://www.wallpaperflare.com/static/585/258/417/simple-simple-background-minimalism-abstract-wallpaper.jpg')",
      }
    },
  },
  plugins: [],
}