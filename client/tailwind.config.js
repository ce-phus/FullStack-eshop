/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
     // Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: 'class',
   theme: {
     extend: {
       fontFamily: {
         mont: ['var(--font-mont)'],
         mono: ['var(--font-roboto-mono)'],
       },
       colors:{
         dark: "#000000",
         light: "#f5f5f5",
         primary: "#ee7600", // 240,86,199
         primaryDark: "#FFA500", // 80,230,217
         accent: '#5d0076',
       },
       backgroundImage: {
        "hero-pattern": "url('../../public/images/gallery/herobg.png')",
      },
     },
     screens: {
       "2xl": { max: "1535px" },
       // => @media (max-width: 1535px) { ... }
   
       xl: { max: "1279px" },
       // => @media (max-width: 1279px) { ... }
   
       lg: { max: "1023px" },
       // => @media (max-width: 1023px) { ... }
   
       md: { max: "767px" },
       // => @media (max-width: 767px) { ... }
   
       sm: { max: "639px" },
       // => @media (max-width: 639px) { ... }
   
       xs: { max: "479px" },
       // => @media (max-width: 479px) { ... }
   },
   },
   plugins: [],
 }
 
 