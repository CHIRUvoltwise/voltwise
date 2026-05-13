import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "Solar Savings Guide",
  description:
    "Understand how solar savings, monthly savings, yearly savings, and payback period are calculated.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Solar Savings Guide"
      description="Solar savings depend on how many units your solar system generates and your electricity rate."
    >
      <h2>How solar savings work</h2>
      <p>
        Solar panels generate electricity. If you use that energy at home, you may reduce
        the number of units you buy from the grid.
      </p>

      <h2>Monthly savings formula</h2>
      <p>
        Monthly savings = solar units generated × electricity rate.
      </p>

      <h2>Payback period formula</h2>
      <p>
        Payback years = solar system cost ÷ yearly savings.
      </p>

      <h2>Important note</h2>
      <p>
        Actual savings depend on sunlight, roof direction, local rules, system size,
        installation quality, and electricity provider policies.
      </p>
    </GuideLayout>
  );
}