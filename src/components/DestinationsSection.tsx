import DestinationCard from './DestinationCard';
import santoriniImage from '@/assets/destination-santorini.jpg';
import baliImage from '@/assets/destination-bali.jpg';
import parisImage from '@/assets/destination-paris.jpg';
import tokyoImage from '@/assets/destination-tokyo.jpg';

const destinations = [
  {
    image: santoriniImage,
    name: 'Santorini',
    country: 'Greece',
    rating: 4.9,
    price: '$1,299',
    description: 'Iconic white-washed buildings and stunning sunsets over the Aegean Sea.',
  },
  {
    image: baliImage,
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.8,
    price: '$899',
    description: 'Tropical paradise with lush rice terraces, temples, and beautiful beaches.',
  },
  {
    image: parisImage,
    name: 'Paris',
    country: 'France',
    rating: 4.7,
    price: '$1,499',
    description: 'The City of Light offers world-class art, cuisine, and romantic atmosphere.',
  },
  {
    image: tokyoImage,
    name: 'Tokyo',
    country: 'Japan',
    rating: 4.9,
    price: '$1,699',
    description: 'A vibrant blend of ultra-modern technology and traditional culture.',
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the world's most breathtaking locations for your next adventure.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
