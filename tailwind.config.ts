import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn 0.6s ease-in-out", // Define the "slide-in" animation
        "slide-out": "slideOut 0.6s ease-in-out", // Define the "slide-out" animation
      },
      colors: {
        primary: "#1a2a48",
        secondary: "#aaa587",
        "box-dropdown": "#6b7485",
      },
    },
  },
  plugins: [],
};
export default config;
