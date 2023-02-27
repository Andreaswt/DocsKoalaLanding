const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cream': '#fafafc',
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
