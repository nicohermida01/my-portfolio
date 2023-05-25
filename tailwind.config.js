/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sansation)']
      },
      colors: {
        'primary': '#6E07F3',
        'secondary': '#5BE9B9',
        'app-bg-dark': '#1D1D1D',
        'topbar-bg-dark': '#181818'
      },
      maxWidth: {
        appMW: '1300px'
      }
    }
  
  },
  plugins: [],
}

