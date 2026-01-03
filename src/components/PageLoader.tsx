'use client';

import { useEffect, useState } from 'react';

interface PageLoaderProps {
    onLoadingComplete?: () => void;
}

export default function PageLoader({ onLoadingComplete }: PageLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['Design.', 'Build.', 'Deliver.'];

    useEffect(() => {
        // Cycle through words every 1.5 seconds, but don't loop
        const wordInterval = setInterval(() => {
            setCurrentWord((prev) => {
                if (prev < words.length - 1) {
                    return prev + 1;
                }
                return prev; // Stay on last word
            });
        }, 1500);

        // Hide loader after 4.5 seconds
        const hideTimer = setTimeout(() => {
            setIsLoading(false);
            // Notify parent that loading is complete
            if (onLoadingComplete) {
                onLoadingComplete();
            }
        }, 4500);

        return () => {
            clearInterval(wordInterval);
            clearTimeout(hideTimer);
        };
    }, [onLoadingComplete]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 loader-container">
            <div className="text-center">
                <div className="relative h-32 flex items-center justify-center">
                    {words.map((word, index) => (
                        <h1
                            key={word}
                            className={`absolute font-display text-5xl md:text-7xl font-bold text-white transition-all duration-700 ${currentWord === index
                                ? 'opacity-100 scale-100 translate-y-0'
                                : 'opacity-0 scale-90 -translate-y-2'
                                }`}
                        >
                            {word}
                        </h1>
                    ))}
                </div>

                {/* Animated underline */}
                <div className="mt-8 flex justify-center">
                    <div className="w-80 h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full animate-loader-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
