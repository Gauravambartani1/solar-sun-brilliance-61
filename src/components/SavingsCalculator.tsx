import { useState } from "react";
import { Sun, Zap, IndianRupee, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const systemOptions = [
  {
    capacity: "3 kW",
    emi: 2700,
    monthlyUnits: 360,
    savings: 2880,
    bestFor: "Small homes with 2-3 AC",
  },
  {
    capacity: "4 kW",
    emi: 4100,
    monthlyUnits: 480,
    savings: 3840,
    bestFor: "Medium homes with 3-4 AC",
  },
  {
    capacity: "5 kW",
    emi: 5200,
    monthlyUnits: 600,
    savings: 4800,
    bestFor: "Large homes with 4+ AC",
  },
];

const WHATSAPP_NUMBER = "918806660170";
const WHATSAPP_MESSAGE = "Hi! I'm interested in getting a solar installation for my home in Amravati. Please share more details.";

const SavingsCalculator = () => {
  const [selectedSystem, setSelectedSystem] = useState(1);
  const system = systemOptions[selectedSystem];

  const monthlySavings = system.savings - system.emi;
  const yearlySavings = monthlySavings * 12;

  const handleGetQuote = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in a ${system.capacity} solar system for my home in Amravati. EMI: ₹${system.emi}/month. Please share more details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="calculator" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            <Calculator className="h-4 w-4" />
            Savings Calculator
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Calculate Your Solar Savings
          </h2>
          <p className="text-muted-foreground text-lg">
            See how much you can save with rooftop solar. Choose your system size 
            and discover your potential monthly savings.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
            {/* System Selection */}
            <div className="p-8 bg-gradient-to-br from-solar-navy to-solar-navy/90">
              <h3 className="text-xl font-bold text-primary-foreground mb-6 text-center">
                Select Your System Size
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {systemOptions.map((option, index) => (
                  <button
                    key={option.capacity}
                    onClick={() => setSelectedSystem(index)}
                    className={`relative p-4 md:p-6 rounded-2xl transition-all duration-300 ${
                      selectedSystem === index
                        ? "bg-secondary text-secondary-foreground scale-105 shadow-lg"
                        : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                    }`}
                  >
                    <Sun className={`h-8 w-8 mx-auto mb-2 ${
                      selectedSystem === index ? "text-secondary-foreground" : "text-secondary"
                    }`} />
                    <div className="text-2xl md:text-3xl font-bold">{option.capacity}</div>
                    <div className={`text-sm mt-1 ${
                      selectedSystem === index ? "text-secondary-foreground/80" : "text-primary-foreground/70"
                    }`}>
                      ₹{option.emi.toLocaleString()}/mo EMI
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Monthly EMI */}
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <IndianRupee className="h-8 w-8 mx-auto mb-3 text-solar-navy" />
                  <div className="text-sm text-muted-foreground mb-1">Monthly EMI</div>
                  <div className="text-3xl font-bold text-foreground">
                    ₹{system.emi.toLocaleString()}
                  </div>
                </div>

                {/* Electricity Generated */}
                <div className="text-center p-6 rounded-2xl bg-muted/50">
                  <Zap className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <div className="text-sm text-muted-foreground mb-1">Monthly Units</div>
                  <div className="text-3xl font-bold text-foreground">
                    ~{system.monthlyUnits} kWh
                  </div>
                </div>

                {/* Bill Savings */}
                <div className="text-center p-6 rounded-2xl bg-solar-light-gold">
                  <Sun className="h-8 w-8 mx-auto mb-3 text-solar-navy" />
                  <div className="text-sm text-solar-navy/70 mb-1">Bill Savings</div>
                  <div className="text-3xl font-bold text-solar-navy">
                    ₹{system.savings.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Net Savings Highlight */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-green-700 font-semibold mb-1">Your Net Monthly Savings</div>
                    <div className="text-sm text-muted-foreground">
                      After paying EMI, you still save money!
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">
                      ₹{monthlySavings.toLocaleString()}/mo
                    </div>
                    <div className="text-sm text-green-600/80">
                      ₹{yearlySavings.toLocaleString()}/year
                    </div>
                  </div>
                </div>
              </div>

              {/* Best For */}
              <div className="text-center mb-8">
                <span className="inline-block bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground">
                  <strong className="text-foreground">{system.capacity} System</strong> is best for: {system.bestFor}
                </span>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button variant="gold" size="xl" onClick={handleGetQuote}>
                  Get Free Quote on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Terms & Assumptions */}
          <div className="mt-8 p-6 bg-muted/30 rounded-2xl border border-border">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Terms & Assumptions</h4>
            <ul className="text-xs text-muted-foreground space-y-1.5">
              <li>• EMI calculations are based on standard financing terms. Actual EMI may vary based on loan tenure and interest rates.</li>
              <li>• Monthly unit generation assumes average 4-5 peak sun hours/day in Amravati, Maharashtra region.</li>
              <li>• Electricity savings calculated at ₹8/unit (average MSEDCL tariff). Actual savings depend on your consumption pattern.</li>
              <li>• System performance may vary based on roof orientation, shading, and weather conditions.</li>
              <li>• Prices include installation but exclude any structural modifications if required.</li>
              <li>• Government subsidy benefits (PM Surya Ghar Yojana) can further reduce your effective cost.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
