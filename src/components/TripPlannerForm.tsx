import { useState } from 'react';
import { MapPin, Calendar, Users, Wallet, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const TripPlannerForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !startDate || !endDate || !travelers || !budget) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Trip plan created! Check your itinerary below.', {
      description: `Planning ${travelers} travelers to ${destination}`,
    });
  };

  return (
    <section id="plan-trip" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase">Plan</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plan Your Trip
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill in your travel details and we'll help you create the perfect itinerary.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-travel-lg p-8 md:p-10 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Destination */}
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-foreground font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Destination
                  </Label>
                  <Input
                    id="destination"
                    placeholder="Where do you want to go?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Number of Travelers */}
                <div className="space-y-2">
                  <Label htmlFor="travelers" className="text-foreground font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Number of Travelers
                  </Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger className="h-12 bg-background border-border focus:border-primary focus:ring-primary">
                      <SelectValue placeholder="Select travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Traveler</SelectItem>
                      <SelectItem value="2">2 Travelers</SelectItem>
                      <SelectItem value="3">3 Travelers</SelectItem>
                      <SelectItem value="4">4 Travelers</SelectItem>
                      <SelectItem value="5+">5+ Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* End Date */}
                <div className="space-y-2">
                  <Label htmlFor="endDate" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Budget */}
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="budget" className="text-foreground font-medium flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-primary" />
                    Budget Range
                  </Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="h-12 bg-background border-border focus:border-primary focus:ring-primary">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget (₹0 - ₹50,000)</SelectItem>
                      <SelectItem value="moderate">Moderate (₹50,000 - ₹1,50,000)</SelectItem>
                      <SelectItem value="comfort">Comfort (₹1,50,000 - ₹3,00,000)</SelectItem>
                      <SelectItem value="luxury">Luxury (₹3,00,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-ocean text-primary-foreground py-6 text-lg shadow-travel-glow hover:opacity-90 transition-all"
              >
                <Plane className="w-5 h-5 mr-2" />
                Create My Trip Plan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlannerForm;
