// src/app/services/page.tsx

import ServiceCard from '@/app/components/ServiceCard';
import { services } from '@/app/lib/data/services';

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Explore Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            title={service.title}
            index={index}
            description={service.intro}
          />
        ))}
      </div>
    </main>
  );
}
