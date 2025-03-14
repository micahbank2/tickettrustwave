
import React from "react";
import { cn } from "@/lib/utils";
import { Shield, ShieldCheck, ShieldAlert } from "lucide-react";

interface TrustScoreProps {
  score: number;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const TrustScore = ({
  score,
  showText = true,
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

  return (
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
};

export default TrustScore;
