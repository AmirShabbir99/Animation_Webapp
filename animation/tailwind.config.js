module.exports = {
  theme: {
    extend: {
      keyframes: {
        moveBox: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(200px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        moveBox: 'moveBox 3s infinite',
      },
    },
  },
}