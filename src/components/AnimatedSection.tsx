'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
    delay?: number;
    threshold?: number;
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'fade-in-up',
    delay = 0,
    threshold = 0.2, // Default threshold lebih tinggi sedikit agar tidak trigger terlalu awal
}: AnimatedSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px', // Trigger sedikit sebelum elemen penuh terlihat
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={sectionRef}
            className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
        >
            {children}
        </div>
    );
}
