/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... (your other config settings)
  purge: process.env.NODE_ENV === 'production' ? ['./src/**/*.{js,jsx,ts,tsx}'] : false,
  // ...
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transform: ['hover'], // Enable hover variants for the transform property
    },
    extend: {},
  },
  plugins: [],
}
