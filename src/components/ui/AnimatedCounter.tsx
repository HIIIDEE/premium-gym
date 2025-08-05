"use client";

import React, { useEffect } from "react";
import { useScrollAnimation, useCountUp } from "../../hooks/useScrollAnimation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = "",
  delay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { count, startAnimation } = useCountUp(end, 2000, delay);

  useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <span ref={elementRef} className="text-3xl font-bold text-yellow-400">
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;