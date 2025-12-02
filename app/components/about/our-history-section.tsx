"use client";

import { Leaf } from "lucide-react";

export default function OurHistorySection() {
  const timeline = [
    {
      year: "2017",
      title: "Open my Farm",
      description:
        "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
    {
      year: "2019",
      title: "Farm Remodelecion",
      description:
        "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
    },
    {
      year: "2021",
      title: "Grainfarmers Formed",
      description:
        "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit.",
    },
    {
      year: "2025",
      title: "Start of Agriculture",
      description:
        "Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-white border px-3 py-1 rounded-full mb-4 shadow-sm">
          <Leaf className="w-4 h-4 text-[#5B8C51]" />
          <span className="text-sm font-medium text-[#5B8C51]">
            Our History
          </span>
        </div>

        {/* Heading + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B3C1A] leading-tight">
            Farming have been since <br /> 2017
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even.
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Year */}
              <h3 className="text-4xl font-semibold text-gray-400 tracking-wider mb-3">
                {item.year}
              </h3>

              {/* Dot */}
              <div className="w-3 h-3 bg-[#5B8C51] rounded-full mb-4"></div>

              {/* Title */}
              <h4 className="text-lg font-bold text-[#1B3C1A] mb-2">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed px-4 sm:px-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
