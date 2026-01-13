import { useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-ocean flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              Wanderlust
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#plan-trip" className="text-muted-foreground hover:text-primary transition-colors">
              Plan Trip
            </a>
            <a href="#itinerary" className="text-muted-foreground hover:text-primary transition-colors">
              Itinerary
            </a>
            <a href="#budget" className="text-muted-foreground hover:text-primary transition-colors">
              Budget
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-ocean text-primary-foreground hover:opacity-90 transition-opacity shadow-travel-glow">
              Start Planning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              <a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Destinations
              </a>
              <a href="#plan-trip" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Plan Trip
              </a>
              <a href="#itinerary" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Itinerary
              </a>
              <a href="#budget" className="text-muted-foreground hover:text-primary transition-colors py-2">
                Budget
              </a>
              <Button className="gradient-ocean text-primary-foreground hover:opacity-90 transition-opacity mt-2">
                Start Planning
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
