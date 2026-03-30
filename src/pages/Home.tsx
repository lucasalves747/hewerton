// DESIGN: Sovereign Noir — Página principal com todas as seções
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import MetodoReiSection from "@/components/MetodoReiSection";
import BooksSection from "@/components/BooksSection";
import EbooksSection from "@/components/EbooksSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <QuoteSection />
      <MetodoReiSection />
      <BooksSection />
      <EbooksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
