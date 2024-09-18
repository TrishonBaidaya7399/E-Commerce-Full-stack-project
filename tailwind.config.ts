import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          dark: "#27ac1f",
          light: "#27ac1f1a",
        },
        orange: {
          dark: "#ef7817",
          light: "#ffb80026",
        },
        blue: {
          dark: "#3e5de6",
          light: "rgba(53, 91, 251, 0.1)",
        },
        red: {
          dark: "#f34141",
          light: "#f341411a",
        },
        gray: {
          dark: "#546a7e",
          light: "#dddddd",
        },
        bgColor: {
          dark: "#eeecec",
          light: "#f5f5f5",
        },
        borderColor: {
          dark: "#546a7e4d",
          light: "#0000001a",
        },
        lightSkyBlue: {
          light: "#00d7c41a",
        },
        blueColor: {
          dark: "#00d7c4",
          light: "rgba(0, 215, 196, 0.1)",
        },
        yellow: {
          dark: "#ffb800",
          light: "#ffb80024",
        },
        black: "#0b2a46",
        whiteColor: "#ffffff",
        facebook_color: "#1877f2",
        gitHub_color: "#333",
        linkedin_color: "#0a66c2",
        twitter_color: "#14171a",
        instagram_color: "#e1306c",
        middle_border_color: "#eeeeee",
        sidebar_bg: "#0e200d",
        lightGreen: "#00c177",
        purple: "#4b56c0",
        line_color: "#dfdddd",
        textGray: "#565b65",
        leftMenuBar: "#0e200d",
        placeholder_color: "#636363",
        shadow_color: "rgba(0, 0, 0, 0.36)",
        divider_color: "#bfbfbf",
      },
    },
  },
  plugins: [],
};

export default config;
