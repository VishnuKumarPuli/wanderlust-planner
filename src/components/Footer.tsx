import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-sand-light py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-ocean flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">Wanderlust</span>
            </a>
            <p className="text-sand-light/70 text-sm leading-relaxed">
              Your ultimate travel companion. Plan trips, create itineraries, and explore the world with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="text-sand-light/70 hover:text-coral-light transition-colors text-sm">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#plan-trip" className="text-sand-light/70 hover:text-coral-light transition-colors text-sm">
                  Plan Trip
                </a>
              </li>
              <li>
                <a href="#itinerary" className="text-sand-light/70 hover:text-coral-light transition-colors text-sm">
                  Itinerary
                </a>
              </li>
              <li>
                <a href="#budget" className="text-sand-light/70 hover:text-coral-light transition-colors text-sm">
                  Budget
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sand-light/70 text-sm">
                <Mail className="w-4 h-4 text-coral-light" />
                pulivishnug@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sand-light/70 text-sm">
                <Phone className="w-4 h-4 text-coral-light" />
                +91 94400 34238
              </li>
              <li className="flex items-center gap-2 text-sand-light/70 text-sm">
                <MapPin className="w-4 h-4 text-coral-light" />
                San Francisco, CA
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center hover:bg-coral-light transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center hover:bg-coral-light transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center hover:bg-coral-light transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sand-light/10 pt-8 text-center">
          <p className="text-sand-light/50 text-sm">
            © {new Date().getFullYear()} Wanderlust. All rights reserved. Made with ❤️ for travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
