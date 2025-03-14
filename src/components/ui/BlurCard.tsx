
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animateIn?: boolean;
  delay?: number;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "outline" | "destructive" | "success";
  };
  border?: boolean;
  clickable?: boolean;
}

const BlurCard = ({
  children,
  className,
  hoverEffect = true,
  animateIn = false,
  delay = 0,
  badge,
  border = true,
  clickable = false,
  ...props
}: BlurCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 relative",
        hoverEffect && "hover:scale-[1.02] hover:shadow-glass-hover",
        animateIn && "animate-fade-in-up",
        clickable && "cursor-pointer",
        !border && "border-0",
        className
      )}
      style={{
        animationDelay: animateIn ? `${delay}ms` : undefined,
      }}
      {...props}
    >
      {badge && (
        <Badge 
          variant={badge.variant || "default"} 
          className="absolute top-3 right-3"
        >
          {badge.text}
        </Badge>
      )}
      {children}
    </div>
  );
};

export default BlurCard;
