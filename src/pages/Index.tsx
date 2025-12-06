import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ServicesSection from "@/components/ServicesSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import BrandPartners from "@/components/BrandPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <USPSection />
      <ServicesSection />
      <SavingsCalculator />
      <BrandPartners />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
