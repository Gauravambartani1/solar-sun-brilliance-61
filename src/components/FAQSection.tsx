import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much can I save with solar panels?",
    answer: "On average, households save 70-90% on their electricity bills. The exact savings depend on your current consumption, roof size, and sun exposure. We provide a detailed savings estimate during our free consultation.",
  },
  {
    question: "What is the installation process and timeline?",
    answer: "The complete process takes 7-14 days from consultation to power-on. This includes site survey (1-2 days), design approval, installation (2-3 days), and grid connection paperwork. We handle all documentation and approvals.",
  },
  {
    question: "Do you help with government subsidies and loans?",
    answer: "Yes! We provide complete assistance with PM Surya Ghar Yojana subsidy applications and help arrange low-interest solar loans. Our team handles all paperwork to ensure you get maximum benefits.",
  },
  {
    question: "What warranty and maintenance do you provide?",
    answer: "We offer 25 years warranty on panels, 10 years on inverters, and 5 years on installation workmanship. Additionally, you get 3 years of FREE cleaning and maintenance service included with every installation.",
  },
  {
    question: "Which brands do you use for installation?",
    answer: "We use only top-tier brands: Adani and Waaree for solar panels, and Polycab and RR Kabel for wiring. These are industry-leading brands known for quality, efficiency, and durability.",
  },
  {
    question: "What happens on cloudy days or at night?",
    answer: "Your system remains connected to the grid. On cloudy days, panels still generate power (at reduced capacity). At night, you draw power from the grid. With net metering, excess daytime generation offsets nighttime usage.",
  },
  {
    question: "Is my roof suitable for solar panels?",
    answer: "Most roofs in Amravati are suitable for solar installation. We evaluate roof condition, orientation, shading, and available space during our free site survey. We design systems to maximize output for your specific roof.",
  },
  {
    question: "What size system do I need for my home?",
    answer: "System size depends on your annual electricity consumption. Typically: 3kW for up to 4,000 units/year, 4kW for 4,000-6,000 units/year, and 5kW+ for higher consumption. We recommend the optimal size during consultation.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about going solar with Solar Sun
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-secondary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-secondary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
