"use client";

import { Mail, Phone, Facebook, Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: X, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  const footerSections = [
    {
      title: "Useful Link",
      items: ["Company", "About", "Contact"],
      isLink: true,
    },
    {
      title: "Working Time",
      items: [
        "Mon - Fri: 9.00am - 5.00pm",
        "Saturday: 10.00am - 6.00pm",
        "Sunday Closed",
      ],
    },
    {
      title: "Our Address",
      items: ["Nijabima Mawatha", "Bandirippuwa", "Lunuwila", "Sri Lanka"],
    },
  ];

  return (
    <footer className="bg-white text-gray-800">
      {/* 🔹 Top Green Bar */}
      <div className="bg-[#0C6807] text-white w-full">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 lg:px-35 py-7 text-xs sm:text-sm gap-3">
          {/* Left Section – Menu Text */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center font-medium tracking-wide">
            {["FARMERS", "ORGANIC", "FOODS", "PRODUCT"].map((word, i, arr) => (
              <span key={word}>
                {word}
                {i < arr.length - 1 && (
                  <span className="mx-1 text-white">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Right Section – Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-6">
            {[
              {
                href: "tel:+94707900707",
                icon: Phone,
                label: "+94 707 900 707",
              },
              {
                href: "mailto:hello@amazinggreen.lk",
                icon: Mail,
                label: "hello@amazinggreen.lk",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 hover:underline transition"
              >
                <div className="bg-[#5B8C51] p-2.5 rounded-full">
                  <Icon size={18} />
                </div>
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Main Footer Section */}
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-20 lg:px-35 py-12 border-b border-gray-200">
        {/* Left: Logo & Description */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/Logo.jpg"
            alt="Amazing Green Logo"
            width={365}
            height={110}
            className="object-contain w-48 sm:w-60 md:w-[365px] h-auto"
          />
          <p className="mt-4 text-sm text-gray-600 max-w-sm">
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
            risus. In vitae sapien viverra est Duo ei ullum inani senserit.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-5">
            {socialIcons.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 bg-[#F8F7F0] rounded-full hover:bg-[#DCFCE7] transition"
              >
                <Icon className="w-5 h-5 text-[#5B8C51]" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Info Sections & Bottom Bar */}
        <div className="md:w-2/3 text-center md:text-left mt-10 md:mt-0 md:pl-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">
            A government registered company that manufactures 100% organic
            fertilizers & produce.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-sm">
            {footerSections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-2">{section.title}</h3>
                <ul className="space-y-1 text-gray-600">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      {section.isLink ? (
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 🔹 Bottom Footer Bar */}
          <div className="mt-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between py-4 border-t border-gray-200 text-center md:text-left">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
            <p className="mt-2 md:mt-0 text-center md:text-right">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://octick.com"
                target="_blank"
                className="text-[#5B8C51] hover:text-[#0C6807] font-semibold hover:underline"
              >
                OCTICK
              </a>
              , All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
