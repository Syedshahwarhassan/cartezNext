import { content as _content, plugin } from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/flowbite-react/lib/**/*.{js,ts,jsx,tsx,mdx}",
  _content(),
];
export const theme = {
  extend: {
    height: {
      '500': '600px',
      '1000':'1000px',
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      'Delight': "#aba944",
      "trans": "#00000033"
    },
    
  },
  screens: {
    'mobile':'580px',
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1300px',
    // => @media (min-width: 1280px) { ... }
  },
  colors: {
    'Delight': "#aba944",
    "trans": "#00000033"
  },
  
};
export const plugins = [
  plugin(),
];
