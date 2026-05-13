import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "How to Reduce Electricity Bill",
  description:
    "Learn simple ways to reduce your monthly electricity bill using smart appliance habits and energy-saving tips.",
};

export default function Page() {
  return (
    <GuideLayout
      title="How to Reduce Electricity Bill"
      description="Reducing your electricity bill starts with understanding where your power is being used every day."
    >
      <h2>1. Check high-power appliances first</h2>
      <p>
        Air conditioners, refrigerators, geysers, washing machines, induction stoves,
        and desktop computers usually consume more electricity than small devices.
      </p>

      <h2>2. Reduce AC usage smartly</h2>
      <p>
        Running an AC for many hours can increase your bill quickly. Try using a timer,
        cleaning filters, closing doors, and setting the temperature around a comfortable
        level instead of very low cooling.
      </p>

      <h2>3. Switch off unused devices</h2>
      <p>
        Fans, lights, TVs, chargers, and computers should be switched off when not needed.
        Small savings every day can become meaningful over a full month.
      </p>

      <h2>4. Use LED lighting</h2>
      <p>
        LED bulbs use much less electricity than old bulbs. Replacing frequently used
        lights is one of the simplest ways to save power.
      </p>

      <h2>5. Calculate before buying appliances</h2>
      <p>
        Before buying a new appliance, compare wattage, expected usage hours, and energy
        rating. A cheaper appliance may cost more in electricity over time.
      </p>

      <h2>Quick formula</h2>
      <p>
        Monthly units = watts ÷ 1000 × hours per day × days per month.
      </p>
    </GuideLayout>
  );
}