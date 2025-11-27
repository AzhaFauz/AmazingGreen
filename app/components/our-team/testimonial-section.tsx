"use client";

import Image from "next/image";
import { Leaf, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Martin Bailey",
      role: "SUPERVISOR",
      image: "/Testimonial1.png",
      review:
        "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      id: 2,
      name: "Emma Greed",
      role: "CUSTOMER",
      image: "/Testimonial2.png",
      review:
        "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      id: 3,
      name: "Daniel Craig",
      role: "CO FOUNDER",
      image: "/Testimonial3.png",
      review:
        "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
  ];

  return (
    <section className="w-full bg-[#F8F9F3] py-12 sm:py-16 px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label + Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="mb-10 text-left">
            <div className="flex items-center gap-2 bg-[#5B8C51] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-3 sm:mb-4 w-fit">
              <Leaf className="w-4 h-4 text-white" />
              <span className="text-white text-sm sm:text-base font-medium">
                Testimonial
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
              What our customers say
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 rounded-md border border-gray-500 hover:bg-white">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 rounded-md border border-gray-500 hover:bg-white">
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-sm relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-2 bg-[#5B8C51] text-white p-2 rounded-full">
                <Quote className="w-5 h-5" />
              </div>

              {/* Stars */}
              <div className="flex mb-4 text-[#FDCF00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FDCF00]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 text-left">
                “{testimonial.review}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-[#5B8C51] font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Logos */}
        <div className="border-t border-gray-200 mt-16 pt-8 w-full">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 flex flex-wrap justify-center sm:justify-between items-center gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 mt-6">
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
        </div>
      </div>
    </section>
  );
}
