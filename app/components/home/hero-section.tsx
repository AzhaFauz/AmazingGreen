"use client";

import { Send, MoreVertical } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] flex items-center justify-center md:justify-start overflow-hidden rounded-3xl mx-2 sm:mx-4">
      {/* 🔹 Background Image */}
      <Image
        src="/Hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center rounded-3xl"
      />

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 text-white text-center md:text-left px-6 sm:px-10 md:px-40 max-w-5xl">
        {/* Label */}
        <div className="inline-block border border-white text-white text-xs sm:text-sm uppercase tracking-wider px-4 py-1 mb-4 rounded-full">
          BELIEVE IN QUALITY!
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 max-w-sm sm:max-w-xl mx-auto md:mx-0">
          Revolutionising Plant Nutrition
        </h1>

        {/* Line + Description */}
        <div className="flex flex-col items-center md:items-start mx-auto md:mx-0 max-w-sm sm:max-w-3xl">
          <hr className="border-white w-3/4 sm:w-2/3 md:w-full mb-2" />
          <p className="text-xs sm:text-base md:text-md leading-relaxed">
            We all need a little space to grow. Give yourself the space you need
            to find your inner you.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-300 transition"
          >
            Contact Us
            <Send className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 🔹 Options Icon (3 Dots) */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20">
        <button className="text-white hover:text-gray-400 transition">
          <MoreVertical className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </button>
      </div>
    </section>
  );
}
