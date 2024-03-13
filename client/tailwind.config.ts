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
			'lgreen': '#53DD6C',
			'lgreen-hover':  '#53C668',
			'white': {
				100: '#ffff',
				80: 'rgba(255, 255, 255, 0.8)',
				60: 'rgba(255, 255, 255, 0.6)',
				40: 'rgba(255, 255, 255, 0.4)',
				20: 'rgba(255, 255, 255, 0.2)',
				10: 'rgba(255, 255, 255, 0.1)',
				5: 'rgba(255, 255, 255, 0.05)',
			},
			'black': {
				100: 'rgba(0, 0, 0)',
				80: 'rgba(0, 0, 0, 0.8)',
				60: 'rgba(0, 0, 0, 0.6)',
				40: 'rgba(0, 0, 0, 0.4)',
				20: 'rgba(0, 0, 0, 0.2)',
				10: 'rgba(0, 0, 0, 0.1)',
				5: 'rgba(0, 0, 0, 0.05)',
			}
		}
    },
  },
  plugins: [],
};
export default config;