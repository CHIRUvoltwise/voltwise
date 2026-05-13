import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "Refrigerator Electricity Guide",
  description:
    "Learn how refrigerator electricity usage works and how to reduce fridge running cost.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Refrigerator Electricity Guide"
      description="A refrigerator runs many hours every day, so small efficiency changes can save money."
    >
      <h2>Why refrigerators use electricity all day</h2>
      <p>
        Refrigerators switch the compressor on and off to maintain cooling. Even if the
        compressor is not always running, the fridge stays connected all day.
      </p>

      <h2>What affects fridge power usage?</h2>
      <p>
        Size, age, star rating, door opening frequency, room temperature, and cooling
        settings all affect electricity usage.
      </p>

      <h2>How to reduce refrigerator cost</h2>
      <p>
        Keep the door closed, avoid placing hot food inside, clean the back coils if
        accessible, and do not overload the fridge.
      </p>

      <h2>Simple formula</h2>
      <p>
        Monthly cost = watts ÷ 1000 × hours per day × days × electricity rate.
      </p>
    </GuideLayout>
  );
}