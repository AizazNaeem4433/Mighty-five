'use client';

import Link from 'next/link';
import { JSX } from 'react';
import {
  FaMobileAlt,
  FaCloud,
  FaCode,
  FaRobot,
  FaGlobe,
  FaHeadset,
} from 'react-icons/fa';

interface ServiceCardProps {
  slug: string;
  title: string;
  index: number;
  description?: string;
}

const iconMap: Record<string, JSX.Element> = {
  'mobile-applications': <FaMobileAlt className="text-orange-600 text-3xl" />,
  'web-development': <FaGlobe className="text-blue-600 text-3xl" />,
  'cloud-hosting': <FaCloud className="text-cyan-600 text-3xl" />,
  'software-development': <FaCode className="text-purple-600 text-3xl" />,
  'ai-automation': <FaRobot className="text-green-600 text-3xl" />,
  'bpo-services': <FaHeadset className="text-teal-600 text-3xl" />,
};

export default function ServiceCard({
  slug,
  title,
  index,
  description,
}: ServiceCardProps) {
  const icon = iconMap[slug] || <FaCode className="text-gray-600 text-3xl" />;
  const number = String(index + 1).padStart(2, '0');

  return (
    <Link href={`/services/${slug}`} className="block h-full group">
      <div className="relative bg-white border border-gray-200 hover:border-orange-400 rounded-2xl p-6 shadow hover:shadow-lg transition-all h-full flex flex-col justify-between">
        {/* 🟧 Top Section */}
        <div className="flex justify-between items-start mb-8">
          {/* Icon Top Left */}
          <div className="p-3 rounded-md shadow-sm">{icon}</div>

          {/* Transparent Number Top Right */}
          <div>
            <span className="text-4xl font-bold text-gray-300 opacity-30 select-none">
              {number}
            </span>
          </div>
        </div>

        {/* 🔶 Title and Description */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 line-clamp-3 px-1">{description}</p>
          )}
        </div>

        {/* 🔽 Arrow */}
        <div className="mt-6 flex justify-center">
          <span className="inline-block transform transition-transform group-hover:translate-x-1 text-orange-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
