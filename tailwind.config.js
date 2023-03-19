/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-50': '#F1E9C9',
        'yellow-100': '#DBAC2C',
        'yellow-500': '#C47F17',
        'purple-50': '#EBE5F9',
        'purple-100': '#8047F8',
        'purple-500': '#4B2995',
        'brown-50': '#8D8686',
        'brown-100': '#574F4D',
        'brown-200': '#403937',
        'brown-500': '#272221',
        'gray-50': '#F3F2F2',
        'gray-100': '#EDEDED',
        'gray-200': '#E6E5E5',
        'gray-500': '#D7D5D5',
        'white-50': '#FFFFFF',
        'white-200': '#FAFAFA',
      },
      fontFamily: {
        baloo: ['Baloo\\ 2', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },

      fontSize: {
        1: '0.625rem',
        2: '0.75rem',
        3: '0.875rem',
        4: '1rem',
        5: '1.125rem',
        6: '1.25rem',
        7: '1.5rem',
        8: '2rem',
        9: '3rem',
      },
      lineHeight: {
        1: '130%',
        2: '160%',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '64px',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
        extra: '800',
      },
    },
  },
  plugins: [],
}
