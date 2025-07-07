//src/app/components/AboutPreview.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const readMoreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 60, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            scrub: false,
          },
        }
      );

      // Text fade in
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image slide & rotate
      gsap.fromTo(
        imageRef.current,
        { x: 100, rotate: 4, skewY: 6, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          skewY: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current?.children ?? [],
        {
          y: 50,
          scale: 0.9,
          opacity: 0,
          rotateX: 8,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Read More Button animation
      gsap.fromTo(
        readMoreRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: readMoreRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-20">
      {/* Intro Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-extrabold mb-6">
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-400">
            Mighty Five
          </span>{' '}
          Agency
        </h1>
      </section>

      {/* Mission & Image */}
      <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Mighty Five, our mission is to deliver purposeful and transformative digital solutions that
            inspire and elevate businesses. We aim to bridge creativity and code to build seamless experiences.
          </p>

          {/* ✅ Read More Button */}
          <div ref={readMoreRef}>
            <Link href="/about">
              <button className="mt-6 inline-block bg-gradient-to-r from-green-500 to-orange-400 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:scale-105">
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div ref={imageRef} className="rounded-lg overflow-hidden shadow-xl shine-effect">
          <Image
            src="/5471.jpg"
            alt="Our Mission"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Core Values
        </h2>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              title: 'Creativity',
              desc: 'Pushing the limits of innovation and expression through visuals and experiences.',
            },
            {
              title: 'Collaboration',
              desc: 'We work closely with clients as partners to craft effective digital products.',
            },
            {
              title: 'Excellence',
              desc: 'From design to delivery, we’re committed to quality in everything we do.',
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="p-6 shadow-md rounded-md border hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
