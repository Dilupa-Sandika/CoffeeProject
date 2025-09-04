'use client';

import React from 'react';
import { Briefcase, Coffee, Globe, Award } from 'lucide-react';

const featuredLogos = [
  { name: 'Forbes', icon: <Briefcase className="w-8 h-8" /> },
  { name: 'TechCrunch', icon: <Coffee className="w-8 h-8" /> },
  { name: 'Bloomberg', icon: <Globe className="w-8 h-8" /> },
  { name: 'Wired', icon: <Award className="w-8 h-8" /> },
];

export default function Featured() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-brand-brown uppercase">As Featured In</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {featuredLogos.map((logo) => (
            <div key={logo.name} className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-2 text-brand-brown/60">
              <div className="flex-shrink-0">
                {React.cloneElement(logo.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" })}
              </div>
              <span className="font-heading text-sm sm:text-lg lg:text-2xl font-bold text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
