'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <Link
                    href="#home"
                    className="font-display font-bold text-xl tracking-tight text-primary dark:text-white flex items-center gap-2 hover:scale-105 transition-transform"
                >
                    <span className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400 animate-pulse-glow"></span>
                    SD.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300 items-center">
                    <Link href="#about" className="hover:text-primary dark:hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="#skills" className="hover:text-primary dark:hover:text-white transition-colors">
                        Skills
                    </Link>
                    <Link href="#projects" className="hover:text-primary dark:hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="#experience" className="hover:text-primary dark:hover:text-white transition-colors">
                        Experience
                    </Link>
                    <ThemeToggle />
                    <Link
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-hover transition-all shadow-sm shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined text-gray-700 dark:text-white">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
                    <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                        <Link
                            href="#about"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="#skills"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Skills
                        </Link>
                        <Link
                            href="#projects"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            href="#experience"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Experience
                        </Link>
                        <Link
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-hover transition-all text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
