'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function FontLoader() {
    useEffect(() => {
        // Ensure Material Symbols font is loaded
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap';
        document.head.appendChild(link);
    }, []);

    return null;
}
