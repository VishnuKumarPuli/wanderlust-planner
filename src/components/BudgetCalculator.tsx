import { useState, useMemo } from 'react';
import { Plane, Hotel, Utensils, Ticket, ShoppingBag, Calculator, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BudgetItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
}

const budgetItems: BudgetItem[] = [
  { id: 'travel', label: 'Travel & Flights', icon: <Plane className="w-5 h-5" />, placeholder: '0' },
  { id: 'accommodation', label: 'Accommodation', icon: <Hotel className="w-5 h-5" />, placeholder: '0' },
  { id: 'food', label: 'Food & Dining', icon: <Utensils className="w-5 h-5" />, placeholder: '0' },
  { id: 'activities', label: 'Activities & Tours', icon: <Ticket className="w-5 h-5" />, placeholder: '0' },
  { id: 'shopping', label: 'Shopping & Misc', icon: <ShoppingBag className="w-5 h-5" />, placeholder: '0' },
];

const BudgetCalculator = () => {
  const [amounts, setAmounts] = useState<Record<string, string>>({
    travel: '',
    accommodation: '',
    food: '',
    activities: '',
    shopping: '',
  });

  const updateAmount = (id: string, value: string) => {
    // Only allow numbers
    if (value && !/^\d*\.?\d*$/.test(value)) return;
    setAmounts({ ...amounts, [id]: value });
  };

  const total = useMemo(() => {
    return Object.values(amounts).reduce((sum, value) => {
      const num = parseFloat(value) || 0;
      return sum + num;
    }, 0);
  }, [amounts]);

  const breakdown = useMemo(() => {
    return budgetItems.map((item) => {
      const value = parseFloat(amounts[item.id]) || 0;
      const percentage = total > 0 ? (value / total) * 100 : 0;
      return { ...item, value, percentage };
    });
  }, [amounts, total]);

  return (
    <section id="budget" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase">Calculate</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Budget Calculator
          </h2>
          <p className="text-muted-foreground text-lg">
            Estimate your trip expenses and stay on budget with our easy calculator.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-card rounded-2xl shadow-travel-md border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-ocean flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Enter Expenses</h3>
              </div>

              <div className="space-y-4">
                {budgetItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <Label htmlFor={item.id} className="text-sm text-muted-foreground">
                        {item.label}
                      </Label>
                      <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <Input
                          id={item.id}
                          type="text"
                          inputMode="decimal"
                          placeholder={item.placeholder}
                          value={amounts[item.id]}
                          onChange={(e) => updateAmount(item.id, e.target.value)}
                          className="pl-7 h-11 bg-background"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-card rounded-2xl shadow-travel-md border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-sunset flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Budget Summary</h3>
              </div>

              {/* Total */}
              <div className="bg-secondary/50 rounded-xl p-6 mb-6 text-center">
                <p className="text-muted-foreground text-sm mb-1">Total Estimated Budget</p>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary">
                  ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3">
                {breakdown.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground">
                        ${item.value.toLocaleString('en-US', { minimumFractionDigits: 2 })} ({item.percentage.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-ocean rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {total === 0 && (
                <p className="text-center text-muted-foreground mt-6">
                  Enter your expenses to see the breakdown
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
