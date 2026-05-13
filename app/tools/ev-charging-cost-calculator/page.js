import CalculatorLayout from "@/components/CalculatorLayout";
import EnergyCostCalculator from "@/components/EnergyCostCalculator";

export const metadata = {
  title: "EV Charging Cost Calculator - VoltWise",
  description: "Calculate electric vehicle charging cost using charger wattage and charging hours.",
};

export default function EvChargingCostCalculatorPage() {
  return (
    <CalculatorLayout
      title="EV Charging Cost Calculator"
      description="Calculate how much it costs to charge an electric vehicle at home."
    >
      <EnergyCostCalculator
        defaultName="EV Charger"
        defaultWatts="3300"
        defaultHours="4"
        defaultDays="30"
        defaultRate="8"
      />
    </CalculatorLayout>
  );
}