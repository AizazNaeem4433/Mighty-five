'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function HeroSVG() {
  const pathRef = useRef<SVGPathElement>(null);
  const starRef = useRef<SVGPolygonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const star = starRef.current;
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;
    const features = featuresRef.current;

    if (!path || !star || !heading || !subtitle || !features) return;

    const length = path.getTotalLength();

    // Initial styles
    gsap.set([path, star, subtitle, features], { opacity: 0 });
    gsap.set(heading, { opacity: 0, y: 10 });
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    // GSAP Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.to(heading, {
      opacity: 1,
      y: 0,
      duration: 1.8
    });

    tl.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1.2
    }, "+=0.3");

    tl.to(star, {
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
        start: 0,
        end: 1
      },
      opacity: 1,
      duration: 1.9,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      repeatDelay: 0.5
    }, "-=2.0");

    tl.to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.2");

    // Features section animation
    tl.to(features, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "+=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center gap-0">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-[-6px]"
        >
          Mighty <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-400">Five</span> Agency
        </h1>

        {/* SVG with path + star */}
        <svg
          width="90%"
          height="200"
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-[800px] my-[-30px]"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          <path
            ref={pathRef}
            d="M50,120 C200,30 600,170 750,80"
            stroke="url(#grad)"
            strokeWidth="4"
            fill="none"
          />

          <polygon
            ref={starRef}
            points="0,-8 2.4,-2.4 8,-2.4 4,0.8 5.6,6.4 0,3.2 -5.6,6.4 -4,0.8 -8,-2.4 -2.4,-2.4"
            fill="#fbbf24"
            transform="translate(50,120)"
          />
        </svg>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-600 max-w-xl mt-[-4px] opacity-0"
        >
          Empowering brands through digital presence enhancement — from strategy to stunning delivery.
        </p>
      </section>

      {/* Features Section - Horizontal Row */}
      <section 
        ref={featuresRef} 
        className="w-full py-12 opacity-0 translate-y-10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 flex flex-col items-center">
              <div className="w-12 h-12 mb-3 text-orange-500">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M102.125 172.839C54.7551 235.791 48.0015 293.96 48.0015 358.802" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M102.127 172.839C112.108 211.439 135.434 277.795 135.434 315.781" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M239.518 264.433C213.65 264.433 169.98 298.927 138.209 315.781" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M244.768 263.706C249.159 263.939 253.393 265.447 257.646 266.567" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M240.901 274.147C244.213 274.487 247.407 276.681 250.615 278.311" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M338.919 157.733C340.939 144.264 337.021 134.241 329.704 129.879C320.415 124.341 306.18 126.646 294.174 140.144C234.303 207.45 303.365 267.433 336.284 167.065" stroke="currentColor" strokeOpacity="0.5" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M271.896 228.351C256.447 251.963 241.631 280.024 226.1 303.291" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M190.709 38.6922C194.837 40.2666 196.907 44.8895 195.333 49.0178C193.759 53.146 189.136 55.2163 185.008 53.6419L190.709 38.6922ZM107.484 121.21L99.7221 123.147V123.147L107.484 121.21ZM203.668 55.5181C199.881 53.2421 198.656 48.3271 200.932 44.5402C203.208 40.7532 208.123 39.5283 211.91 41.8043L203.668 55.5181ZM115.246 119.273C123.042 150.508 138.113 163.3 153.165 166.64C168.914 170.135 187.524 163.989 203.183 151.387C218.792 138.824 229.947 121.027 231.726 103.633C233.429 86.9729 226.697 69.3591 203.668 55.5181L211.91 41.8043C239.737 58.5289 250.036 81.8529 247.643 105.26C245.324 127.933 231.255 149.332 213.214 163.852C195.222 178.332 171.755 187.154 149.699 182.26C126.945 177.211 108.485 158.258 99.7221 123.147L115.246 119.273ZM185.008 53.6419C159.208 43.8026 139.858 50.6989 127.879 63.9823C115.47 77.7426 110.234 99.1929 115.246 119.273L99.7221 123.147C93.5165 98.2833 99.7656 71.2655 115.997 53.2671C132.658 34.7918 159.103 26.6385 190.709 38.6922L185.008 53.6419Z" fill="currentColor"/>
                  <path d="M200.539 121.09C201.081 118.803 201.752 118.543 202.334 116.314" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Innovative Edge</h2>
              <p className="text-gray-600">
                Turning challenges into opportunities with cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center p-6 flex flex-col items-center">
              <div className="w-12 h-12 mb-3 text-orange-500">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,14.86l-1.91,1.91L8.18,14.86V3.41a1.91,1.91,0,0,1,3.82,0Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
                  <path d="M12,7.23h6.68v9.54h1a2.87,2.87,0,0,1,0,5.73H1.5V7.23H8.18" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
                  <path d="M22.5,4.36V19.64a2.86,2.86,0,0,0-2.86-2.87h-1V1.5h1A2.86,2.86,0,0,1,22.5,4.36Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
                  <line x1="8.18" y1="5.32" x2="12" y2="5.32" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Quality Commitment</h2>
              <p className="text-gray-600">
                Excellence in execution, from the first draft to the final product.
              </p>
            </div>
            
            <div className="text-center p-6 flex flex-col items-center">
              <div className="w-12 h-12 mb-3 text-orange-500">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6,21V20H4v1a7,7,0,0,0,7,7h3V26H11A5,5,0,0,1,6,21Z" fill="currentColor"/>
                  <path d="M24,11v1h2V11a7,7,0,0,0-7-7H16V6h3A5,5,0,0,1,24,11Z" fill="currentColor"/>
                  <path d="M11,11H5a3,3,0,0,0-3,3v2H4V14a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V14A3,3,0,0,0,11,11Z" fill="currentColor"/>
                  <path d="M8,10A4,4,0,1,0,4,6,4,4,0,0,0,8,10ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z" fill="currentColor"/>
                  <path d="M27,25H21a3,3,0,0,0-3,3v2h2V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V28A3,3,0,0,0,27,25Z" fill="currentColor"/>
                  <path d="M20,20a4,4,0,1,0,4-4A4,4,0,0,0,20,20Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,26,20Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Collaborative Success</h2>
              <p className="text-gray-600">
                We grow when you grow. Partners in your journey to the top.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}