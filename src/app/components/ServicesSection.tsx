'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@/styles/rotatingServices.css';

const services = [
  {
    title: 'Web Development',
    description: 'Fast, scalable, SEO-friendly websites.',
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile applications.',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines.',
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your audience and brand.',
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, modern, and user-friendly design.',
  },
  {
    title: 'Automation & Robotics',
    description: 'Optimize with smart systems.',
  },
];

export default function RotatingServices() {
  const quantity = services.length;
  const innerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const angleRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const rotate = () => {
      if (innerRef.current && isRotating) {
        angleRef.current += 0.3;
        innerRef.current.style.transform = `rotateX(-10deg) rotateY(${angleRef.current}deg)`;
      }
      animationFrame = requestAnimationFrame(rotate);
    };

    animationFrame = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isRotating]);

  const getClientX = (e: React.PointerEvent | React.TouchEvent): number => {
    if ('touches' in e) return e.touches[0].clientX;
    return (e as unknown as PointerEvent).clientX;
  };

  const handleStart = (e: React.PointerEvent | React.TouchEvent) => {
    draggingRef.current = true;
    startXRef.current = getClientX(e);
    setIsRotating(false);
  };

  const handleMove = (e: React.PointerEvent | React.TouchEvent) => {
    if (!draggingRef.current || !innerRef.current) return;
    const currentX = getClientX(e);
    const delta = currentX - startXRef.current;
    startXRef.current = currentX;
    angleRef.current += delta * 0.5;
    innerRef.current.style.transform = `rotateX(-10deg) rotateY(${angleRef.current}deg)`;
  };

  const handleEnd = () => {
    draggingRef.current = false;
    setIsRotating(true);
  };

  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-4xl font-extrabold mb-14 text-gray-900">
        Our Services
      </h2>

      <div
        className="wrapper"
        onMouseEnter={() => setIsRotating(false)}
        onMouseLeave={() => setIsRotating(true)}
        onPointerDown={handleStart}
        onPointerMove={handleMove}
        onPointerUp={handleEnd}
        onPointerLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          ref={innerRef}
          className="inner"
          style={{ ['--quantity' as any]: quantity }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              style={{ ['--index' as any]: index }}
            >
              <div className="bg-gray-900 text-white h-full w-full p-4 flex flex-col items-center justify-center text-center rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <div className="h-[1px] w-8 bg-white/60 mx-auto" />
                <p className="text-sm opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
