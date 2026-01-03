'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved theme preference, otherwise default to Light Mode
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            // Default to Light
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100/80 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-all transform hover:rotate-12"
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <span className="material-symbols-outlined text-gray-700 dark:text-white">
                {isDark ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
    );
}
