import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "Appliance Comparison Guide",
  description:
    "Learn how to compare appliances by wattage, usage hours, electricity cost, and long-term savings.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Appliance Comparison Guide"
      description="A good appliance comparison should include both purchase price and electricity cost."
    >
      <h2>Compare wattage first</h2>
      <p>
        Wattage tells you how much power an appliance can use. Higher wattage usually
        means higher electricity cost if usage hours are the same.
      </p>

      <h2>Compare usage hours</h2>
      <p>
        A low-watt appliance used all day can sometimes cost more than a high-watt
        appliance used briefly.
      </p>

      <h2>Compare yearly cost</h2>
      <p>
        Yearly cost gives a better picture than daily cost because it shows long-term
        energy expense.
      </p>

      <h2>Use savings calculators</h2>
      <p>
        Use the Old vs New Appliance Savings Calculator to compare old and new appliance
        running costs.
      </p>
    </GuideLayout>
  );
}