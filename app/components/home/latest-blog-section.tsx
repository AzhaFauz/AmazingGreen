"use client";

import Image from "next/image";
import { ArrowUpRight, Calendar, User, Leaf } from "lucide-react";

export default function LatestBlogSection() {
  const blogs = [
    {
      id: 1,
      title: "What technology is used in vertical farming?",
      category: "FOOD CROPS",
      date: "March 12, 2025",
      author: "Admin",
      image: "/Food-Crops.png",
    },
    {
      id: 2,
      title: "Which type of farming is more prevalent today?",
      category: "ORGANIC FARM",
      date: "March 15, 2025",
      author: "Admin",
      image: "/Organic-Farm.png",
    },
    {
      id: 3,
      title: "The Farmers Sentiment Darkens Hopes Fade",
      category: "FARMING TIPS",
      date: "March 20, 2025",
      author: "Admin",
      image: "/Farming-Tips.png",
    },
  ];

  return (
    <section className="w-full bg-[#F8F9F3] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label + Heading */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 bg-[#5B8C51] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-3 sm:mb-4 w-fit">
            <Leaf className="w-4 h-4 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">
              Latest Blog
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Latest posts & articles
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-start">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#f8f7f0] transition overflow-hidden text-left rounded-2xl"
            >
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-[#5B8C51] text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {blog.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0C6807] text-white p-2 rounded-full hover:bg-[#095005] transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="py-5 text-left max-w-xs sm:max-w-sm">
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
