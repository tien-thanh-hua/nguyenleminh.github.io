/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "commodore-bg": "#A0A0FF",
      "commodore-fg": "#4040E0"
      },
      keyframes: {
        blink: {
          '0%': {opacity: 0},
          '50%': {opacity: 0},
          '51%': {opacity: 100},
          '100%': {opacity: 100}
        }
      },
      animation: {
        'blink': 'blink 1s linear infinite'
      }
    },
  },
  plugins: [],
}

