/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                gruvbox: {
                    "primary": "#d65d0e",
                    "secondary": "#ebdbb2",
                    "accent": "#b16286",
                    "neutral": "#3c3836",
                    "base-100": "#282828",
                    "info": "#458588",
                    "success": "#98971a",
                    "warning": "#fabd2f",
                    "error": "#fb4934",
                },
            },
        ],
    },
};