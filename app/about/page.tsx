import Header from "../components/common/header";
import AboutHeroSection from "../components/about/hero-section";
import Footer from "../components/common/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center grow px-4 py-12 sm:px-6 lg:px-8 text-center">
        <AboutHeroSection />
      </main>
      <Footer />
    </div>
  );
}
