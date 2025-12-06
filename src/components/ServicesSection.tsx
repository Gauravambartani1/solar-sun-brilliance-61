import { Home, Building2, Factory, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Complete rooftop solar solutions for homes. Reduce your electricity bills by up to 90% with our premium installations.",
    features: ["Net Metering Support", "Custom System Design", "25+ Year Panel Warranty"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description: "Power your business with sustainable energy. Custom solar solutions designed for offices, shops, and commercial spaces.",
    features: ["High-Capacity Systems", "ROI Analysis", "Tax Benefits Assistance"],
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    description: "Large-scale solar installations for factories and industrial units. Maximize savings on heavy electricity consumption.",
    features: ["MW Scale Projects", "Grid Integration", "24/7 Monitoring"],
  },
  {
    icon: Settings,
    title: "AMC Services",
    description: "Annual maintenance contracts to keep your solar system running at peak performance throughout its lifetime.",
    features: ["Regular Cleaning", "Performance Checks", "Quick Repairs"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solar Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From residential rooftops to large industrial plants, we provide end-to-end 
            solar solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border border-border overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-solar-light-gold rounded-bl-full opacity-50 transition-all duration-300 group-hover:scale-150 group-hover:opacity-30" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-solar-navy text-primary-foreground mb-6 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="group/btn text-solar-navy hover:text-solar-navy p-0">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
