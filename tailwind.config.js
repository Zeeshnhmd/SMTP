module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'bookmark-purple': '#10CDD7',
				'bookmark-red': '#fa5959',
				'bookmark-blue': '#242a45',
				'bookmark-grey': '#9194a2',
				'bookmark-white': '#f2f7f7',
			},
		},
		fontFamily: { Montserrat: ['Montserrat, sans-serif'] },
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
	},
	plugins: [],
};
