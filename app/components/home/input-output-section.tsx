"use client";

import { Sprout, Leaf, ArrowUpRight } from "lucide-react";

export default function InputOutputSection() {
  const cards = [
    {
      title: "Agriculture Inputs",
      icon: <Leaf className="w-10 h-10 text-[#5B8C51]" />,
      description: [
        `Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices.Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices. Nullam porta enim vel tellus commodo,`,
        `agshvasjh asjvhjab hajabbd ceget laoreet odio ultrices.Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices.Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices.Nullam porta enim vel`,
      ],
    },
    {
      title: "Agriculture Outputs",
      icon: <Sprout className="w-10 h-10 text-[#5B8C51]" />,
      description: [
        `Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices.Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices. Nullam porta enim vel tellus commodo,`,
        `agshvasjh asjvhjab hajabbd ceget laoreet odio ultrices.Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices.Nullam porta enim vel tellus commodo, agshvasjh asjvhjab hajscbj adkad bckbbabbd ceget laoreet odio ultrices.Nullam porta enim vel`,
      ],
    },
  ];

  return (
    <section className="w-full py-10 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative bg-[#EDDD5E] rounded-[25px] sm:rounded-[40px] p-4 sm:p-8 h-full shadow-md flex flex-col justify-between text-left overflow-visible"
          >
            {/* 🔹 Decorative white SVG curve */}
            <svg
              className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32"
              viewBox="0 0 100 100"
            >
              <path d="M0,100 Q40,130 100,120 L100,100 Z" fill="white" />
            </svg>

            {/* 🔹 Top icon + title */}
            <div className="text-left">
              <div className="flex items-center gap-3 mb-4 justify-start">
                {card.icon}
                <h3 className="text-[#0C6807] text-lg sm:text-2xl font-semibold leading-tight wrap-break-word">
                  {card.title}
                </h3>
              </div>

              {/* 🔹 Description (two paragraphs) */}
              <div className="text-[#0C6807] text-sm sm:text-base leading-relaxed space-y-4 text-left">
                {card.description.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* 🔹 White cutout circle */}
            <div className="absolute bottom-[-15px] right-[-15px] sm:bottom-[-25px] sm:right-[-25px] w-16 h-16 sm:w-20 sm:h-20 bg-background rounded-full z-10"></div>

            {/* 🔹 Green arrow */}
            <div className="absolute -bottom-2 -right-2 sm:-bottom-2.5 sm:-right-2.5 z-20">
              <div className="bg-[#5B8C51] text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-[#095005] transition">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
