
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ShieldCheck, Lock, CheckCircle, Scan } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
      if (iconsRef.current) {
        iconsRef.current.style.transform = `translateY(${scrollY * -0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-secondary/30">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Floating security icons */}
      <div 
        ref={iconsRef} 
        className="absolute inset-0 pointer-events-none z-0"
      >
        <Shield 
          className="absolute text-primary/10 top-1/4 left-1/6 animate-float" 
          size={64} 
        />
        <ShieldCheck 
          className="absolute text-primary/10 bottom-1/3 right-1/6 animate-float" 
          style={{ animationDelay: "1s" }}
          size={80} 
        />
        <Lock 
          className="absolute text-primary/10 top-2/3 left-1/4 animate-float" 
          style={{ animationDelay: "1.5s" }}
          size={48} 
        />
      </div>

      <div className="layout-grid relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              Secure Peer-to-Peer Ticket Exchange
            </span>
            
            <h1 
              ref={heroRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-balance"
            >
              Buy Tickets with 
              <span className="title-gradient ml-2">Confidence – Verified & Secure</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in text-balance">
              Get your tickets verified for safety before you buy. No more scams, no more worries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" asChild>
                <Link to="/ticket-verification">
                  Check Your Ticket's Safety
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                <span>100% Secure Escrow</span>
              </div>
              <div className="flex items-center gap-2">
                <Scan className="text-primary" size={20} />
                <span>AI Fraud Detection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                <span>Verified Tickets</span>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="flex-1 hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10"></div>
              <img 
                src="/assets/ticket-purchase.svg" 
                alt="Person buying tickets safely online" 
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Safety Process - Visual Steps */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <h2 className="text-2xl font-semibold text-center mb-8">How Our Safe Ticket Exchange Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { step: 1, title: "Ticket Purchase", icon: Scan },
              { step: 2, title: "Verification", icon: CheckCircle },
              { step: 3, title: "Fraud Detection", icon: Shield },
              { step: 4, title: "Payment Protection", icon: Lock },
              { step: 5, title: "Safe Transaction", icon: ShieldCheck }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 relative">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground mt-1">Step {item.step}</div>
                
                {/* Connector line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-[32px] left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-border">
                    <div className="absolute right-0 top-[-4px] w-3 h-3 border-t-2 border-r-2 border-border rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
