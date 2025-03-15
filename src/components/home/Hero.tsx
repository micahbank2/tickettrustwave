
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, ShieldCheck, Lock, ArrowRight as ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 bg-background">
      {/* Hexagonal background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-hex-pattern bg-repeat bg-[length:100px_100px]"></div>
      
      {/* Floating hexagons for visual interest */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-20 h-20 hexagon bg-primary/10 animate-hex-float"></div>
        <div 
          className="absolute bottom-1/3 right-1/5 w-32 h-32 hexagon bg-accent/10 animate-hex-float" 
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div 
          className="absolute top-2/3 left-1/4 w-16 h-16 hexagon bg-primary/10 animate-hex-float" 
          style={{ animationDelay: "2.2s" }}
        ></div>
      </div>

      <div className="layout-grid relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left side: Copy and form */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:w-1/2">
            <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-muted text-primary text-sm font-medium">
              Secure Peer-to-Peer Ticket Exchange
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              The <span className="text-primary">Safest</span> Way to Exchange Tickets
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Secure Escrow, AI Fraud Detection, and Trust Scores—All in One Platform. 
              Complete transactions with complete peace of mind.
            </p>
            
            {/* Email signup form */}
            <div className="w-full max-w-md space-y-4">
              <div className="flex w-full max-w-md flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-12 px-4 bg-muted border-0"
                />
                <Button size="lg" className="h-12 px-6">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <ShieldCheck className="mr-1.5 h-4 w-4 text-primary" />
                  No credit card required
                </span>
                <span className="flex items-center">
                  <Lock className="mr-1.5 h-4 w-4 text-primary" />
                  Secure signup
                </span>
              </div>
            </div>
            
            {/* Video tour button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-8 border-muted"
            >
              <Play className="mr-2 h-3.5 w-3.5 text-primary" />
              Watch video tour
            </Button>
          </div>
          
          {/* Right side: Product visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full rounded-xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-overlay"></div>
              <img 
                src="/placeholder.svg" 
                alt="SeatHaven platform dashboard" 
                className="w-full object-cover"
              />
              
              {/* Trust score card overlay */}
              <div className="absolute bottom-6 right-6 glass-card p-4 max-w-[200px]">
                <div className="text-xs text-muted-foreground mb-2">Trust Score</div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">Excellent</span>
                  <span className="text-primary font-bold">92%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Trusted by thousands of buyers and sellers</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, i) => (
              <div key={i} className="h-8">
                <img 
                  src="/placeholder.svg" 
                  alt={company} 
                  className="h-full object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
