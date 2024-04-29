/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'regular' : 'regular',

        'heavy' : 'heavy',
        'italic' : 'italic',
        'light' : 'light',
        'medium' : 'medium',
        'league' : 'league'
      },
      colors: {
        'primary-color': '#1f92ad',
        'primary-color-2': '#62b2c5',
        'primary-color-3': '#156679',
        "c-success": "#57C73C",
        "c-warn": "#E2D55B",
        "c-error": "#FF412E",
        "c-info": "#0B65BD",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};
