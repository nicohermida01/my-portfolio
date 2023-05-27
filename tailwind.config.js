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
        "app-bg-dark-alt": '#181818',
        'topbar-bg-dark': '#111111',
        'topbar-nav-color-dark': '#666666'
      },
      maxWidth: {
        appMW: '1300px'
      }
    }
  
  },
  plugins: [],
}

