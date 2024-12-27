/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'reveal': 'reveal 0.5s ease-out',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        'failure-modal': 'failureModal 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'failure-icon': 'failureIcon 1s cubic-bezier(0.36, 0, 0.66, 1)',
        'failure-text': 'failureText 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'failure-text-delay': 'failureText 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
        'failure-buttons': 'failureText 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
        'win-modal': 'winModal 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'win-trophy': 'winTrophy 1s cubic-bezier(0.36, 0, 0.66, 1)',
        'win-star-left': 'winStarLeft 1s cubic-bezier(0.36, 0, 0.66, 1) 0.3s',
        'win-star-right': 'winStarRight 1s cubic-bezier(0.36, 0, 0.66, 1) 0.3s',
        'win-text': 'winText 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'win-text-delay': 'winText 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
        'win-buttons': 'winText 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%': { 
            transform: 'scale(0.8) rotate(-10deg)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1) rotate(0)',
            opacity: '1'
          },
        },
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
        failureModal: {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        failureIcon: {
          '0%': {
            transform: 'scale(0) rotate(-180deg)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1) rotate(0)',
            opacity: '1'
          }
        },
        failureText: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        winModal: {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        winTrophy: {
          '0%': {
            transform: 'scale(0) rotate(-180deg)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1) rotate(0)',
            opacity: '1'
          }
        },
        winStarLeft: {
          '0%': {
            transform: 'translate(-20px, 20px) scale(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '1'
          }
        },
        winStarRight: {
          '0%': {
            transform: 'translate(20px, 20px) scale(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '1'
          }
        },
        winText: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
    },
  },
  plugins: [],
};