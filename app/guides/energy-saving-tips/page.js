import GuideLayout from "@/components/GuideLayout";

export const metadata = {
  title: "Energy Saving Tips",
  description:
    "Simple energy-saving tips to reduce electricity usage at home.",
};

export default function Page() {
  return (
    <GuideLayout
      title="Energy Saving Tips"
      description="Small daily habits can reduce your electricity usage over time."
    >
      <h2>Quick tips</h2>
      <ul>
        <li>Switch off lights and fans when leaving a room.</li>
        <li>Use LED bulbs instead of old bulbs.</li>
        <li>Clean AC filters regularly.</li>
        <li>Use natural light during daytime.</li>
        <li>Do full washing machine loads instead of many small loads.</li>
        <li>Unplug chargers when not in use.</li>
      </ul>

      <h2>Track your usage</h2>
      <p>
        Use VoltWise calculators to estimate which appliances cost the most and focus
        on improving those first.
      </p>
    </GuideLayout>
  );
}