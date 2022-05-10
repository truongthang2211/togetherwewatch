module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        sm: "1rem",
        xl: "4rem",
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
        fadeUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typing: {
          "0%, 100%": {
            transform: "scale(0.8)",
            "background-color": "#94a3b8",
          },
          "50%": { transform: "scale(1.2)", "background-color": "#86EFAC" },
        },
      },
      animation: {
        fadeDown: "1s ease-out 0s 1 fadeDown forwards",
        fadeUp: "0.5s ease-out 0s 1 fadeUp forwards",
        fade: "1s ease-out 0s 1 fade forwards",
        typing: "typing 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
