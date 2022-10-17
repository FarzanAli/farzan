module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
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
