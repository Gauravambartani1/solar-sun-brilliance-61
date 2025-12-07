import { Sparkles, Wrench, BadgeIndianRupee, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const uspData = [
  {
    icon: Wrench,
    title: "3 Years Free Maintenance",
    description: "We handle all washing and maintenance for the first 3 years absolutely free. Your panels always perform at peak efficiency.",
    highlight: true,
  },
  {
    icon: BadgeIndianRupee,
    title: "Loan & Subsidy Support",
    description: "Complete assistance with government subsidies and easy loan options. We make solar affordable for every household.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Premium Quality Panels",
    description: "We use only the best materials from top brands like Adani, Waaree, ensuring maximum efficiency and longevity.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Professional installation completed within 2-3 days with minimal disruption to your daily routine.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "25 Years Warranty",
    description: "Industry-leading warranty on panels and inverters. Your investment is protected for decades.",
    highlight: false,
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Round-the-clock customer support and regular performance monitoring for complete peace of mind.",
    highlight: false,
  },
];

const USPSection = () => {
  return (
    <section id="why-us" className="py-24 bg-solar-navy-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Solar Sun
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Solar Sun Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver excellence at every step – from consultation to installation and beyond. 
            Experience the smoothest solar journey with us.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uspData.map((usp, index) => (
            <div
              key={usp.title}
              className={`group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                usp.highlight
                  ? "bg-solar-navy text-primary-foreground shadow-elevated"
                  : "bg-card shadow-card hover:bg-card"
              }`}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  usp.highlight
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-solar-light-gold text-solar-navy"
                }`}
              >
                <usp.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  usp.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {usp.title}
              </h3>
              <p
                className={
                  usp.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }
              >
                {usp.description}
              </p>

              {/* Highlight Badge */}
              {usp.highlight && (
                <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-glow">
                  EXCLUSIVE
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
