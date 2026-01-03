'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    yOffset?: number; // Jarak pergeseran awal (default 50px)
    triggerTrigger?: number; // Titik mulai (0-1, default 0.9 = 90% view height)
    triggerComplete?: number; // Titik selesai (0-1, default 0.6 = 60% view height)
}

export default function ScrollReveal({
    children,
    className = '',
    yOffset = 80,
    triggerTrigger = 0.95, // Mulai animasi saat elemen masuk 95% dari bawah layar
    triggerComplete = 0.65 // Selesai animasi saat elemen ada di 65% layar
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const updateAnimation = () => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const startY = windowHeight * triggerTrigger;
            const endY = windowHeight * triggerComplete;

            // Hitung progress 0 sampai 1
            // 0 = belum mulai (masih di bawah)
            // 1 = selesai (sudah di posisi target)
            let progress = (startY - rect.top) / (startY - endY);
            progress = Math.max(0, Math.min(1, progress));

            // Terapkan easing function agar lebih natural (Cubic ease-out)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            element.style.opacity = progress.toString();
            // Parallax effect: Elemen bergerak dari bawah (yOffset) ke 0
            element.style.transform = `translateY(${(1 - easeProgress) * yOffset}px)`;

            // Optional: Tambahkan scale effect sedikit
            const scale = 0.95 + (0.05 * easeProgress);
            element.style.transform += ` scale(${scale})`;
        };

        window.addEventListener('scroll', updateAnimation, { passive: true });
        window.addEventListener('resize', updateAnimation); // Handle resize

        // Initial check
        updateAnimation();

        return () => {
            window.removeEventListener('scroll', updateAnimation);
            window.removeEventListener('resize', updateAnimation);
        };
    }, [yOffset, triggerTrigger, triggerComplete]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                willChange: 'opacity, transform',
                transform: `translateY(${yOffset}px) scale(0.95)`
            }}
        >
            {children}
        </div>
    );
}
