"use client";

import Header from "./components/common/header";
import HeroSection from "./components/home/hero-section";
import InputOutputSection from "./components/home/input-output-section";
import OurFarmersSection from "./components/home/our-farmers-section";
import OurAwardsSection from "./components/home/our-awards-section";
import GrowNaturallySection from "./components/home/grow-naturally-section";
import GrowGallerySection from "./components/home/grow-gallery-section";
import TestimonialSection from "./components/home/testimonial-section";
import LatestBlogSection from "./components/home/latest-blog-section";
import Footer from "./components/common/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center grow px-4 py-12 sm:px-6 lg:px-8 text-center">
        <HeroSection />
        <InputOutputSection />
        <OurFarmersSection />
        <OurAwardsSection />
        <GrowNaturallySection />
        <GrowGallerySection />
        <TestimonialSection />
        <LatestBlogSection />
      </main>
      <Footer />
    </div>
  );
}
