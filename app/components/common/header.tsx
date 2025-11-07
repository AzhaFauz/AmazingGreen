"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send, Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ["About", "Vision", "Services", "Gallery", "Awards", "Team"];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-full mx-auto flex items-center justify-between px-6 md:px-6 py-3 md:py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={180} // smaller for mobile
            height={60}
            className="object-contain rounded md:w-[264px] md:h-[79px]" // larger on md+
            priority
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item}
                href={href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-[#0C6807] underline underline-offset-4 decoration-2"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Call Us Section */}
          <div className="hidden lg:flex items-center space-x-3 text-gray-700">
            <div className="p-2 rounded-full">
              <Phone size={24} className="text-[#0C6807]" />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-gray-700">Call us now</p>
              <p className="text-sm font-semibold text-gray-800">
                +1 (212) 255-511
              </p>
            </div>
          </div>

          {/* Button Section */}
          <Link
            href="/contact"
            className="hidden sm:flex items-center space-x-2 bg-[#0C6807] text-white px-4 py-2 rounded-full hover:bg-[#0B5E06] transition-all duration-200"
          >
            <span className="text-sm font-medium">Get in Touch</span>
            <Send size={15} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={item}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#0C6807] underline underline-offset-4 decoration-2"
                      : "text-gray-700 hover:text-[#0C6807]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 bg-[#0C6807] text-white px-5 py-2 rounded-full hover:bg-[#0B5E06] transition-all duration-200"
            >
              <span className="text-sm font-medium">Get in Touch</span>
              <Send size={15} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
