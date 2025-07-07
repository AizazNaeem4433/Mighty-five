'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ShapeSvg() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 2.5,
      ease: 'power2.out',
      repeat: -1,
    });
  }, []);

  return (
    <svg
      width="300"
      height="40"
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      className="-mt-4"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      <path
        ref={pathRef}
        d="M200,120 C300,60 500,140 600,80"
        stroke="url(#grad)"
        strokeWidth="10"
        fill="none"
      />
    </svg>
  );
}
