module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: '600px',
      tablet: '840px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
