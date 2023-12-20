/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "hsl( 322, 100%, 66% )",
        veryPaleCyan: "hsl( 193, 100%, 96% )",
        veryDarkCyan: "hsl( 192, 100%, 9% )",
        grayishBlue: "hsl( 208, 11%, 55% )"
      },
      fontFamily: {
        poppins: [ 'Poppins', 'sans-serif'],
        openSans: [ 'Open Sans', 'sans-serif' ]
      },
      fontWeight: {
        regular: "400",
        semiBold: "600",
        bold: "700",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

