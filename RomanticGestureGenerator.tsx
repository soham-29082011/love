import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Gift, MessageCircle, Shuffle } from "lucide-react";
import { toast } from "sonner";

interface GestureCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  gestures: string[];
}

const gestureCategories: GestureCategory[] = [
  {
    id: "surprises",
    name: "Sweet Surprises",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-gradient-romantic",
    gestures: [
      "I'm leaving little love notes in places you'll discover throughout your day, just because you deserve to smile",
      "I created a playlist of songs that make me think of you - every single one tells our story",
      "Your favorite coffee is waiting for you, delivered with all my love and a secret message",
      "I wrote you a letter listing every reason my heart chose you - spoiler: the list is endless",
      "I'm creating a photo album of moments when you didn't know I was looking, and you were absolutely radiant",
      "I filled a jar with tiny notes about why you're amazing - read one whenever you need a reminder",
      "I'm planning something special just because your happiness is my favorite thing in the world",
      "Every morning I think of a new reason why you're perfect for me - today's reason will surprise you"
    ]
  },
  {
    id: "gifts",
    name: "Just Because",
    icon: <Gift className="w-5 h-5" />,
    color: "bg-gradient-hero",
    gestures: [
      "I'm getting us a star map of the exact moment I knew I was falling for you",
      "That little plant on your windowsill? I named it after the first thing I loved about you",
      "I'm commissioning an artist to draw you the way I see you - absolutely beautiful",
      "Your favorite book is getting a custom cover with a message only you'll understand",
      "I'm creating a memory box filled with every ticket, photo, and little thing that reminds me of us",
      "That bracelet you admired? It's being engraved with coordinates to where we first kissed",
      "I'm making you a puzzle, but the picture is our future together as I imagine it",
      "Your favorite charity is getting a donation in your name, because your heart inspires mine"
    ]
  },
  {
    id: "messages",
    name: "Love Letters",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "bg-gradient-soft",
    gestures: [
      "I wrote you a poem about the way you laugh - it's terrible poetry but the feelings are real",
      "Your morning text today comes with the exact reason I'm grateful you exist",
      "I recorded myself reading your favorite story, so you can hear my voice whenever you want",
      "There's a letter waiting for you to open on days when the world feels heavy - I wrote it with so much love",
      "Every photo I see reminds me of you somehow - today I'm sending proof",
      "I'm writing to future you about how much present me adores everything you are",
      "I made a list of adventures I want to share with you - some are silly, all are with you",
      "This thank you note is for being exactly who you are - no changes needed, ever"
    ]
  },
  {
    id: "moments",
    name: "Special Moments",
    icon: <Heart className="w-5 h-5" />,
    color: "bg-soft-pink",
    gestures: [
      "Tonight, I'm creating our own little world with fairy lights, soft music, and just us",
      "I set up your favorite movies, all your snacks, and dimmed the lights - this evening is all yours",
      "The bath is ready with candles and that book you've been wanting to finish - pure relaxation awaits",
      "I'm cooking your favorite meal, and yes, I practiced so it won't be a disaster this time",
      "Your favorite playlist is ready, the space is cozy, and I just want to hold you close",
      "I planned the perfect lazy morning - coffee in bed, no alarms, just you and me",
      "Tonight's plan: blankets, your favorite tea, and listening to you talk about your dreams",
      "I'm setting up a little sanctuary where you can just be you, beautifully and completely"
    ]
  }
];

export default function RomanticGestureGenerator() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentGesture, setCurrentGesture] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateGesture = (categoryId?: string) => {
    setIsGenerating(true);
    
    setTimeout(() => {
      let availableGestures: string[] = [];
      
      if (categoryId) {
        const category = gestureCategories.find(cat => cat.id === categoryId);
        availableGestures = category?.gestures || [];
      } else {
        availableGestures = gestureCategories.flatMap(cat => cat.gestures);
      }
      
      const randomGesture = availableGestures[Math.floor(Math.random() * availableGestures.length)];
      setCurrentGesture(randomGesture);
      setSelectedCategory(categoryId || null);
      setIsGenerating(false);
      
      toast.success("New romantic idea generated! ✨");
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* Category Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gestureCategories.map((category) => (
          <Card 
            key={category.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-romantic border-2 ${
              selectedCategory === category.id ? 'border-deep-rose shadow-glow' : 'border-border/50'
            }`}
            onClick={() => generateGesture(category.id)}
          >
            <CardHeader className="text-center pb-2">
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2 text-white`}>
                {category.icon}
              </div>
              <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Generate Any Gesture Button */}
      <div className="text-center">
        <Button 
          variant="romantic" 
          size="lg"
          onClick={() => generateGesture()}
          disabled={isGenerating}
          className="min-w-48"
        >
          {isGenerating ? (
            <>
              <Sparkles className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Shuffle />
              Surprise Me!
            </>
          )}
        </Button>
      </div>

      {/* Generated Gesture Display */}
      {currentGesture && (
        <Card className="border-2 border-deep-rose/20 shadow-romantic bg-gradient-soft">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-deep-rose fill-current" />
              <CardTitle className="text-deep-rose">Something Special for You</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-foreground">
              {currentGesture}
            </p>
            <div className="mt-4 flex gap-2">
              <Button 
                variant="soft" 
                size="sm"
                onClick={() => generateGesture(selectedCategory || undefined)}
              >
                <Shuffle className="w-4 h-4" />
                Generate Another
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(currentGesture);
                  toast.success("Copied to clipboard! 💕");
                }}
              >
                Copy Idea
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
