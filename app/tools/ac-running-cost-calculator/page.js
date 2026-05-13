import CalculatorLayout from "@/components/CalculatorLayout";
import EnergyCostCalculator from "@/components/EnergyCostCalculator";

export const metadata = {
  title: "AC Running Cost Calculator - VoltWise",
  description: "Estimate air conditioner electricity cost per day, month, and year.",
};

export default function AcRunningCostCalculatorPage() {
  return (
    <CalculatorLayout
      title="AC Running Cost Calculator"
      description="Estimate how much your air conditioner costs to run based on wattage, usage time, and electricity rate."
    >
      <EnergyCostCalculator
        defaultName="Air Conditioner"
        defaultWatts="1500"
        defaultHours="8"
        defaultDays="30"
        defaultRate="8"
      />
    </CalculatorLayout>
  );
}