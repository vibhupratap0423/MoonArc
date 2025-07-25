'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/bg2.png"
          alt="Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80 z-10" /> {/* Light overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-black py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-purple-700">
            Scale Your <span className="text-purple-900">Digital</span> Empire
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We transform ambitious startups and growing brands into digital powerhouses through data-driven marketing strategies that deliver explosive growth.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition"
            >
              Get Free Strategy Call
            </Link>
            <Link
              href="/casestudies"
              className="border border-purple-600 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-100 transition"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0 bg-gray-100 rounded-2xl p-6 w-full md:w-96 shadow-lg backdrop-blur">
          <div className="text-center">
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-semibold mt-2 text-purple-700">Ready to Launch?</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-purple-600 rounded-md py-4 text-center text-white font-semibold">
              500%<br />ROI Average
            </div>
            <div className="bg-purple-600 rounded-md py-4 text-center text-white font-semibold">
              90 Days<br />To Results
            </div>
            <div className="bg-purple-600 rounded-md py-4 text-center text-white font-semibold">
              24/7<br />Support
            </div>
            <div className="bg-purple-600 rounded-md py-4 text-center text-white font-semibold">
              100+<br />Success Stories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
