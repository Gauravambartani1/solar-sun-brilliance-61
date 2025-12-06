import { ArrowRight, Sun, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-navy/95 via-solar-navy/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sun className="h-4 w-4 text-secondary" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Trusted by 500+ Happy Customers
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Power Your Home with{" "}
            <span className="text-gradient">Clean Solar Energy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Premium rooftop solar installations with 3 years of free maintenance, 
            complete loan & subsidy support, and industry-leading panel technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Calculate Savings
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Installations</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">25+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Years Warranty</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Sun className="h-5 w-5 text-secondary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">3 Yrs</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Free Maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
