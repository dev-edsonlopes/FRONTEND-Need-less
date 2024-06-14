import { colors } from "./src/styles/colors";
import { fontFamily } from "./src/styles/fontFamily";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: fontFamily,
    },
  },
  plugins: [],
};
