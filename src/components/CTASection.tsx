import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-secondary" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-secondary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-secondary/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Ready to Go Solar?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Start Your Solar Journey Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Get a free consultation and detailed quote for your rooftop solar installation. 
              Our experts will design the perfect system for your needs and help you 
              navigate subsidies and financing options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="bg-background/10 backdrop-blur-md rounded-3xl p-8 border border-primary-foreground/20">
            <h3 className="text-2xl font-bold text-primary-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <a
                href="tel:+919999999999"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-primary-foreground/70 text-sm mb-1">Phone</div>
                  <div className="text-primary-foreground font-semibold text-lg group-hover:text-secondary transition-colors">
                    +91 99999 99999
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@solarsun.in"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-primary-foreground/70 text-sm mb-1">Email</div>
                  <div className="text-primary-foreground font-semibold text-lg group-hover:text-secondary transition-colors">
                    info@solarsun.in
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-primary-foreground/70 text-sm mb-1">Office</div>
                  <div className="text-primary-foreground font-semibold text-lg">
                    New Delhi, India
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-primary-foreground/70 text-sm mb-2">Working Hours</div>
              <div className="text-primary-foreground font-medium">
                Monday - Saturday: 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
