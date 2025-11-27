"use client";

import { Leaf, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function OurAwardsSection() {
  const awards = [
    {
      title: "Sarapora Liquid Fertiliser",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: "/Award-Certificate.jpg",
    },
    {
      title: "Bio Bloom Liquid Fertiliser",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: "/Award-Certificate.jpg",
    },
    {
      title: "Bio Plus Liquid Fertilizer",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image: "/Award-Certificate.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () =>
    setCurrent((prev) => (prev === awards.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? awards.length - 1 : prev - 1));

  return (
    <section className="w-full bg-[#5B8C51] py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label + Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-3 sm:mb-4 w-fit">
              <Leaf className="w-4 h-4 text-[#5B8C51]" />
              <span className="text-[#0C6807] text-sm sm:text-base font-medium">
                Our Awards
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Awards
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 mt-4 sm:mt-0">
            <button
              onClick={prevSlide}
              className="border border-white rounded-md p-2 text-white hover:bg-white hover:text-[#5B8C51] transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="border border-white rounded-md p-2 text-white hover:bg-white hover:text-[#5B8C51] transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {awards.map((award, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[20px] sm:rounded-[25px] p-4 sm:p-6 shadow-md hover:shadow-lg transition w-full max-w-xs sm:max-w-sm flex flex-col justify-between"
            >
              {/* Certificate Image */}
              <div className="w-full flex justify-center mb-4">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={380}
                  height={200}
                  className="rounded-lg object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#5B8C51] font-semibold text-base sm:text-lg mb-2 text-left">
                • {award.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm border-t pt-3 leading-relaxed text-left">
                {award.description}
              </p>

              {/* Decorative cutout & arrow */}
              <div className="absolute bottom-0 right-0 w-20 h-16 sm:w-24 sm:h-20 overflow-hidden">
                <svg
                  className="absolute bottom-0 right-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <path d="M0,100 Q40,130 100,120 L100,100 Z" fill="white" />
                </svg>
              </div>

              {/* Green circle */}
              <div className="absolute -bottom-3 -right-3 sm:bottom-[-18px] sm:right-[-18px] w-12 h-12 sm:w-16 sm:h-16 bg-[#5B8C51] rounded-full z-10"></div>

              {/* Arrow button */}
              <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 z-20">
                <div className="bg-[#0C6807] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#095005] transition">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
