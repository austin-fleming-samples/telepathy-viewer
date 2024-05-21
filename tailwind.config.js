import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				branddark: {
					900: "#191a22",
					800: "#2c2d35",
					700: "#404148",
					600: "#55565d",
					500: "#6b6c72",
					400: "#828388",
					300: "#9a9a9f",
					200: "#b2b3b6",
					100: "#cbccce",
					50: "#e5e5e6",
				},
				brandbright: {
					900: "#bfc6ff",
					800: "#c5ccff",
					700: "#ccd1ff",
					600: "#d2d7ff",
					500: "#d9ddff",
					400: "#dfe3ff",
					300: "#e6e8ff",
					200: "#eceeff",
					100: "#f2f4ff",
					50: "#f9f9ff",
				},
			},
			fontFamily: {
				sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
				mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
			}
		},
	},
	plugins: [],
};
