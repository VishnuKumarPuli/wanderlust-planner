import { Star, MapPin } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  country: string;
  rating: number;
  price: string;
  description: string;
}

const DestinationCard = ({ image, name, country, rating, price, description }: DestinationCardProps) => {
  return (
    <div className="travel-card group cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-sunset fill-sunset" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{country}</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-semibold text-lg">{price}</span>
            <span className="text-muted-foreground text-sm"> / person</span>
          </div>
          <button className="text-primary font-medium hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
