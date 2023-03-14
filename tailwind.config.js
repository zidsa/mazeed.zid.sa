const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shamel: ["FF Shamel", ...defaultTheme.fontFamily.sans],
        ibm: ["IBM Plex Sans Arabic", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
