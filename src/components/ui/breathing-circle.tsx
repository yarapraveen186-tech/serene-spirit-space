import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Play, Pause } from "lucide-react";

interface BreathingCircleProps {
  className?: string;
}

export const BreathingCircle: React.FC<BreathingCircleProps> = ({ className = "" }) => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale" | "rest">("inhale");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        
        // 4-4-4-4 breathing pattern (4 seconds each phase)
        if (newCount <= 4) {
          setPhase("inhale");
        } else if (newCount <= 8) {
          setPhase("hold");
        } else if (newCount <= 12) {
          setPhase("exhale");
        } else if (newCount <= 16) {
          setPhase("rest");
        } else {
          return 0; // Reset cycle
        }
        
        return newCount > 16 ? 0 : newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const getPhaseText = () => {
    switch (phase) {
      case "inhale": return "Breathe In";
      case "hold": return "Hold";
      case "exhale": return "Breathe Out";
      case "rest": return "Rest";
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case "inhale": return "scale-110";
      case "hold": return "scale-110";
      case "exhale": return "scale-90";
      case "rest": return "scale-100";
    }
  };

  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <div className="relative">
        <div 
          className={`w-32 h-32 rounded-full bg-peaceful border-4 border-primary/30 transition-transform duration-1000 ease-in-out ${getCircleScale()} ${isActive ? 'animate-pulse' : ''}`}
          style={{
            boxShadow: 'var(--shadow-peaceful)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-foreground font-medium text-lg">
            {isActive ? getPhaseText() : "Ready"}
          </span>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-muted-foreground text-sm">
          {isActive ? `${phase === "inhale" || phase === "exhale" ? 4 - (count % 4) : 4 - (count % 4)} seconds` : "4-4-4-4 Breathing Pattern"}
        </p>
        <Button
          onClick={() => setIsActive(!isActive)}
          variant="outline"
          size="sm"
          className="space-x-2"
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isActive ? "Pause" : "Start"}</span>
        </Button>
      </div>
    </div>
  );
};