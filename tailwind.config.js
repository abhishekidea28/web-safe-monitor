/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",  


  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: '#014CC3',
        secondary:'#4288F5',
        primaryHover: 'rgba(1, 76, 195, 0.7)',
        lightPrimary:'#E5EFFF',
        background: '#F4F4F4',  // Background color
      },
    },
  },
  plugins: [],
};
