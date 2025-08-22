import RomanticGestureGenerator from "@/components/RomanticGestureGenerator";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import romanticHero from "@/assets/romantic-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${romanticHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 fill-current text-rose-gold" />
              <Sparkles className="w-6 h-6 text-rose-gold" />
              <Heart className="w-8 h-8 fill-current text-rose-gold" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              For the Most
              <span className="block text-rose-gold">Beautiful Girl</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Every gesture, every word, every moment - all created with you in mind, because you deserve nothing less than magic
            </p>
            
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-lg px-8 py-3"
              >
                <Heart className="w-5 h-5 fill-current" />
                See What I Have For You
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Generator Section */}
      <section id="generator" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Does Your Heart Want Today?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every option here was chosen with you in mind. Click any category, or let me surprise you with something special
              </p>
            </div>
            
            <RomanticGestureGenerator />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-romantic-purple/5 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-deep-rose fill-current" />
            <span className="text-sm text-muted-foreground">Made with love to help you express yours</span>
            <Heart className="w-5 h-5 text-deep-rose fill-current" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
