import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const inspirationalQuotes = [
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha"
  },
  {
    text: "In the midst of movement and chaos, keep stillness inside of you.",
    author: "Deepak Chopra"
  },
  {
    text: "The present moment is the only time over which we have dominion.",
    author: "Thích Nhất Hạnh"
  },
  {
    text: "Your calm mind is the ultimate weapon against your challenges.",
    author: "Bryant McGill"
  },
  {
    text: "Breathe in peace, breathe out stress.",
    author: "Anonymous"
  },
  {
    text: "The quieter you become, the more you are able to hear.",
    author: "Rumi"
  }
];

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Daily Inspiration
          </h2>
          
          <Card className="border-0 bg-card/60 backdrop-blur-sm shadow-peaceful">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-peaceful rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic">
                  "{inspirationalQuotes[currentQuote].text}"
                </p>
                
                <footer className="text-lg text-muted-foreground">
                  — {inspirationalQuotes[currentQuote].author}
                </footer>
              </blockquote>
            </CardContent>
          </Card>

          {/* Quote Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {inspirationalQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;