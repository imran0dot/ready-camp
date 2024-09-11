/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004AAD",
        secondary: "#e2e8f0",
        green: "#82A821"
      }
    },
  },
  plugins: [],
})
