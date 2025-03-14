
import React from "react";
import { cn } from "@/lib/utils";

interface BlurCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  animateIn?: boolean;
  delay?: number;
}

const BlurCard = ({
  children,
  className,
  hoverEffect = true,
  animateIn = false,
  delay = 0,
  ...props
}: BlurCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hoverEffect && "hover:scale-[1.02] hover:shadow-glass-hover",
        animateIn && "animate-fade-in-up",
        className
      )}
      style={{
        animationDelay: animateIn ? `${delay}ms` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurCard;
