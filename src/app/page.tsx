'use client';

import HeroSVG from './components/Hero';
import AboutPreview from './components/AboutPreview';
import WhyPartnerSection from './components/Partnerpage';
import ServiceCard from './components/ServiceCard';
import { services } from '@/app/lib/data/services';

export default function Home() {
  return (
    <main>
      <HeroSVG />
      <section className="py-5">
        <h2 className="text-center text-4xl font-extrabold mb-14 text-gray-900">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.intro}
              index={index}
            />
          ))}
        </div>
      </section>

      <AboutPreview />
      <WhyPartnerSection />
    </main>
  );
}
