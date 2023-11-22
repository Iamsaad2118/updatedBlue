import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      primary: "var(--primary-color, #EA792B)",
      secondary: "var(--secondary-color, #54595F)",
      text: "var(--text-color, #7A7A7A)",
      accent: "var(--accent-color, #55AECC)",
      dark: "var(--dark-color, #252525)",
      gray: {
        DEFAULT: "#5F5F5F",
        50: "#F5F5F5",
        100: "#F0F0F0",
        200: "#EBEBEB",
        300: "#D9D9D9",
        500: "#919191",
        600: "#5F5F5F",
        800: "#353535",
        900: "#090909",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slide-in-from-left": {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0%" },
          "100%": { transform: "translateX(0%)", opacity: "100%" },
        },
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "80%" },
        },
        "fade-out": {
          "0%": { opacity: "80%" },
          "100%": { opacity: "0%" },
        },
        "zoom-in": {
          "0%": { transform: "translateX(-50%) translateY(-50%) scale(0.5)" },
          "100%": { transform: "translateX(-50%) translateY(-50%) scale(1)" },
        },
        "zoom-out": {
          "0%": { transform: "translateX(-50%) translateY(-50%) scale(1)" },
          "100%": {
            transform: "translateX(-50%) translateY(-50%) scale(0.5)",
          },
        },
        "grow-and-shrink": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        snail: {
          "0%": { transform: "translateX(200%) scaleX(-1)", opacity: "0%" },
          "100%": { transform: "translateX(0) scaleX(-1)", opacity: "100%" },
        },
      },
      animation: {
        "slide-in-from-left": "slide-in-from-left 1s ease-in-out",
        "slide-in-from-right": "slide-in-from-right 1s ease-in-out",
        "slide-in-from-bottom": "slide-in-from-bottom 1s ease-in-out",
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out",
        "zoom-in": "zoom-in 0.7s ease-in-out",
        "zoom-out": "zoom-out 0.5s ease-in-out",
        "grow-and-shrink": "grow-and-shrink 2s infinite ease-in-out",
        snail: "snail 2s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
export default config;
