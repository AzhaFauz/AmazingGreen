"use client";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import HeroSection from "./components/home/hero-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center grow px-4 py-12 sm:px-6 lg:px-8 text-center">
        <HeroSection />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Welcome to Amazing Green
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-muted-foreground">
          Your trusted destination for eco-friendly products and sustainable
          living.
        </p>
      </main>
      <Footer />
    </div>
  );
}
