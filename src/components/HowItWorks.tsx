import { ClipboardCheck, FileText, Home, Sun, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Consultation",
    description: "We assess your energy needs, roof space, and provide a customized solar solution with complete cost breakdown.",
  },
  {
    icon: Home,
    step: "02",
    title: "Site Survey & Design",
    description: "Our experts visit your location, analyze sun exposure, and design the optimal panel layout for maximum efficiency.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Documentation & Approvals",
    description: "We handle all paperwork including subsidy applications, permits, and grid connection approvals.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Professional Installation",
    description: "Certified technicians install your system using premium equipment, ensuring safety and durability.",
  },
  {
    icon: Sun,
    step: "05",
    title: "Power On & Support",
    description: "We complete grid connection and provide 3 years of free maintenance for peace of mind.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From consultation to installation, we make going solar effortless
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-secondary/50 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
