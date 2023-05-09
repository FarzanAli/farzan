module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                up: {
                    '0%': {transform: 'translate(0%, 0%)', opacity: '1'},
                    '50%': {opacity: '1'},
                    '100%': {transform: 'translate(0%, -100%)', opacity: '0'}
                },
                down: {
                    '0%': {transform: 'translate(0%, 0%)', opacity: '1'},
                    '50%': {opacity: '1'},
                    '100%': {transform: 'translate(0%, 100vh)', opacity: '0'}
                },
            },
            animation: {
                'loadingUp': 'up 0.5s ease-in-out forwards',
                'loadingDown': 'down 0.5s ease-in-out forwards',
            },
            colors: {
                'paradigm': '#26394F',
                'splinterlands': '#ff9f00',
            },
            screens: {
                '3xl': '1600px',
            },
        },
        fontFamily: {
            neuropa: ['Neuropa', 'sans-serif'],
            advert: ['Advert Rough Four Regular', 'sans-serif'],
            title: ['roboto', 'sans-serif']
        }
    },
    plugins: [],
}
