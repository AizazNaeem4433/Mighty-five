// src/app/services/[slug]/page.tsx

import ServiceDetailContent from './ServiceDetailContent';
import { services } from '@/app/lib/data/services';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return notFound();
  return <ServiceDetailContent service={service} />;
}
