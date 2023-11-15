import type { Config } from "tailwindcss";

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
      primary: "#EA792B",
      secondary: "#54595F",
      text: "#7A7A7A",
      accent: "#55AECC",
      dark: "#252525",
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
      },
      animation: {
        "slide-in-from-left": "slide-in-from-left 1s ease-in-out",
        "slide-in-from-right": "slide-in-from-right 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
