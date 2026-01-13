import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-beach.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tropical beach paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/20 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <p className="text-sand-light/90 text-lg md:text-xl mb-4 tracking-wide uppercase">
            Your Adventure Awaits
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-sand-light mb-6 leading-tight">
            Plan Your
            <span className="block text-coral-light">Dream Trip</span>
          </h1>
          <p className="text-sand-light/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover incredible destinations, create personalized itineraries, and budget your perfect adventure — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gradient-ocean text-primary-foreground px-8 py-6 text-lg shadow-travel-glow hover:opacity-90 transition-all"
              onClick={() => document.getElementById('plan-trip')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Planning
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-sand-light/10 border-sand-light/30 text-sand-light hover:bg-sand-light/20 px-8 py-6 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-sand-light/70" />
      </div>
    </section>
  );
};

export default HeroSection;
