
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
    <section className="py-20 bg-secondary">
      <div className="layout-grid">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="title-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Our seamless four-step process ensures secure transactions for both buyers and sellers.
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden md:flex justify-between mb-12 relative">
          {/* Progress bar */}
          <div className="absolute top-5 left-0 h-1 bg-muted w-full">
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
                index <= activeStep ? "bg-primary text-white" : "bg-muted text-muted-foreground"
              )}>
                <step.icon size={20} />
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
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
                index === activeStep ? "bg-primary/10" : "opacity-70"
              )}
              onClick={() => setActiveStep(index)}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4",
                index <= activeStep ? "bg-primary text-white" : "bg-muted text-muted-foreground"
              )}>
                <step.icon size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls - Desktop */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
          <Button
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

        {/* Controls - Mobile */}
        <div className="md:hidden flex justify-between mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
          <Button
            size="sm"
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/how-it-works">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
