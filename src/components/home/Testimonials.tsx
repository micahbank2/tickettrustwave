
import React, { useState, useEffect } from "react";
import BlurCard from "@/components/ui/BlurCard";
import TrustScore from "@/components/ui/TrustScore";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: "The escrow system gave me complete peace of mind. I sold concert tickets worth $900 and knew my money was secure throughout the entire process.",
      author: "Michael Johnson",
      role: "Concert Seller",
      trustScore: 95,
    },
    {
      quote: "As someone who was scammed before, TicketTrustWave's AI fraud detection was a game-changer. It flagged a suspicious listing that I might have fallen for otherwise.",
      author: "Sarah Williams",
      role: "Sports Fan",
      trustScore: 88,
    },
    {
      quote: "The Trust Score system helps me quickly find reliable sellers. I've purchased tickets multiple times without any issues, making the whole experience stress-free.",
      author: "David Chen",
      role: "Theater Enthusiast",
      trustScore: 92,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="layout-grid">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="title-gradient">Users Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Join thousands of satisfied users who trust our platform for their ticket exchanges.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-2 rounded-full bg-white/50 backdrop-blur-sm border border-border shadow-subtle hover:bg-white/90 transition-all"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-2 rounded-full bg-white/50 backdrop-blur-sm border border-border shadow-subtle hover:bg-white/90 transition-all"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial cards */}
          <div className="relative h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <BlurCard
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 flex flex-col p-8",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex || (activeIndex === 0 && index === testimonials.length - 1)
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <TrustScore score={testimonial.trustScore} size="md" />
                </div>
              </BlurCard>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted"
                )}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
