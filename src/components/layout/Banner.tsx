
import React, { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerProps {
  message: string;
  className?: string;
  link?: {
    text: string;
    url: string;
  };
}

const Banner = ({ message, className, link }: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "bg-secondary border-b border-border py-2 px-4 text-sm text-foreground",
        className
      )}
    >
      <div className="layout-grid">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p>{message}</p>
            {link && (
              <a 
                href={link.url} 
                className="font-medium text-primary hover:underline"
              >
                {link.text}
              </a>
            )}
          </div>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
