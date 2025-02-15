import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'almost-black': '#212121',
        'custom-black': '#181818',
        'card-button': 'rgb(40, 40, 40)',
        'button-card': 'rgb(60, 60, 60)',
        'button-header': 'rgb(60, 60, 60)',
        'custom-green': '#10B981',
        'custom-yellow': '#F59E0B',
      },
      fontFamily: {
        alfa: ["Alfa Slab One", "cursive"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
} satisfies Config;
