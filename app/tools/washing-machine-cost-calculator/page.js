import CalculatorLayout from "@/components/CalculatorLayout";
import EnergyCostCalculator from "@/components/EnergyCostCalculator";

export const metadata = {
  title: "Washing Machine Cost Calculator - VoltWise",
  description: "Estimate washing machine electricity cost per use or per month.",
};

export default function WashingMachineCostCalculatorPage() {
  return (
    <CalculatorLayout
      title="Washing Machine Cost Calculator"
      description="Calculate washing machine electricity cost based on wattage, usage time, and monthly usage."
    >
      <EnergyCostCalculator
        defaultName="Washing Machine"
        defaultWatts="500"
        defaultHours="1"
        defaultDays="20"
        defaultRate="8"
      />
    </CalculatorLayout>
  );
}