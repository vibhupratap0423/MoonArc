'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const images = [
  '/home/bg2.png',
  '/home/bg3.png',
  '/home/bg1.png',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`bg-${index}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1c]/70 to-[#131a30]/70 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Scale Your <span className="text-purple-400">Digital</span> Empire
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We transform ambitious startups and growing brands into digital powerhouses through data-driven marketing strategies that deliver explosive growth.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => router.push('/contact')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90"
            >
              Get Free Strategy Call
            </button>
            <button
              onClick={() => router.push('/casestudies')}
              className="border border-purple-400 text-white px-6 py-3 rounded-full hover:bg-purple-600"
            >
              View Our Work
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 bg-[#1f263f]/90 rounded-2xl p-6 w-full md:w-96 shadow-lg backdrop-blur">
          <div className="text-center">
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-semibold mt-2">Ready to Launch?</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-purple-500 rounded-md py-4 text-center text-white font-semibold">
              500%<br />ROI Average
            </div>
            <div className="bg-purple-500 rounded-md py-4 text-center text-white font-semibold">
              90 Days<br />To Results
            </div>
            <div className="bg-purple-500 rounded-md py-4 text-center text-white font-semibold">
              24/7<br />Support
            </div>
            <div className="bg-purple-500 rounded-md py-4 text-center text-white font-semibold">
              100+<br />Success Stories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
