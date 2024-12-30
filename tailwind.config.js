/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            tablet: '768px',
            // Tablet => @media (min-width: 768px) { ... }

            laptop: '992px',
            // Tablet or laptop => @media (min-width: 992px) { ... }

            desktop: '1200px',
            // Desktop or larger => @media (min-width: 1200px) { ... }
        },
        extend: {},
    },
    plugins: [],
};
