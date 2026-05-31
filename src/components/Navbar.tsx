'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const progRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 24);
            const prog = progRef.current;
            if (prog) {
                const h = document.documentElement.scrollHeight - window.innerHeight;
                prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className="scroll-prog" ref={progRef} />

            <header className={`nav${isScrolled ? ' scrolled' : ''}`}>
                <a href="#home" className="brand">
                    <span className="mark">sd</span>
                    <span>Suryana Dhuchri</span>
                    <span className="dot" />
                </a>
                <nav className="nav-links">
                    <a href="#about">about</a>
                    <a href="#experience">experience</a>
                    <a href="#work">work</a>
                    <a href="#toolkit">toolkit</a>
                    <a href="#contact">contact</a>
                </nav>
                <div className="nav-right">
                    <ThemeToggle />
                    <a href="#contact" className="nav-cta">
                        <span>Let&apos;s talk</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                </div>
            </header>
        </>
    );
}
