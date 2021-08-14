const colors = require('tailwindcss/colors')
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				cyan: colors.cyan,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
}
