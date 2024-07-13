/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spinner-grow': {
          '0%, 100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      screens: {
        'xs': '150px',
        'sm': '480px',
        'lg': '1024px',
        'xl': '1280px',
        'phone': {'max': '450px'},
      },
      animation: {
        'spinner-grow': 'spinner-grow 0.75s linear infinite',
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

