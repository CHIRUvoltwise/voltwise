import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "EV Charging Cost Guide",
  description:
    "Learn how electric vehicle charging cost is calculated at home.",
};

export default function Page() {
  return (
    <GuideLayout
      title="EV Charging Cost Guide"
      description="EV charging cost depends on battery size, charger power, charging time, and electricity rate."
    >
      <h2>How EV charging cost is calculated</h2>
      <p>
        Home EV charging cost is usually calculated using energy consumed in kilowatt-hours
        and multiplying it by your electricity rate.
      </p>

      <h2>Simple formula</h2>
      <p>
        Charging cost = units used × electricity rate.
      </p>

      <h2>What affects EV charging cost?</h2>
      <p>
        Battery size, charger efficiency, charging speed, electricity tariff, and driving
        distance all affect the real cost.
      </p>

      <h2>Tip</h2>
      <p>
        If your provider has different day and night rates, charging during cheaper hours
        may reduce cost.
      </p>
    </GuideLayout>
  );
}