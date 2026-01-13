import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import TripPlannerForm from '@/components/TripPlannerForm';
import ItineraryPlanner from '@/components/ItineraryPlanner';
import BudgetCalculator from '@/components/BudgetCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <TripPlannerForm />
        <ItineraryPlanner />
        <BudgetCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
