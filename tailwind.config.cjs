module.exports = {
	content: [
		"./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
		"./public/scripts/**/*.js",
	],
	theme: {
		fontFamily: {
			display: ['"IBM Plex Sans"'],
			body: ['"IBM Plex Sans"'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2ECC71",
					50: "#C1F1D5",
					100: "#B0EDCA",
					200: "#8FE6B4",
					300: "#6DDE9D",
					400: "#4CD787",
					500: "#2ECC71",
					600: "#249E58",
					700: "#19703E",
					800: "#0F4325",
					900: "#05150C",
				},
				black: {
					DEFAULT: "#181B1B",
				},
			},
		},
	},
	plugins: [],
};
