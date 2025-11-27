"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function GrowGallerySection() {
  const galleryImages = [
    "/Grow1.jpg",
    "/Grow2.png",
    "/Grow3.png",
    "/Grow4.png",
    "/Hero-bg.png",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-screen bg-background py-10 relative">
      {/* 🔥 GROUP 1: Gallery + Left Arrow + Right Arrow */}
      <div className="relative w-full">
        {/* Gallery Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory px-4 sm:px-6"
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative shrink-0 w-11/12 sm:w-[400px] sm:h-[450px] rounded-xl overflow-hidden snap-center"
            >
              <Image
                src={img}
                alt={`Grow image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-[#5B8C51] hover:text-white transition z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-[#5B8C51] hover:text-white transition z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 🔥 GROUP 2: Client Logos */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 flex flex-wrap justify-center sm:justify-between items-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 mt-20">
        <Image
          src="/Client-Logo1.png"
          alt="Organic Rice"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/Client-Logo2.png"
          alt="Farm"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/Client-Logo3.png"
          alt="Farm Fresh"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/Client-Logo4.png"
          alt="Food"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/Client-Logo5.png"
          alt="Eco Product"
          width={120}
          height={40}
          className="object-contain"
        />
        <Image
          src="/Client-Logo6.png"
          alt="Tractor Farm Fresh"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
    </section>
  );
}
