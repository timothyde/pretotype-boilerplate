module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      height: (theme) => ({
        'screen-1/2': '50vh',
        'screen-1/5': '20vh',
        'screen-2/5': '40vh',
        'screen-3/5': '60vh',
        'screen-4/5': '80vh',
      }),
      padding: { 'fluid-video': '56.25%' },
    },
  },
};
