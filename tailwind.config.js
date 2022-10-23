/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simpleBg': "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Relaxing-Background-HD.jpg')",
      }
    },
  },
  plugins: [],
}