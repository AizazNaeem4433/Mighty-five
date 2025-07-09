'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Service } from '@/app/lib/data/services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechStack from '@/app/components/TechStack';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailContent({ service }: { service: Service }) {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  // ✅ Only run animations once DOM is painted
  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.from(bannerRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
      gsap.from(titleRef.current, { opacity: 0, y: 30, duration: 0.8, delay: 0.3, ease: 'back.out(1.7)' });
      gsap.from(introRef.current, { opacity: 0, y: 20, duration: 0.8, delay: 0.5, ease: 'power2.out' });

      const sections = [
        { ref: overviewRef, x: -50 },
        { ref: servicesRef, x: 50 },
        { ref: processRef, y: 50 },
        { ref: ctaRef, y: 30 },
      ];

      sections.forEach((section) => {
        gsap.from(section.ref.current, {
          opacity: 0,
          x: section.x || 0,
          y: section.y || 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section.ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          ease: 'power2.out',
        });
      });

      gsap.utils.toArray('.service-card').forEach((card: any, i) => { // eslint-disable-line
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          ease: 'back.out(1.2)',
        });
      });

      gsap.utils.toArray('.process-step').forEach((step: any, i) => {// eslint-disable-line
        gsap.from(step, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          ease: 'elastic.out(1, 0.5)',
        });
      });
    }, 0);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // ✅ Optional: prevent rendering if data is not loaded
  if (!service) return null;

  return (
    <div className="bg-white">
      {/* Banner */}
      <section
        ref={bannerRef}
        className="relative h-[300px] sm:h-[350px] md:h-[450px] w-full overflow-hidden group"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={service.bannerUrl}
            alt={`${service.title} banner`}
            fill
            className="object-cover object-top md:object-center transition-all duration-700 ease-in-out blur-sm group-hover:blur-none scale-105 group-hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4 md:px-6">
          <h1 ref={titleRef} className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">
            {service.title}
          </h1>
          <p ref={introRef} className="text-sm sm:text-base md:text-lg max-w-2xl drop-shadow opacity-90">
            {service.intro}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Overview */}
        <section ref={overviewRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
            <p className="text-lg text-gray-600">{service.intro}</p>
            <ul className="space-y-3">
              {service.subServices.slice(0, 5).map((s, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">{s.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src={service.detailImgUrl}
              alt={`${service.title} detail`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our {service.title} Services</h2>
            <p className="text-lg text-gray-600">
              Complete range of development services tailored to your business needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.subServices.map((sub, idx) => (
              <div
                key={idx}
                className="service-card group bg-white p-6 rounded-lg border hover:border-orange-300 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center mb-4">
                  <span className="text-orange-600 text-2xl font-bold mr-3">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                    {sub.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{sub.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section ref={processRef} className="py-14 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Development Process</h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto px-2">
            {service.processSteps.map((step, index) => (
              <div
                key={index}
                className="process-step relative bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500 flex flex-col items-center text-center w-full max-w-xs"
              >
                <div className="absolute -top-5 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <TechStack tools={service.tools} />

        {/* CTA */}
        <section ref={ctaRef} className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your {service.title} Project Today</h2>
          <p className="text-lg text-gray-600 mb-6">{service.closing}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition shadow hover:shadow-lg">
              Get Free Consultation
            </Link>
            <Link href="/services" className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
              View All Services
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
