'use client';

const THEME_KEY = 'sd-theme';

export default function ThemeToggle() {
    const applyTheme = (t: 'light' | 'dark') => {
        const root = document.documentElement;
        root.setAttribute('data-theme', t);
        root.classList.toggle('dark', t === 'dark');
        try {
            localStorage.setItem(THEME_KEY, t);
        } catch {
            /* storage unavailable */
        }
    };

    const toggleTheme = () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            className="icon-btn theme-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            title="Toggle light / dark"
        >
            <svg
                className="sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
            <svg
                className="moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
        </button>
    );
}
