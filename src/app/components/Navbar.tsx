'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion';
import { services } from '@/app/lib/data/services';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Navbar animation variant
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.5, ease: easeOut },
    },
  };

  // Dropdown container variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.05,
        ease: easeOut,
      },
    },
  };

  // Dropdown item variants
  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: easeIn } },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="bg-white border-b shadow-sm sticky top-0 z-50"
    >
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
                }, 200);
              }}
            >
              <div className="flex items-center text-gray-700 hover:text-green-600 transition cursor-pointer">
                Our Services
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </div>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    key="dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 z-10 border"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <motion.div key={service.slug} variants={dropdownItemVariants}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {service.title}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              aria-label="Toggle menu"
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
