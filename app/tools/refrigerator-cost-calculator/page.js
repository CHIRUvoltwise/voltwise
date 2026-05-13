import CalculatorLayout from "@/components/CalculatorLayout";
import EnergyCostCalculator from "@/components/EnergyCostCalculator";

export const metadata = {
  title: "Refrigerator Cost Calculator - VoltWise",
  description: "Calculate refrigerator electricity usage and monthly cost.",
};

export default function RefrigeratorCostCalculatorPage() {
  return (
    <CalculatorLayout
      title="Refrigerator Cost Calculator"
      description="Estimate your fridge electricity usage and monthly running cost."
    >
      <EnergyCostCalculator
        defaultName="Refrigerator"
        defaultWatts="200"
        defaultHours="24"
        defaultDays="30"
        defaultRate="8"
      />
    </CalculatorLayout>
  );
}