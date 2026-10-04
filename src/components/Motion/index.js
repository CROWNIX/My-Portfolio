import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import './motion.css';

const MotionContext = createContext({ reducedMotion: false, activeSection: 'about', scrolled: false });
export const useMotion = () => useContext(MotionContext);

export function MotionProvider({ children }) {
    const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const [navigation, setNavigation] = useState({ activeSection: 'about', scrolled: false });
    const progress = useRef(null);

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReducedMotion(media.matches);
        media.addEventListener('change', update);
        return () => media.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        let frame = 0;
        const sections = ['about', 'skills', 'experience', 'projects'].map(id => document.getElementById(id));
        const update = () => {
            frame = 0;
            const distance = document.documentElement.scrollHeight - window.innerHeight;
            progress.current.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
            let activeSection = 'about';
            sections.forEach(section => {
                if (section && section.getBoundingClientRect().top <= 180) activeSection = section.id;
            });
            const scrolled = window.scrollY > 24;
            setNavigation(previous => previous.activeSection === activeSection && previous.scrolled === scrolled
                ? previous : { activeSection, scrolled });
        };
        const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
        const resize = new ResizeObserver(schedule);
        resize.observe(document.body);
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        update();
        return () => {
            cancelAnimationFrame(frame);
            resize.disconnect();
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
        };
    }, []);

    return (
        <MotionContext.Provider value={{ reducedMotion, ...navigation }}>
            <div ref={progress} className="scroll-progress" aria-hidden="true" />
            {children}
        </MotionContext.Provider>
    );
}

// Animate the existing element so grid, flex, and timeline layouts stay intact.
export function Reveal({ as: Element = 'div', delay = 0, tilt = false, className = '', children, style, ...props }) {
    const ref = useRef(null);
    const frame = useRef(0);
    const { reducedMotion } = useMotion();

    useEffect(() => {
        const element = ref.current;
        if (reducedMotion || !('IntersectionObserver' in window)) {
            element.classList.remove('reveal-pending');
            return;
        }
        element.classList.add('reveal-pending');
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                element.classList.remove('reveal-pending');
                element.classList.add('is-revealed');
                observer.disconnect();
            }
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
        observer.observe(element);
        return () => observer.disconnect();
    }, [reducedMotion]);

    useEffect(() => () => cancelAnimationFrame(frame.current), []);

    const reset = () => {
        cancelAnimationFrame(frame.current);
        if (!ref.current) return;
        ref.current.style.removeProperty('--tilt-x');
        ref.current.style.removeProperty('--tilt-y');
    };
    useEffect(() => {
        if (reducedMotion) reset();
    }, [reducedMotion]);

    const trackPointer = event => {
        if (!tilt || reducedMotion || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        const { clientX, clientY } = event;
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
            const element = ref.current;
            const rect = element.getBoundingClientRect();
            const x = (clientX - rect.left) / rect.width;
            const y = (clientY - rect.top) / rect.height;
            element.style.setProperty('--pointer-x', `${x * 100}%`);
            element.style.setProperty('--pointer-y', `${y * 100}%`);
            element.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
            element.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
        });
    };

    return (
        <Element ref={ref} className={`motion-reveal ${tilt ? 'motion-card' : ''} ${className}`}
            style={{ '--reveal-delay': `${delay}ms`, ...style }}
            onPointerMove={trackPointer} onPointerLeave={reset} onPointerCancel={reset} {...props}>
            {children}
        </Element>
    );
}
