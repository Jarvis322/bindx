'use client';

import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Trusted SAP Consulting Partner
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          With over 20 years of experience, we optimize your SAP solutions and prepare your business for the future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
} 