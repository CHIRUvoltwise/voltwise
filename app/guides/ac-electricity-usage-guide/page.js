import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "AC Electricity Usage Guide",
  description:
    "Understand how much electricity an AC uses and how to estimate air conditioner running cost.",
};

export default function Page() {
  return (
    <GuideLayout
      title="AC Electricity Usage Guide"
      description="Air conditioners are usually one of the biggest electricity users in a home."
    >
      <h2>How AC electricity usage works</h2>
      <p>
        AC usage depends on tonnage, star rating, room size, outdoor temperature,
        insulation, and how many hours you use it.
      </p>

      <h2>Simple calculation</h2>
      <p>
        If an AC uses 1500 watts and runs for 8 hours, it uses about 12 units per day.
      </p>

      <h2>Formula</h2>
      <p>
        Units = watts ÷ 1000 × hours used.
      </p>

      <h2>Ways to reduce AC cost</h2>
      <p>
        Clean filters, close windows, avoid direct sunlight, use fans together with AC,
        and avoid setting very low temperatures.
      </p>

      <h2>Use the calculator</h2>
      <p>
        Use the AC Running Cost Calculator on VoltWise to estimate your daily, monthly,
        and yearly AC cost.
      </p>
    </GuideLayout>
  );
}