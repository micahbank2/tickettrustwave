
import React from "react";
import BlurCard from "@/components/ui/BlurCard";
import { Shield, Zap, BarChart3, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Secure Escrow Service",
      description: "Our escrow system holds funds securely until both parties confirm the transaction is complete, eliminating the risk of fraud.",
      icon: Shield,
      delay: 0,
    },
    {
      title: "AI Fraud Detection",
      description: "Advanced AI algorithms scan tickets and listings in real-time to identify potential fraud before it affects you.",
      icon: Zap,
      delay: 150,
    },
    {
      title: "Trust Score System",
      description: "Every seller has a transparent Trust Score based on verified transaction history, reviews, and platform behavior.",
      icon: BarChart3,
      delay: 300,
    },
    {
      title: "Seamless Transactions",
      description: "Our intuitive platform makes buying and selling tickets safe, easy, and stress-free with multiple payment options.",
      icon: CreditCard,
      delay: 450,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="layout-grid">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features That <span className="title-gradient">Protect You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Our platform combines cutting-edge technology with user-centered design to create the safest ticket exchange experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <BlurCard 
              key={index} 
              className="flex flex-col items-center text-center p-6" 
              animateIn 
              delay={feature.delay}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </BlurCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
