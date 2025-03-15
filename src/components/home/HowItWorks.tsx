
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Search, 
  CreditCard, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Ticket Listing & Escrow Deposit",
      description: "Sellers create detailed listings and place a security deposit in our escrow system.",
      icon: FileText,
    },
    {
      title: "AI Fraud Screening",
      description: "Our advanced AI technology automatically scans all listings to verify authenticity.",
      icon: Search,
    },
    {
      title: "Buyer Payment & Verification",
      description: "Buyers make secure payments, and tickets are verified before delivery.",
      icon: CreditCard,
    },
    {
      title: "Trust Score Update & Review",
      description: "Transaction is completed, Trust Scores are updated, and reviews can be submitted.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="layout-grid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-balance">
            Our seamless four-step process ensures secure transactions for both buyers and sellers.
          </p>
        </div>

        {/* Value proposition visualization */}
        <div className="bg-[#17232d]/40 backdrop-blur-sm rounded-xl p-8 mb-16 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">150% Increase in Transaction Safety</h3>
              <p className="text-white/70 mb-6">
                Our AI-powered platform significantly reduces fraud compared to traditional peer-to-peer sales,
                with 98% of users reporting complete satisfaction with their secure transactions.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Zero successful fraud attempts in the last 12 months",
                  "Average Trust Score of 92% across all sellers",
                  "Over $2.5 million in protected transactions",
                  "24/7 real-time monitoring and customer support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild>
                <Link to="/how-it-works">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="hexagon bg-[#17232d] border border-white/10 overflow-hidden p-4 aspect-square flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="SeatHaven transaction protection" 
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
                
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-primary text-background rounded-lg px-3 py-2 text-sm font-bold">
                  98% Success Rate
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-background rounded-lg px-3 py-2 text-sm font-bold">
                  100% Money-Back Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden md:flex justify-between mb-12 relative">
          {/* Progress bar */}
          <div className="absolute top-5 left-0 h-1 bg-white/20 w-full">
            <div 
              className="absolute h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center text-center max-w-[250px] cursor-pointer transition-all",
                index <= activeStep ? "opacity-100" : "opacity-50"
              )}
              onClick={() => setActiveStep(index)}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-4 z-10 transition-all",
                index <= activeStep ? "bg-primary text-background" : "bg-white/20 text-white/70"
              )}>
                <step.icon size={20} />
              </div>
              <h3 className="font-medium mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Steps - Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "flex items-start p-4 rounded-lg transition-all",
                index === activeStep ? "bg-white/10" : "opacity-70"
              )}
              onClick={() => setActiveStep(index)}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4",
                index <= activeStep ? "bg-primary text-background" : "bg-white/20 text-white/70"
              )}>
                <step.icon size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1 text-white">{step.title}</h3>
                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
          <Button
            className="bg-primary text-background hover:bg-primary/90"
            onClick={() => {
              if (activeStep < steps.length - 1) {
                setActiveStep(activeStep + 1);
              }
            }}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
