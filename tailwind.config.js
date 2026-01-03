/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1e3a8a",
                "primary-hover": "#172554",
                "background-light": "#f8fafc",
                "background-dark": "#0f172a",
                "card-light": "#ffffff",
                "card-dark": "#1e293b",
                "text-light": "#334155",
                "text-dark": "#e2e8f0",
                "accent-light": "#cbd5e1",
                "accent-dark": "#475569",
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            animation: {
                'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                'fade-in': 'fadeIn 1.2s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(60px) scale(0.95)',
                        filter: 'blur(10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)',
                        filter: 'blur(0px)',
                    },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                slideInLeft: {
                    'from': {
                        opacity: '0',
                        transform: 'translateX(-50px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                slideInRight: {
                    'from': {
                        opacity: '0',
                        transform: 'translateX(50px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateX(0)',
                    },
                },
                scaleIn: {
                    'from': {
                        opacity: '0',
                        transform: 'scale(0.9)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
};
