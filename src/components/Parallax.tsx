'use client';

import { motion, useScroll, useTransform, useSpring, MotionValue, useMotionValue } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
  z = 0,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  z?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [200 * speed, -200 * speed]);
  const ySmooth = useSpring(y, { stiffness: 80, damping: 20, mass: 0.5 });

  return (
    <motion.div
      ref={ref}
      style={{ y: ySmooth, transform: `translateZ(${z}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className = '',
  intensity = 12,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * intensity);
    rotateX.set(-y * intensity);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MouseParallax({
  children,
  strength = 20,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 50, damping: 20 });
  const sy = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set(((e.clientX - cx) / cx) * strength);
      y.set(((e.clientY - cy) / cy) * strength);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [x, y, strength]);

  return (
    <motion.div style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    />
  );
}
