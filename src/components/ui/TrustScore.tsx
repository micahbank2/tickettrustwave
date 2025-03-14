
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, ShieldCheck, ShieldAlert, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TrustScoreProps {
  score: number;
  showText?: boolean;
  showTooltip?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const TrustScore = ({
  score,
  showText = true,
  showTooltip = false,
  size = "md",
  className,
}: TrustScoreProps) => {
  // Determine trust level
  const trustLevel =
    score >= 90 ? "high" : score >= 70 ? "medium" : "low";
  
  // Set size-dependent properties
  const sizeClasses = {
    sm: "text-xs gap-1",
    md: "text-sm gap-1.5",
    lg: "text-base gap-2",
  };
  
  const iconSize = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  // Select icon based on trust level
  const TrustIcon = 
    trustLevel === "high" ? ShieldCheck :
    trustLevel === "medium" ? Shield :
    ShieldAlert;

  // Trust score explanation
  const getTrustExplanation = () => {
    if (trustLevel === "high") {
      return "This seller has an excellent trust score based on verified transactions, positive reviews, and platform behavior.";
    } else if (trustLevel === "medium") {
      return "This seller has a good trust score with some verified transactions and mostly positive reviews.";
    } else {
      return "This seller has a low trust score or is new to the platform. Exercise caution when transacting.";
    }
  };

  const trustComponent = (
    <div 
      className={cn(
        "flex items-center font-medium",
        sizeClasses[size],
        className
      )}
    >
      <TrustIcon 
        size={iconSize[size]} 
        className={cn(
          "text-trust-low",
          trustLevel === "medium" && "text-trust-medium",
          trustLevel === "high" && "text-trust-high"
        )}
      />
      {showText && (
        <span>
          {score}% Trust Score
        </span>
      )}
    </div>
  );

  if (showTooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 cursor-help">
              {trustComponent}
              <Info size={iconSize[size] - 4} className="text-muted-foreground" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">{getTrustExplanation()}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return trustComponent;
};

export default TrustScore;
