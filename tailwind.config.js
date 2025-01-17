module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    //   animation: {
    //     fadein: 'fade-in 2s ease-in-out 0.25s 1',
    //     fadeout: 'fade-out 2s ease-out 0.25s 1',
    //   },
    //   keyframes: {
    //   "fade-in": {
    //           "0%": {
    //               opacity: 0
    //           },
    //           "100%": {
    //               opacity: 1
    //           },
    //       },
    //       "fade-out": {
    //           "0%": {
    //               opacity: 1
    //           },
    //           "100%": {
    //               opacity: 0
    //           },
    //       },
    // },
    // that is animation class
    animation: {
      fade: 'fadeIn 1s ease-in-out',
    },

    // that is actual animation
    keyframes: theme => ({
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    }),
  }
  },
  plugins: [],
};