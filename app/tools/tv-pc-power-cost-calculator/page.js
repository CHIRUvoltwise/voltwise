import CalculatorLayout from "@/components/CalculatorLayout";
import EnergyCostCalculator from "@/components/EnergyCostCalculator";

export const metadata = {
  title: "TV/PC Power Cost Calculator - VoltWise",
  description: "Calculate TV, desktop, laptop, or computer electricity cost.",
};

export default function TvPcPowerCostCalculatorPage() {
  return (
    <CalculatorLayout
      title="TV/PC Power Cost Calculator"
      description="Calculate electricity cost for your TV, desktop computer, laptop, monitor, or gaming setup."
    >
      <EnergyCostCalculator
        defaultName="TV or PC"
        defaultWatts="250"
        defaultHours="6"
        defaultDays="30"
        defaultRate="8"
      />
    </CalculatorLayout>
  );
}