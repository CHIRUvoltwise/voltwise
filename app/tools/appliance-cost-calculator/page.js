import CalculatorLayout from "@/components/CalculatorLayout";
import EnergyCostCalculator from "@/components/EnergyCostCalculator";

export const metadata = {
  title: "Appliance Cost Calculator - VoltWise",
  description: "Calculate daily, monthly, and yearly electricity cost for any appliance.",
};

export default function ApplianceCostCalculatorPage() {
  return (
    <CalculatorLayout
      title="Appliance Cost Calculator"
      description="Calculate how much electricity any appliance uses and how much it costs per day, month, and year."
    >
      <EnergyCostCalculator
        defaultName="Appliance"
        defaultWatts="1000"
        defaultHours="4"
        defaultDays="30"
        defaultRate="8"
      />
    </CalculatorLayout>
  );
}