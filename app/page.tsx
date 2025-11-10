"use client";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import HeroSection from "./components/home/hero-section";
import InputOutputSection from "./components/home/input-output-section";
import OurFarmersSection from "./components/home/our-farmers-section";
import OurAwardsSection from "./components/home/our-awards-section";
import TestimonialSection from "./components/home/testimonial-section";
import LatestBlogSection from "./components/home/latest-blog-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center grow px-4 py-12 sm:px-6 lg:px-8 text-center">
        <HeroSection />
        <InputOutputSection />
        <OurFarmersSection />
        <OurAwardsSection />
        <TestimonialSection />
        <LatestBlogSection />
      </main>
      <Footer />
    </div>
  );
}
