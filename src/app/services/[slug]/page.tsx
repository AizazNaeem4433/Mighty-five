// src/app/services/[slug]/page.tsx

import ServiceDetailContent from './ServiceDetailContent';
import { services } from '@/app/lib/data/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return <ServiceDetailContent service={service} />;
}
