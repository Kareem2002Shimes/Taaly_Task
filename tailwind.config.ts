import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E00B9',
        'base-color': '#E9E6F8',
        heading: '#04001A',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
