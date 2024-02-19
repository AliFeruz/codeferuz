import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenblue': {
          '50': '#eafffe',
          '100': '#cbfffe',
          '200': '#9effff',
          '300': '#5bfcff',
          '400': '#00eeff',
          '500': '#00d1e5',
          '600': '#00a7c0',
          '700': '#03849b',
          '800': '#0d697d',
          '900': '#105769',
          '950': '#033a49',
        },
        'violet': {
          '50': '#eef2ff',
          '100': '#e0e8ff',
          '200': '#c7d3fe',
          '300': '#a6b7fb',
          '400': '#8290f7',
          '500': '#646af0',
          '600': '#5651e5',
          '700': '#4139c9',
          '800': '#3531a2',
          '900': '#302f80',
          '950': '#1d1b4b',
        },            
      }
    },
  },
  plugins: [],
};
export default config;
