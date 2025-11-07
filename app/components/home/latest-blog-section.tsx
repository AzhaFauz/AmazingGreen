"use client";

import Image from "next/image";
import { ArrowUpRight, Calendar, User } from "lucide-react";

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
    <section className="w-full bg-[#F8F9F3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label + Heading */}
        <div className="mb-10">
          <span className="bg-[#5B8C51] text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm">
            Latest Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mt-4">
            Latest posts & articles
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />

                {/* Category Label */}
                <div className="absolute top-3 left-3 bg-white/90 text-[#5B8C51] text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {blog.category}
                </div>

                {/* Green Arrow */}
                <div className="absolute bottom-3 right-3 bg-[#5B8C51] text-white p-2 rounded-full hover:bg-[#497842] transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Blog Details */}
              <div className="p-5">
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
