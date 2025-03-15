
import React from "react";
import BlurCard from "@/components/ui/BlurCard";
import { Shield, Zap, BarChart3, CreditCard, Eye, Lock, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Ticket Validation",
      description: "We validate every ticket against official event data to ensure it's authentic.",
      icon: CheckCircle,
      delay: 0,
      hoverText: "Our system cross-references ticket data with official venue information to prevent counterfeits."
    },
    {
      title: "AI Fraud Detection",
      description: "Our AI scans for suspicious patterns to spot fraudulent listings before you buy.",
      icon: Zap,
      delay: 150,
      hoverText: "Advanced algorithms analyze transaction patterns, pricing anomalies, and seller behavior to identify potential fraud."
    },
    {
      title: "Escrow Protection",
      description: "Your payment is securely held until your ticket is verified, ensuring both buyers and sellers are protected.",
      icon: Lock,
      delay: 300,
      hoverText: "Our escrow system acts as a neutral third party, only releasing funds after verification is complete."
    },
    {
      title: "Trust Score System",
      description: "Every seller has a transparent Trust Score based on verified transaction history, reviews, and platform behavior.",
      icon: BarChart3,
      delay: 450,
      hoverText: "Trust Scores help you identify reliable sellers instantly, with detailed transaction history available for review."
    },
    {
      title: "Real-time Monitoring",
      description: "We continuously monitor all transactions and scan for suspicious activities to prevent fraud.",
      icon: Eye,
      delay: 600,
      hoverText: "Our system provides 24/7 monitoring of all platform activities to catch and prevent fraudulent behavior."
    },
    {
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing protect your financial information.",
      icon: CreditCard,
      delay: 750,
      hoverText: "We use industry-standard encryption and security protocols to safeguard all payment information."
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="layout-grid">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Safety Features – <span className="title-gradient">Protecting Every Ticket Transaction</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Our platform combines cutting-edge technology with user-centered design to create the safest ticket exchange experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <BlurCard 
              key={index} 
              className="flex flex-col items-center text-center p-6 group hover:bg-secondary/50 transition-all duration-300" 
              animateIn 
              delay={feature.delay}
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              {/* Hover tooltip */}
              <div className="opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:mt-4 transition-all duration-300 overflow-hidden text-sm text-primary border-t border-primary/10 pt-4 w-full">
                {feature.hoverText}
              </div>
            </BlurCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
