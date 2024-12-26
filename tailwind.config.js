/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./project/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["inter", "sans-serif"]
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2.5px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSlow: {
          '0%': { transform: 'scale(0.9)', opacity: 1 },
          '50%': { transform: 'scale(1.1)', opacity: 0.8 },
          '100%': { transform: 'scale(0.9)', opacity: 1 },
        },
      },
      animation: {
        bounceY: 'bounceY 2s infinite ease-in-out',
        "spin-slow": 'spinSlow 6s linear infinite',
        "pulse-slow": 'pulseSlow 2.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

