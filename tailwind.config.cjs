const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./*.{html,js}',"./src/**/*.{html,js}"],
	theme: {
		colors: {
			darkSteelBlue: '#313b44',
			steelBlue: '#6a8b9a',
			lightBlue: '#74c8d0',
			thickBlue: '#588DA8',
			paleWhite: '#eeeeee',
			gray: colors.gray,
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
