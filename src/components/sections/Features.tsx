import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Music, BookOpen, Sun, Moon } from "lucide-react";
import meditationImage from "@/assets/meditation-dock.jpg";
import mindfulImage from "@/assets/mindful-growth.jpg";

const features = [
  {
    icon: Brain,
    title: "Guided Meditations",
    description: "Soothing meditation sessions designed to quiet your mind and reduce stress",
    image: meditationImage,
    gradient: "bg-peaceful"
  },
  {
    icon: Heart,
    title: "Stress Relief Techniques",
    description: "Proven methods to release tension and find calm in everyday moments",
    image: mindfulImage,
    gradient: "bg-forest"
  },
  {
    icon: Music,
    title: "Calming Soundscapes",
    description: "Nature sounds and peaceful music to create your perfect relaxation environment",
    gradient: "bg-sky"
  },
  {
    icon: BookOpen,
    title: "Daily Inspiration",
    description: "Uplifting quotes and mindfulness reminders to keep you centered throughout the day",
    gradient: "bg-sunset"
  },
  {
    icon: Sun,
    title: "Morning Rituals",
    description: "Start your day with intention through gentle morning practices and affirmations",
    gradient: "bg-peaceful"
  },
  {
    icon: Moon,
    title: "Evening Wind-Down",
    description: "Peaceful bedtime routines to help you release the day and prepare for rest",
    gradient: "bg-forest"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Path to Inner Peace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover a collection of tools and practices designed to bring tranquility, 
            reduce stress, and nurture your mental wellbeing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-peaceful transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm gentle-hover"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${feature.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                {feature.image && (
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                )}
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary"
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="meditation"
            className="text-lg px-8 py-4"
          >
            Begin Your Practice
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;