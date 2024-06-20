/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluegrey: '#49557e', 
        xobin_blue:"#0075FF"
      },
    },
    
  },
  plugins: [],
}