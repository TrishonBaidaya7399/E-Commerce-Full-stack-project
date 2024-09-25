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
          dark: "var(--primary-dark)",
          light: "var(--primary-light)",
        },
        orange: {
          dark: "var(--orange-dark)",
          light: "var(--orange-light)",
        },
        blue: {
          dark: "var(--blue-dark)",
          light: "var(--blue-light)",
        },
        red: {
          dark: "var(--red-dark)",
          light: "var(--red-light)",
        },
        gray: {
          dark: "var(--gray-dark)",
          light: "var(--gray-light)",
        },
        bgColor: {
          dark: "var(--bgColor-dark)",
          light: "var(--bgColor-light)",
        },
        borderColor: {
          dark: "var(--borderColor-dark)",
          light: "var(--borderColor-light)",
        },
        lightSkyBlue: {
          light: "var(--lightSkyBlue-light)",
        },
        blueColor: {
          dark: "var(--blueColor-dark)",
          light: "var(--blueColor-light)",
        },
        yellow: {
          dark: "var(--yellow-dark)",
          light: "var(--yellow-light)",
        },
        black: "var(--black)",
        whiteColor: "var(--whiteColor)",
        facebook_color: "var(--facebook-color)",
        gitHub_color: "var(--gitHub-color)",
        linkedin_color: "var(--linkedin-color)",
        twitter_color: "var(--twitter-color)",
        instagram_color: "var(--instagram-color)",
        middle_border_color: "var(--middle-border-color)",
        sidebar_bg: "var(--sidebar-bg)",
        lightGreen: "var(--lightGreen)",
        purple: "var(--purple)",
        line_color: "var(--line-color)",
        textGray: "var(--textGray)",
        leftMenuBar: "var(--leftMenuBar)",
        placeholder_color: "var(--placeholder-color)",
        shadow_color: "var(--shadow-color)",
        divider_color: "var(--divider-color)",
      },
    },
  },
  plugins: [],
};

export default config;
