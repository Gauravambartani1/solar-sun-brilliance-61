const brands = [
  { name: "Adani", category: "Solar Panels" },
  { name: "Waaree", category: "Solar Panels" },
  { name: "Tata", category: "Solar Panels" },
  { name: "Panasonic", category: "Solar Panels" },
  { name: "Polycab", category: "Wires & Cables" },
  { name: "RR Kabel", category: "Wires & Cables" },
];

const BrandPartners = () => {
  return (
    <section id="partners" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Use Only the Best Brands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quality is our priority. We partner with industry-leading manufacturers 
            to ensure your solar system performs at its best.
          </p>
        </div>

        {/* Brand Carousel */}
        <div className="relative">
          <div className="flex animate-marquee">
            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <div className="group bg-card border border-border rounded-2xl p-8 w-64 h-40 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-elevated hover:border-secondary/50 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-solar-navy transition-colors">
                    {brand.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {brand.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">ISO 9001</div>
            <div className="text-sm text-muted-foreground">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">MNRE</div>
            <div className="text-sm text-muted-foreground">Approved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">BIS</div>
            <div className="text-sm text-muted-foreground">Standard</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">IEC</div>
            <div className="text-sm text-muted-foreground">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
