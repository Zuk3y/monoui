module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'h-[100px]',
    'h-[200px]',
    'h-[300px]',
    'h-[400px]',
    'h-[500px]',
    'h-[600px]',
    'h-[700px]',
    'h-[800px]',
    'h-[900px]',
    'h-[1000px]',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        margin: 'margin',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('postcss')],
};
