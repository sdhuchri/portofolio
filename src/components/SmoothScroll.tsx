'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
    useEffect(() => {
        // Add smooth scroll behavior
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const parallaxElements = document.querySelectorAll('[data-parallax]');

            parallaxElements.forEach((element) => {
                const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
                const yPos = -(scrolled * speed);
                (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null;
}
