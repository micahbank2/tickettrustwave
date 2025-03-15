
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Zap, BarChart3, CreditCard, CheckCircle, Lock, Wallet, Users, AlertTriangle, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Secure Escrow",
      description: "Funds held securely until transaction completion",
      icon: Shield,
      color: "bg-[#2c4e6c]/10 text-[#2c4e6c]",
    },
    {
      title: "AI Fraud Detection",
      description: "Advanced algorithms scan tickets for authenticity",
      icon: Zap,
      color: "bg-[#3b304e]/10 text-[#3b304e]",
    },
    {
      title: "Trust Scores",
      description: "Transparent reliability ratings for all users",
      icon: BarChart3,
      color: "bg-[#5f2d59]/10 text-[#5f2d59]",
    },
    {
      title: "Secure Payments",
      description: "Multiple protected payment options",
      icon: CreditCard,
      color: "bg-[#25dc88]/10 text-[#25dc88]",
    },
    {
      title: "Verification System",
      description: "Multi-step verification for all tickets",
      icon: CheckCircle,
      color: "bg-[#2c4e6c]/10 text-[#2c4e6c]",
    },
    {
      title: "Encrypted Data",
      description: "End-to-end encryption for all transactions",
      icon: Lock,
      color: "bg-[#3b304e]/10 text-[#3b304e]",
    },
    {
      title: "Instant Transfers",
      description: "Fast payouts when transactions complete",
      icon: Wallet,
      color: "bg-[#5f2d59]/10 text-[#5f2d59]",
    },
    {
      title: "Seller Verification",
      description: "Identity checks on all platform sellers",
      icon: Users,
      color: "bg-[#25dc88]/10 text-[#25dc88]",
    },
    {
      title: "Risk Analysis",
      description: "Proactive detection of suspicious activity",
      icon: AlertTriangle,
      color: "bg-[#2c4e6c]/10 text-[#2c4e6c]",
    },
    {
      title: "Transparent History",
      description: "Complete transaction audit trails",
      icon: Search,
      color: "bg-[#3b304e]/10 text-[#3b304e]",
    },
  ];

  return (
    <section className="py-20 bg-[#17232d] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5 bg-grid-pattern bg-[length:20px_20px]"></div>
      
      <div className="layout-grid relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Monitor Your <span className="text-primary">Full Transaction</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Our platform combines advanced security features to protect every aspect of your ticket exchange.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center transition-all"
            >
              <div className={cn(
                "hexagon w-16 h-16 flex items-center justify-center mb-4 transition-all group-hover:scale-110",
                feature.color
              )}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
