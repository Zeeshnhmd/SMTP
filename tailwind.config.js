module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'backg-light': 'FBFBFE',
				'backg-dark': '#161927',
				'backg-white': '#F1F2F3',
				't-light': '#F1F2F3',
				't-dark': '#232429',
				'contact-light': '#EEF0FC',
				'contact-dark': '#1D2135 ',
				'bookmark-purple': '#576EE0',
				'bookmark-white': '#f7f7f7',
			},
		},
		fontFamily: {
			Montserrat: ['Montserrat Alternates, sans-serif'],
		},
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
