'use client';

import ServiceCard from '@/app/components/ServiceCard';
import { services } from '@/app/lib/data/services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl font-bold text-center text-gray-900 mb-12"
      >
        Explore Our Services
      </motion.h1>

      {/* Container with staggered children */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
          >
            <ServiceCard
              slug={service.slug}
              title={service.title}
              index={index}
              description={service.intro}
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
