'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { services } from '@/app/lib/data/services'; // Import the services array

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // For dropdown delay
  let closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll('a');

      gsap.fromTo(
        dropdownRef.current,
        { y: -10, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        items,
        { opacity: 0, y: -5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.1,
          ease: 'power2.out',
        }
      );
    }
  }, [dropdownOpen]);

  return (
    <nav ref={navbarRef} className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Mighty{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-400">
              Five
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => {
                  setDropdownOpen(false);
                }, 200); // Delay before closing dropdown
              }}
            >
              <div className="flex items-center text-gray-700 hoverText-green-600 transition cursor-pointer">
                Our Services
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </div>

              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 z-10 border"
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden px-4 pb-4 bg-white border-t space-y-2"
        >
          <Link href="/" className="block py-2 text-gray-700 hover:text-green-600">
            Home
          </Link>
          <div className="border-t border-gray-200 pt-2">
            <div className="py-2 font-medium text-gray-700">Our Services</div>
            <div className="ml-4 space-y-1">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-green-600">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-green-600">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
