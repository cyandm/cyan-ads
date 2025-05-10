/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.php", "./assets/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      mm: "425px",
      mb: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xlg": "1080px",
      xl: "1280px",
      "2xl": "1440px",
    },

    extend: {
      keyframes: {
        moveCloudShort: {
          "0%": { transform: "translateX(30%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(30%)" },
        },
        moveCloudLong: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(40%)" },
          "100%": { transform: "translateX(0%)" },
        },
        leftToRight: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(15%)" },
          "100%": { transform: "translateX(0%)" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-15%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        moveCloudShort: "moveCloudShort 10s linear infinite",
        moveCloudLong: "moveCloudLong 12s linear infinite",
        leftToRight: "leftToRight 1.5s linear infinite",
        rightToLeft: "rightToLeft 1.5s linear infinite",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
};
