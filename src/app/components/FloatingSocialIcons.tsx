'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function FloatingSocialIcons() {
  const socialLinks = [
    'https://facebook.com',
    'https://twitter.com',
    'https://instagram.com',
    'https://linkedin.com',
  ];

  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50 space-y-2">
      {socialLinks.map((url, i) => (
        <div
          key={i}
          className="group p-[6px] rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 relative overflow-hidden"
        >
          {/* Shiny animation stripe */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

          {/* Social Icon */}
          <div className="relative z-10">
            <SocialIcon
              url={url}
              bgColor="currentColor"
              fgColor="#fff"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
