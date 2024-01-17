module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tablet: "600px",
      desktop: "900px",
    },
  },
  plugins: [require('flowbite/plugin')],
}