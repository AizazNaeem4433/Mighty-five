'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShapeSvg from '../components/ShapeSvg';
import { SocialIcon } from 'react-social-icons';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (!res.ok) throw new Error(responseData.error || 'Failed to send message');

      toast.success(responseData.message || 'Message sent successfully!');
      formRef.current?.reset();
    } catch (error: any) {// eslint-disable-line
      toast.error(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">

      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/26985665_v873-bb-14.jpg"
          alt="Contact Banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-20 flex flex-col items-center justify-center px-4 text-center">
          <div className="text-white mb-2 text-sm font-light">
            <Link href="/" className="underline hover:text-blue-300">Home</Link>
            <span className="mx-1">{'>'}</span>
            <span>Contact Us</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-4xl md:text-5xl font-extrabold"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-50 p-8 rounded-xl shadow-xl overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-[-4px]">Get in touch</h2>
            <div className="-mt-2"><ShapeSvg /></div>
            <ul className="space-y-4 text-gray-700 mt-4">
              {[
                { label: 'Address', value: 'Suite #401, Gulberg Business Park, Islamabad' },
                { label: 'Email', value: 'info@mightyfive.com' },
                { label: 'Phone', value: '+92 300 1234567' },
                { label: 'Business Hours', value: 'Mon - Fri: 9:00 AM – 6:00 PM' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <strong>{item.label}:</strong> {item.value}
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <SocialIcon url="https://facebook.com/mightyfive" bgColor="#1877F2" fgColor="#fff" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://x.com/mightyfive" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://instagram.com/mightyfive" style={{ height: 40, width: 40 }} />
              <SocialIcon url="https://linkedin.com/company/mightyfive" style={{ height: 40, width: 40 }} />
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="title">Contact Us</div>
          <p className="message">We&apos;d love to hear from you.</p>
          <div className="flex flex-col gap-4">
            {[
              { name: 'name', type: 'text', label: 'Your Name *', required: true },
              { name: 'email', type: 'email', label: 'Email Address *', required: true },
              { name: 'phone', type: 'numbers', label: 'Phone Number*', required: true },
            ].map((field, index) => (
              <motion.label
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <input name={field.name} type={field.type} className="input" placeholder=" " required={field.required} />
                <span>{field.label}</span>
              </motion.label>
            ))}
            <motion.label
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <textarea name="message" className="input" placeholder=" " required rows={4}></textarea>
              <span>Message *</span>
            </motion.label>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="submit opacity-100 mt-4"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.form>
      </motion.section>
    </main>
  );
}
