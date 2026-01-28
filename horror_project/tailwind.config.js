/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"Creepster"', 'system-ui'],
                serif: ['"Roboto Slab"', 'serif'],
                mono: ['monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
