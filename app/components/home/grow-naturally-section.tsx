"use client";

import Image from "next/image";
import { Leaf, Sprout, Flower2, Carrot } from "lucide-react";

export default function GrowNaturallySection() {
  const features = [
    {
      id: 1,
      title: "Agriculture Products",
      description:
        "Nourish your soil, strengthen your roots, and watch your fields thrive. Sarapora delivers the essential organic nutrients your crops need for vigorous growth and sustained fertility.",
      icon: Sprout,
    },
    {
      id: 2,
      title: "Quality Products",
      description:
        "Made with precision and backed by science, every drop of Sarapora ensures consistent results in healthier plants, richer yields, and lasting soil vitality.",
      icon: Flower2,
    },
    {
      id: 3,
      title: "Fresh Vegetables",
      description:
        "Feed your plants naturally and harvest fresher, tastier vegetables faster. Sarapora accelerates growth cycles while enhancing flavor, color, and nutritional value.",
      icon: Carrot,
    },
    {
      id: 4,
      title: "Pure & Organic",
      description:
        "Free from harmful chemicals and toxins, Sarapora keeps your crops and the planet safe. A 100% organic solution designed for sustainable farming and cleaner food production.",
      icon: Leaf,
    },
  ];

  return (
    <section className="w-full bg-background py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-[#5B8C51] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm w-fit">
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">
              Grow Naturally
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug">
          Choose What’s Perfect <br className="hidden sm:block" />
          For Your Field
        </h2>
        <p className="text-black mt-2 mb-12 text-sm sm:text-base font-semibold">
          Grow Naturally with Sarapora
        </p>

        {/* Features + Bottle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
          {/* Left Features */}
          <div className="space-y-6 md:space-y-10 text-center md:text-left">
            {features.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start"
              >
                <div className="bg-[#0C6807] p-3 rounded-full shrink-0">
                  <item.icon className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottle Image */}
          <div className="flex justify-center my-6 md:my-0">
            <Image
              src="/Sarapora.png"
              alt="Sarapora Bottle"
              width={150}
              height={300}
              className="object-contain sm:w-[220px] sm:h-[400px]"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-6 md:space-y-10 text-center md:text-left">
            {features.slice(2, 4).map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start"
              >
                <div className="bg-[#0C6807] p-3 rounded-full shrink-0">
                  <item.icon className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
