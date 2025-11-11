"use client";

import { Leaf } from "lucide-react";
import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-16">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start md:ml-32">
        {/* Left Image Section */}
        <div className="relative flex justify-center md:justify-start">
          <div className="relative w-full max-w-lg">
            <Image
              src="/about-who.jpg"
              alt="Who We Are"
              width={700}
              height={450}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />

            {/* Yellow Stat Card with smooth scale effect */}
            <div
              className="absolute sm:-bottom-8 sm:-right-8 bottom-4 right-4 bg-[#EDDD5E] text-[#171717] rounded-2xl shadow-md px-8 py-6 w-fit 
                            transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <h2 className="text-4xl font-bold">*435+</h2>

              {/* Horizontal line */}
              <div className="w-full h-px bg-gray-700 my-2"></div>

              <p className="text-sm font-medium mt-1 text-gray-700">
                Growth Tons’ of Harvest
              </p>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col space-y-6">
          {/* Small Badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4 w-fit">
            <Leaf className="w-5 h-5 text-[#0C6807]" />
            <span className="text-black font-medium">Who We Are</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B2E1A] leading-snug text-left">
            Currently we are growing
            <br /> and selling organic food
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed text-left">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don’t look even. There are many variations of
            passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which don’t look even.
          </p>
        </div>
      </div>
    </section>
  );
}
