import React from "react";
import { Heart, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-2">
            <Leaf className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Serene Spirit Space</h3>
            <Leaf className="w-6 h-6 text-primary scale-x-[-1]" />
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creating a peaceful sanctuary for your mind, body, and spirit. 
            Find the calm you deserve in our mindful community.
          </p>
          
          <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>for your wellbeing</span>
          </div>
          
          <div className="text-xs text-muted-foreground/70">
            © 2024 Serene Spirit Space. Nurturing peace and tranquility.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;