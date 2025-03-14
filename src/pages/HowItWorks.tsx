
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Search, 
  CreditCard, 
  CheckCircle,
  ArrowRight,
  Shield,
  Lock,
  UserCheck,
  AlertTriangle
} from "lucide-react";
import BlurCard from "@/components/ui/BlurCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HowItWorks = () => {
  const steps = [
    {
      title: "Ticket Listing & Escrow Deposit",
      description: "Sellers create detailed listings for their tickets including event details, seating information, and pricing. As a security measure, sellers place a deposit in our escrow system, which helps ensure accountability and prevents fraudulent listings.",
      icon: FileText,
      details: [
        "Complete a detailed ticket listing form",
        "Upload ticket images for verification",
        "Set your desired price and quantity",
        "Make a security deposit into escrow",
        "Listing appears on marketplace after AI verification"
      ]
    },
    {
      title: "AI Fraud Screening",
      description: "Our proprietary AI technology automatically scans all ticket listings in real-time to detect potential fraud. The system analyzes ticket images, listing details, seller history, and other factors to assign a risk score to each listing.",
      icon: Search,
      details: [
        "AI scans ticket barcodes and details",
        "System checks for duplicates across platform",
        "Seller history and patterns are analyzed",
        "Risk score is calculated and displayed",
        "Suspicious listings are flagged for review"
      ]
    },
    {
      title: "Buyer Payment & Ticket Verification",
      description: "Buyers browse verified listings and make secure payments through our platform. Once payment is received, the seller transfers the tickets, and the buyer confirms receipt. Funds remain in escrow until the buyer verifies the tickets are authentic and valid.",
      icon: CreditCard,
      details: [
        "Choose tickets from verified listings",
        "Make secure payment held in escrow",
        "Receive tickets from seller",
        "Verify ticket details and authenticity",
        "Confirm receipt to release funds"
      ]
    },
    {
      title: "Trust Score Update & Review",
      description: "After successful completion of the transaction, both parties can leave reviews. The Trust Score for the seller is automatically updated based on the transaction outcome, buyer review, and other factors, helping build a reliable reputation system.",
      icon: CheckCircle,
      details: [
        "Transaction marked as complete",
        "Both parties submit reviews",
        "Seller's Trust Score is updated",
        "Transaction history recorded",
        "Buyer and seller receive confirmation"
      ]
    },
  ];

  const securityFeatures = [
    {
      title: "Secure Escrow System",
      description: "Our escrow system acts as a trusted third party, holding both the seller's security deposit and the buyer's payment until all conditions of the transaction are met.",
      icon: Lock,
    },
    {
      title: "Real-time Fraud Detection",
      description: "Our AI models continuously learn from thousands of transactions to identify evolving fraud patterns and protect our users.",
      icon: AlertTriangle,
    },
    {
      title: "Dynamic Trust Scores",
      description: "Trust Scores change based on transaction history, enabling users to quickly identify reliable sellers with proven track records.",
      icon: Shield,
    },
    {
      title: "Verified User System",
      description: "All users undergo identity verification, adding an extra layer of security and accountability to every transaction.",
      icon: UserCheck,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24 bg-background min-h-screen">
        {/* Hero section */}
        <div className="bg-secondary/50 py-16 md:py-24">
          <div className="layout-grid text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in text-balance">
              How <span className="title-gradient">TicketTrustWave</span> Works
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in text-balance">
              Our innovative platform combines cutting-edge technology with user-centered design to create the safest ticket exchange experience possible.
            </p>
          </div>
        </div>

        {/* Detailed steps */}
        <div className="layout-grid py-16">
          <div className="grid grid-cols-1 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/20 text-primary font-medium text-sm py-1 px-3 rounded-full">
                        Step {index + 1}
                      </div>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <BlurCard className="p-5">
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-primary">{i + 1}</span>
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </BlurCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security features */}
        <div className="bg-secondary/50 py-16">
          <div className="layout-grid">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Advanced <span className="title-gradient">Security Features</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
                Every aspect of our platform is designed with security in mind, ensuring safe transactions for all users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <BlurCard 
                  key={index} 
                  className="flex items-start gap-4 p-6"
                  animateIn
                  delay={index * 150}
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </BlurCard>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="layout-grid py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience <span className="title-gradient">Safe Ticket Trading?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Join thousands of users who safely buy and sell tickets on our platform every day.
          </p>
          <Button size="lg" asChild>
            <Link to="/auth?mode=signup">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
