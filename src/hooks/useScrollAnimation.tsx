// src/hooks/useScrollAnimation.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [threshold]);

  return { elementRef, isVisible };
};

export const useCountUp = (end: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number>();

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startCount = () => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Effet d'easing (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(startCount, delay);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, delay, hasStarted]);

  return { count, startAnimation, hasStarted };
};

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?:
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "slideInDown";
  duration?: number;
}

export const ScrollAnimationWrapper = ({
  children,
  className = "",
  animationType = "fadeInUp",
  duration = 700,
}: ScrollAnimationWrapperProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClasses = {
    fadeInUp: "translate-y-10 opacity-0",
    fadeInLeft: "-translate-x-10 opacity-0",
    fadeInRight: "translate-x-10 opacity-0",
    scaleIn: "scale-90 opacity-0",
    slideInDown: "-translate-y-10 opacity-0",
  };

  const visibleClasses = {
    fadeInUp: "translate-y-0 opacity-100",
    fadeInLeft: "translate-x-0 opacity-100",
    fadeInRight: "translate-x-0 opacity-100",
    scaleIn: "scale-100 opacity-100",
    slideInDown: "translate-y-0 opacity-100",
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ease-out ${
        isVisible
          ? visibleClasses[animationType]
          : animationClasses[animationType]
      } ${className}`}
    >
      {children}
    </div>
  );
};