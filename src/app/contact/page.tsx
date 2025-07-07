'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShapeSvg from '../components/ShapeSvg';
import { SocialIcon } from 'react-social-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLUListElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(bannerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(contactSectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: contactSectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, textarea');
      gsap.from(inputs, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (infoRef.current) {
      const items = infoRef.current.querySelectorAll('li');
      gsap.from(items, {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }

    if (socialIconsRef.current) {
      const icons = socialIconsRef.current.querySelectorAll('a');
      gsap.from(icons, {
        opacity: 0,
        scale: 0.5,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok) throw new Error(responseData.error || 'Failed to send message');

      toast.success(responseData.message || 'Message sent successfully!');
      formRef.current?.reset();

      gsap.fromTo(
        '.submit',
        { backgroundColor: '#4f46e5' },
        { backgroundColor: '#10b981', duration: 0.5, yoyo: true, repeat: 1 }
      );
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong. Please try again.');

      gsap.fromTo(
        '.submit',
        { x: 0 },
        { x: [-5, 5, -5, 5, 0], duration: 0.5, ease: 'power1.inOut' }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Responsive Banner Image */}
      <div ref={bannerRef} className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/26985665_v873-bb-14.jpg"
          alt="Contact Banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-20 flex flex-col items-center justify-center px-4 text-center">
          <div className="text-white mb-2 text-sm font-light">
            <Link href="/" className="underline hover:text-blue-300">Home</Link>
            <span className="mx-1">{'>'}</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <section ref={contactSectionRef} className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="relative bg-gray-50 p-8 rounded-xl shadow-xl overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-[-4px]">Get in touch</h2>
            <div className="-mt-2"><ShapeSvg /></div>
            <ul ref={infoRef} className="space-y-4 text-gray-700 mt-4">
              <li><strong>Address:</strong> Suite #401, Gulberg Business Park, Islamabad</li>
              <li><strong>Email:</strong> info@mightyfive.com</li>
              <li><strong>Phone:</strong> +92 300 1234567</li>
              <li><strong>Business Hours:</strong> Mon - Fri: 9:00 AM – 6:00 PM</li>
            </ul>
            <div ref={socialIconsRef} className="flex gap-3 mt-6">
              <SocialIcon url="https://facebook.com/mightyfive" bgColor="#1877F2" fgColor="#fff" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://x.com/mightyfive" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://instagram.com/mightyfive" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://linkedin.com/company/mightyfive" style={{ height: 40, width: 40 }} />
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="form">
          <div className="title">Contact Us</div>
          <p className="message">We'd love to hear from you.</p>
          <div className="flex flex-col gap-4">
            <label className="relative">
              <input name="name" type="text" className="input" placeholder=" " required />
              <span>Your Name *</span>
            </label>
            <label className="relative">
              <input name="email" type="email" className="input" placeholder=" " required />
              <span>Email Address *</span>
            </label>
            <label className="relative">
              <input name="subject" type="text" className="input" placeholder=" " />
              <span>Subject</span>
            </label>
            <label className="relative">
              <textarea name="message" className="input" placeholder=" " required rows={4}></textarea>
              <span>Message *</span>
            </label>
          </div>

          <button type="submit" disabled={loading} className="submit opacity-100 mt-4">
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>
    </main>
  );
}
