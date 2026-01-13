import { useState } from 'react';
import { Plus, X, GripVertical, MapPin, Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Activity {
  id: string;
  name: string;
  time: string;
  location: string;
}

interface Day {
  id: string;
  date: string;
  activities: Activity[];
}

const ItineraryPlanner = () => {
  const [days, setDays] = useState<Day[]>([
    {
      id: '1',
      date: 'Day 1',
      activities: [
        { id: '1-1', name: 'Arrive at airport', time: '09:00', location: 'International Airport' },
        { id: '1-2', name: 'Check into hotel', time: '12:00', location: 'City Center Hotel' },
        { id: '1-3', name: 'Explore local market', time: '15:00', location: 'Downtown Market' },
      ],
    },
    {
      id: '2',
      date: 'Day 2',
      activities: [
        { id: '2-1', name: 'Visit famous landmark', time: '10:00', location: 'Historic Monument' },
        { id: '2-2', name: 'Lunch at local restaurant', time: '13:00', location: 'Traditional Eatery' },
      ],
    },
  ]);

  const [newActivity, setNewActivity] = useState({ name: '', time: '', location: '' });
  const [addingToDay, setAddingToDay] = useState<string | null>(null);

  const addDay = () => {
    const newDay: Day = {
      id: Date.now().toString(),
      date: `Day ${days.length + 1}`,
      activities: [],
    };
    setDays([...days, newDay]);
    toast.success('New day added to itinerary!');
  };

  const removeDay = (dayId: string) => {
    if (days.length === 1) {
      toast.error('You need at least one day in your itinerary');
      return;
    }
    setDays(days.filter((day) => day.id !== dayId));
    toast.success('Day removed from itinerary');
  };

  const addActivity = (dayId: string) => {
    if (!newActivity.name || !newActivity.time) {
      toast.error('Please fill in activity name and time');
      return;
    }

    setDays(
      days.map((day) =>
        day.id === dayId
          ? {
              ...day,
              activities: [
                ...day.activities,
                {
                  id: `${dayId}-${Date.now()}`,
                  ...newActivity,
                },
              ],
            }
          : day
      )
    );
    setNewActivity({ name: '', time: '', location: '' });
    setAddingToDay(null);
    toast.success('Activity added!');
  };

  const removeActivity = (dayId: string, activityId: string) => {
    setDays(
      days.map((day) =>
        day.id === dayId
          ? { ...day, activities: day.activities.filter((a) => a.id !== activityId) }
          : day
      )
    );
    toast.success('Activity removed');
  };

  return (
    <section id="itinerary" className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase">Organize</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Itinerary Planner
          </h2>
          <p className="text-muted-foreground text-lg">
            Create a day-by-day plan for your perfect trip. Add, remove, and organize activities.
          </p>
        </div>

        {/* Itinerary Days */}
        <div className="max-w-4xl mx-auto space-y-6">
          {days.map((day) => (
            <div key={day.id} className="bg-card rounded-2xl shadow-travel-md border border-border overflow-hidden">
              {/* Day Header */}
              <div className="bg-secondary/50 px-6 py-4 flex items-center justify-between border-b border-border">
                <h3 className="font-display text-xl font-semibold text-foreground">{day.date}</h3>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary"
                    onClick={() => setAddingToDay(addingToDay === day.id ? null : day.id)}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Activity
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-destructive"
                    onClick={() => removeDay(day.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Activities */}
              <div className="p-4 space-y-3">
                {day.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border group hover:border-primary/30 transition-colors"
                  >
                    <GripVertical className="w-5 h-5 text-muted-foreground/50" />
                    <div className="flex items-center gap-2 min-w-[80px]">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{activity.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{activity.name}</p>
                      {activity.location && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </p>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity"
                      onClick={() => removeActivity(day.id, activity.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}

                {day.activities.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No activities yet. Click "Add Activity" to get started!
                  </p>
                )}

                {/* Add Activity Form */}
                {addingToDay === day.id && (
                  <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-primary/20 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        placeholder="Activity name"
                        value={newActivity.name}
                        onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                        className="bg-background"
                      />
                      <Input
                        type="time"
                        value={newActivity.time}
                        onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                        className="bg-background"
                      />
                      <Input
                        placeholder="Location (optional)"
                        value={newActivity.location}
                        onChange={(e) => setNewActivity({ ...newActivity, location: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setAddingToDay(null);
                          setNewActivity({ name: '', time: '', location: '' });
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="gradient-ocean text-primary-foreground"
                        onClick={() => addActivity(day.id)}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Add Day Button */}
          <Button
            variant="outline"
            className="w-full py-6 border-dashed border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary"
            onClick={addDay}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Another Day
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ItineraryPlanner;
