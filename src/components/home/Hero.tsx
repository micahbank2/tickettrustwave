
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ShieldCheck, Lock } from "lucide-react";

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
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
            Secure Peer-to-Peer Ticket Exchange
          </span>
          
          <h1 
            ref={heroRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-balance"
          >
            The Safest Way to Complete
            <span className="title-gradient ml-2">Peer-to-Peer Ticket Sales</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in text-balance">
            Secure Escrow, AI Fraud Detection, and Trust Scores—All in One Platform. Enjoy peace of mind with every transaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" asChild>
              <Link to="/auth?mode=signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary" size={20} />
              <span>100% Secure Escrow</span>
            </div>
            <div className="flex items-center gap-2">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                <path d="M20 12a8 8 0 1 0-16 0" />
                <path d="M12 12v-2" />
                <path d="M12 12h2" />
              </svg>
              <span>AI Fraud Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="text-primary" size={20} />
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
