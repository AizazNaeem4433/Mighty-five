'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyPartnerSection() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const founderRef = useRef(null);
  const bannerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(paraRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from(founderRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(bannerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 90%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text Content */}
      <div>
        <p className="text-sm font-semibold text-green-500 uppercase mb-2">Why Choose Us</p>

        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Why{' '}
          <span className="relative inline-block underline underline-offset-4 decoration-green-400">
            Partner
          </span>{' '}
          with Us?
        </h2>
        <div ref={paraRef}>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We&apos;re all about making your digital ideas come true in the most awesome way possible. We
            believe in keeping things straightforward, effective, and totally in tune with what you
            need.
          </p>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Choosing <strong>Mighty Five</strong> means choosing a partner who&apos;s invested in your
            success every step of the way. Let&apos;s join forces and create something extraordinary!
          </p>
        </div>

        {/* Founder */}
        <div ref={founderRef} className="flex items-center mt-6">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
            <Image
              src="/image.png"
              alt="Muhammad Khalid"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">Muhammad Khalid</p>
            <p className="text-sm text-gray-500">CEO &amp; Founder</p>
          </div>
        </div>
      </div>

      {/* Right: Image with floating card */}
      <div className="relative">
        <div
          ref={imageRef}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/image.png"
            alt="Team Celebration"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Floating Feature Banner */}
        <div
          ref={bannerRef}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-[95%] md:max-w-[90%] bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 sm:px-6 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 z-10"
        >
          {[
            { icon: '📌', label: 'Your Goals, Our Blueprint' },
            { icon: '⚙️', label: 'Simplicity & Innovation' },
            { icon: '🔁', label: 'Reliable and Responsive' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 text-center justify-center"
            >
              <div className="bg-orange-100 p-2 sm:p-3 rounded-full text-lg sm:text-xl">
                {item.icon}
              </div>
              <p className="font-medium text-gray-800 text-xs sm:text-sm md:text-base max-w-[120px] leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
