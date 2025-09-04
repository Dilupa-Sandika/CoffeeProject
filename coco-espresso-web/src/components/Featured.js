'use client';

import { Briefcase, Coffee, Globe, Award } from 'lucide-react';

const featuredLogos = [
  { name: 'Forbes', icon: <Briefcase className="w-8 h-8" /> },
  { name: 'TechCrunch', icon: <Coffee className="w-8 h-8" /> },
  { name: 'Bloomberg', icon: <Globe className="w-8 h-8" /> },
  { name: 'Wired', icon: <Award className="w-8 h-8" /> },
];

export default function Featured() {
  return (
    <section className="py-12 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold tracking-widest text-brand-brown uppercase">As Featured In</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {featuredLogos.map((logo) => (
            <div key={logo.name} className="flex justify-center items-center space-x-2 text-brand-brown/60">
              {logo.icon}
              <span className="font-heading text-2xl font-bold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
