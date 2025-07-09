'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );

      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.stat-number');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target')!;
          const count = { value: 0 };
          gsap.to(count, {
            value: target,
            duration: 2,
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              once: true,
            },
            onUpdate: () => {
              counter.textContent = Math.ceil(count.value).toLocaleString();
            },
          });
        });
      }

      gsap.fromTo(
        teamRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    // Testimonial Slider Animation
    let sliderInterval: NodeJS.Timeout;
    if (testimonialRef.current) {
      const container = testimonialRef.current as HTMLDivElement;
      const slideCount = container.children.length;
      let index = 0;

      sliderInterval = setInterval(() => {
        index = (index + 1) % slideCount;
        const shift = (index * 100) / 3;

        gsap.to(container, {
          xPercent: -shift,
          duration: 1,
          ease: 'power2.inOut',
        });
      }, 4000);
    }

    return () => {
      ctx.revert();
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden cursor-pointer transition-all duration-300 filter grayscale hover:grayscale-0 shine-effect max-w-lg h-auto">
            <Image
              src="/creative-people-working-office.jpg"
              alt="About Banner"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-green-500">Mighty Five</span>
            </h1>
            <p ref={textRef} className="text-gray-600 mb-6 leading-relaxed">
              Mighty Five is a collective of visionary minds, passionate developers, and creative thinkers
              focused on transforming ideas into powerful digital experiences. With a commitment to quality,
              innovation, and excellence — we help brands elevate their digital presence and drive results
              through thoughtful strategy and exceptional execution.
              <br /><br />
              We are not just an agency — we&apos;re your technology partner. Whether it&apos;s a startup or a large
              enterprise, we blend strategy, creativity, and code to turn ideas into scalable products that
              users love and businesses rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a team of passionate experts in design, development, and strategy—working together to
              solve real business challenges. Our mission is to empower brands with modern technology that
              accelerates growth and builds lasting relationships.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every project is unique, and so is our approach. We dive deep into your goals, analyze your audience,
              and deliver a tailored solution that speaks directly to your vision.
            </p>
          </div>
          <div ref={imageRef} className="rounded-xl overflow-hidden shadow-2xl shine-effect">
            <Image
              src="/image.png"
              alt="Our Team"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div ref={statsRef} className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ number: 150, suffix: '+', label: 'Projects Completed' },
            { number: 50, suffix: '+', label: 'Happy Clients' },
            { number: 12, suffix: '+', label: 'Years Experience' },
            { number: 20, suffix: '+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                <span className="stat-number" data-target={stat.number}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-16 text-orange-500">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
              icon: '💡',
              title: 'Innovation',
              desc: 'We push boundaries to deliver cutting-edge solutions that give you a competitive edge.'
            },
            {
              icon: '🤝',
              title: 'Integrity',
              desc: 'Honesty and transparency guide every decision we make and every relationship we build.'
            },
            {
              icon: '🎯',
              title: 'Excellence',
              desc: 'We strive for perfection, delivering only the highest quality work.'
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-green-500">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-500">Meet Our Team</h2>
          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[{ name: 'John Doe', role: 'CEO & Founder', image: '/—Pngtree—young indian man_13229320.png' },
              { name: 'Jane Smith', role: 'Creative Director', image: '/—Pngtree—young indian man_13229320.png' },
              { name: 'Mike Johnson', role: 'Tech Lead', image: '/—Pngtree—young indian man_13229320.png' },
              { name: 'Sarah Williams', role: 'Marketing Head', image: '/—Pngtree—young indian man_13229320.png' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-64 relative shine-effect">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-orange-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="bg-green-50 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-500">What Our Clients Say</h2>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 w-[calc(100%*7/3)] transition-transform duration-1000 ease-in-out"
              ref={testimonialRef}
            >
              {[{ name: 'David Wilson', role: 'CEO, TechCorp', text: 'Working with Mighty Five transformed our digital presence.', image: '/—Pngtree—young indian man_13229320.png' },
                { name: 'Sarah Khan', role: 'Founder, DesignHive', text: 'Their creative solutions helped our startup scale quickly.', image: '/—Pngtree—young indian man_13229320.png' },
                { name: 'Ali Raza', role: 'CTO, CloudWorks', text: 'Highly recommend for anyone seeking digital growth.', image: '/—Pngtree—young indian man_13229320.png' },
                { name: 'Zara Sheikh', role: 'Head of Marketing, SwiftTech', text: 'Professional, innovative, and timely delivery.', image: '/—Pngtree—young indian man_13229320.png' },
                { name: 'John Smith', role: 'Manager, SmartApps', text: 'Their tech team is incredibly responsive and helpful.', image: '/—Pngtree—young indian man_13229320.png' },
                { name: 'Fatima Noor', role: 'Founder, CodeCraft', text: 'The whole team at Mighty Five exceeded our expectations.', image: '/—Pngtree—young indian man_13229320.png' },
                { name: 'Musa Yousaf', role: 'Product Lead, ByteX', text: 'Great service and outstanding results!', image: '/—Pngtree—young indian man_13229320.png' },
              ].map((t, i) => (
                <div key={i} className="bg-white flex-shrink-0 w-full md:w-1/3 rounded-xl shadow-lg p-6">
                  <p className="text-gray-700 italic mb-4">&apos;{t.text}&apos;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-green-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
