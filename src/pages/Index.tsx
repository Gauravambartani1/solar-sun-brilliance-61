import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import BrandPartners from "@/components/BrandPartners";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <USPSection />
      <ServicesSection />
      <HowItWorks />
      <BrandPartners />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
