/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'simpleBg': "url('https://mymodernmet.com/wp/wp-content/uploads/2020/02/en-plein-air-beach-paintings-sally-west-thumbnail.jpg')",
      }
    },
  },
  plugins: [],
}