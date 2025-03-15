
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
  AlertTriangle,
  Eye,
  Phone,
  Database
} from "lucide-react";
import BlurCard from "@/components/ui/BlurCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrustScore from "@/components/ui/TrustScore";

const HowItWorks = () => {
  const safetyFeatures = [
    {
      title: "Ticket Validation",
      description: "Before you purchase a ticket, we validate it against official event data—ensuring it matches the correct date, time, seat, and venue. If the ticket is not legitimate or has been flagged as invalid, we'll let you know before you make a purchase.",
      icon: CheckCircle,
      animation: "animate-pulse-slow",
      details: [
        "Real-time barcode validation",
        "Seat and section verification",
        "Event date confirmation",
        "Venue authenticity check",
        "Duplicate ticket detection"
      ]
    },
    {
      title: "AI-Powered Fraud Detection",
      description: "Our AI-powered technology scans every listing for potential fraud. It looks for suspicious pricing, duplicate listings, and other red flags that might indicate a scam. If a listing doesn't pass the test, it's flagged for review.",
      icon: Search,
      animation: "animate-pulse-slow",
      details: [
        "Price analysis for anomalies",
        "Seller behavior pattern recognition",
        "Machine learning fraud identification",
        "Suspicious listing detection",
        "Real-time fraud alerts"
      ]
    },
    {
      title: "Seller Reputation & Trust Score",
      description: "Sellers are rated based on their transaction history and buyer reviews. This system ensures that only trusted sellers are allowed to list tickets. You can check a seller's Trust Score before buying to see their credibility.",
      icon: UserCheck,
      animation: "animate-pulse-slow",
      details: [
        "Transparent seller history",
        "Verified transaction count",
        "Buyer satisfaction ratings",
        "Response time measurement",
        "Historical listing accuracy"
      ]
    },
    {
      title: "Real-Time Blacklist Checks",
      description: "We check each ticket and seller against a live database of known fraudsters. If your ticket or seller is flagged, we'll alert you immediately and cancel the transaction.",
      icon: Database,
      animation: "animate-pulse-slow",
      details: [
        "Cross-platform scammer database",
        "Industry blacklist integration",
        "Known fraud pattern matching",
        "Compromised account detection",
        "Real-time blocking system"
      ]
    },
    {
      title: "Escrow Payment Protection",
      description: "Your payment is securely held in escrow until the ticket is verified. Once the ticket is confirmed, the payment is released to the seller, ensuring the transaction is safe for both parties.",
      icon: Lock,
      animation: "animate-pulse-slow",
      details: [
        "Secure payment holding",
        "Conditional fund release",
        "Buyer verification confirmation",
        "Seller protection guarantee",
        "Automated payment processing"
      ]
    },
    {
      title: "24/7 Customer Support & Refund Guarantee",
      description: "If anything goes wrong, our 24/7 support team is here to assist you. We'll handle disputes, help you resolve issues, and offer a refund if you've been scammed. Your satisfaction is our priority.",
      icon: Phone,
      animation: "animate-pulse-slow",
      details: [
        "Round-the-clock support team",
        "Rapid response guarantee",
        "Full refund for valid claims",
        "Live chat assistance",
        "Dispute resolution process"
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
              How Our Ticket Verification Works – <span className="title-gradient">Safeguarding Every Transaction</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in text-balance">
              We use cutting-edge technology and a secure system to ensure every ticket you buy is authentic and safe. Here's how it works.
            </p>
          </div>
        </div>

        {/* Detailed safety features */}
        <div className="layout-grid py-16">
          <div className="grid grid-cols-1 gap-16">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className={`h-10 w-10 text-primary ${feature.animation}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/20 text-primary font-medium text-sm py-1 px-3 rounded-full">
                        Safety Feature {index + 1}
                      </div>
                      <h2 className="text-2xl font-bold">{feature.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {feature.description}
                    </p>
                    
                    <BlurCard className="p-6 bg-secondary/30">
                      <h3 className="font-medium mb-4">Key Protection Elements:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </BlurCard>
                    
                    {/* Trust Score example for the third feature */}
                    {index === 2 && (
                      <div className="mt-6 p-6 border border-border rounded-lg bg-secondary/20">
                        <h3 className="font-medium mb-4">Example Trust Score:</h3>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                                <span className="font-medium">JS</span>
                              </div>
                              <div>
                                <div className="font-medium">John Smith</div>
                                <div className="text-sm text-muted-foreground">Member since 2022</div>
                              </div>
                            </div>
                            <TrustScore score={95} showTooltip size="lg" />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                                <span className="font-medium">SD</span>
                              </div>
                              <div>
                                <div className="font-medium">Sarah Davis</div>
                                <div className="text-sm text-muted-foreground">Member since 2023</div>
                              </div>
                            </div>
                            <TrustScore score={82} showTooltip size="lg" />
                          </div>
                          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                                <span className="font-medium">NK</span>
                              </div>
                              <div>
                                <div className="font-medium">New Keller</div>
                                <div className="text-sm text-muted-foreground">New member</div>
                              </div>
                            </div>
                            <TrustScore score={40} showTooltip size="lg" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Escrow process visualization for the fifth feature */}
                    {index === 4 && (
                      <div className="mt-6">
                        <div className="relative mt-8 py-6">
                          <div className="absolute left-0 right-0 h-2 top-1/2 -translate-y-1/2 bg-secondary"></div>
                          
                          <div className="flex justify-between relative">
                            {["Payment Made", "Tickets Verified", "Funds Released"].map((step, i) => (
                              <div key={i} className="flex flex-col items-center z-10">
                                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mb-2">
                                  <span className="text-white font-medium">{i + 1}</span>
                                </div>
                                <span className="text-sm font-medium">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
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
