module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        // Neutral
        grayishBlue: 'hsl(233, 8%, 62%)',
        lightGrayishBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
    screens: {
      sm: '376px',
      // => @media (min-width: 375px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      
    },
  },
  plugins: [],
}
