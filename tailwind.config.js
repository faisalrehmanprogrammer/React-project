/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {


      fontFamily: {
        Nunito: ["Nunito Sans", " sans-serif"]



      },
        
       
        animation: {
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {

        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

    },
  },
  plugins: [],
}

