import React from "react";
import { Button } from "@/components/ui/button";
import { BreathingCircle } from "@/components/ui/breathing-circle";
import { Leaf, Heart, Brain } from "lucide-react";
import heroImage from "@/assets/hero-mountain-lake.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 text-primary">
                <Leaf className="w-8 h-8 animate-gentle-bounce" />
                <Heart className="w-8 h-8 animate-gentle-bounce delay-200" />
                <Brain className="w-8 h-8 animate-gentle-bounce delay-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Serene Spirit Space
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Find your inner peace, release tension, and embrace tranquility in a world designed for your mental wellness
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="peaceful"
              className="text-lg px-8 py-4"
            >
              Start Your Journey
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4"
            >
              Explore Meditations
            </Button>
          </div>

          {/* Breathing Exercise */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Begin with a Breath
              </h3>
              <p className="text-muted-foreground">
                Try our guided breathing exercise to center yourself
              </p>
            </div>
            
            <div className="flex justify-center">
              <BreathingCircle />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float delay-1000" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary/30 rounded-full animate-float delay-2000" />
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-accent/30 rounded-full animate-float delay-500" />
    </section>
  );
};

export default Hero;