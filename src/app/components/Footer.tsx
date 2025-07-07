'use client';

import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const services = [
  'Mobile Applications',
  'Web Development',
  'ERP Solution Development',
  'Financial Solutions',
  'Digital Marketing',
  'Open AI',
  'Custom Software Development',
];

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      {/* Scrolling Banner */}
      <div className="w-full overflow-hidden bg-red-100 py-3 border-t border-b border-red-300">
  <div className="flex animate-marquee whitespace-nowrap">
    {Array(2)
      .fill(services)
      .flat()
      .map((s, i) => (
        <span key={i} className="px-4 text-sm font-semibold text-black">
          🔴 {s}
        </span>
      ))}
  </div>
</div>


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.svg" alt="Mighty Five" width={30} height={30} />
            <span className="ml-2 text-xl font-bold">Mighty Five</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Mighty Five began with a simple vision: to make cutting-edge development and marketing
            services accessible to every business.
          </p>
          <div className="flex mt-4 space-x-3">
            <SocialIcon url="https://instagram.com"  style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://twitter.com"  style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://facebook.com"  style={{ height: 30, width: 30 }} />
            <SocialIcon url="https://linkedin.com"  style={{ height: 30, width: 30 }} />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><strong>Phone:</strong> +92 331 9639762</li>
            <li><strong>Email:</strong> hr@mightyfive.com</li>
            <li><strong>Lahore Office:</strong> 576, Block Q Phase 2 Johar Town, Lahore, Pakistan</li>
            <li><strong>Karachi Office:</strong> Ronak Trade Tower, Plot 12A 3rd Floor, PECHS, Karachi</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center text-sm text-gray-400 py-4">
        2025 © <span className="text-white font-semibold">Mighty Five</span>. All Rights Reserved. &nbsp; | &nbsp;
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}
