"use client";

import { Leaf } from "lucide-react";
import Image from "next/image";

export default function OurFarmersSection() {
  const farmers = [
    {
      name: "Jacob Mersin",
      position: "Farmer",
      image: "/Farmer1.png",
    },
    {
      name: "Clara Henry",
      position: "Farm Supervisor",
      image: "/Farm-Supervisor.png",
    },
    {
      name: "Paula Den",
      position: "Farm Manager",
      image: "/Farm-Manager.png",
    },
    {
      name: "Carla Hall",
      position: "Farmer",
      image: "/Farmer2.png",
    },
  ];

  return (
    <section className="w-full py-12 pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4 w-fit">
          <Leaf className="w-5 h-5 text-[#0C6807]" />
          <span className="text-black font-medium">Our Team</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-left">
          Meet Our Team
        </h2>

        {/* Farmers Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {farmers.map((farmer, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left transition-transform hover:scale-105 w-full sm:w-72"
            >
              <div className="w-full flex justify-center items-center">
                <Image
                  src={farmer.image}
                  alt={farmer.name}
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>

              {/* Position with green bullet */}
              <div className="flex items-center gap-2 mt-4 px-5">
                <span className="w-2 h-2 bg-[#0C6807] rounded-full"></span>
                <p className="text-gray-700 font-medium">{farmer.position}</p>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-black mt-1 px-5">
                {farmer.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
