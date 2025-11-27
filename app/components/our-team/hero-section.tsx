"use client";

import Link from "next/link";
import Image from "next/image";

export default function OurTeamHeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] flex items-center justify-center md:justify-start overflow-hidden rounded-3xl mx-2 sm:mx-4">
      {/* Background Image */}
      <Image
        src="/team-hero.jpg"
        alt="About Us Background"
        fill
        priority
        className="object-cover object-center rounded-3xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center md:text-left px-6 sm:px-10 md:px-40 max-w-5xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-sm sm:max-w-xl mx-auto md:mx-0">
          About Us
        </h1>
        <div className="flex justify-start items-start space-x-2 text-sm md:text-base">
          <Link
            href="/"
            className="hover:underline hover:text-green-500 transition-colors duration-200"
          >
            HOME
          </Link>
          <span className="text-gray-300">{" > "}</span>
          <span className="text-gray-200 font-semibold">ABOUT</span>
        </div>
      </div>
    </section>
  );
}
