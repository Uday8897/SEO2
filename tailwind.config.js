/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Specify where Tailwind should look for class names
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: '#0B1121',
        navy2:"#0B1122", // Custom dark background color
        xoraBlue: '#1F82E3', // Xora logo blue color
        xoraTeal: '#30D1C6', // Secondary Xora teal color
        accentYellow: '#DAF700', // Accent yellow for highlighted text
        white: '#FFFFFF', // Standard white color
      },
    },
  },
  plugins: [], // No additional plugins at the moment
}
