module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        default: "1rem",
        sm: "2rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        "main-green": "#86EFAC",
        "main-red": "#F87171",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeDown: "1s ease-out 0s 1 fadeDown forwards",
        fade: "1s ease-out 0s 1 fade forwards",
      },
    },
  },
  plugins: [],
};
