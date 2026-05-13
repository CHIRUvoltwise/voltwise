import AnalyticsNote from "@/components/AnalyticsNote";
import PageSpeedNote from "@/components/PageSpeedNote";
import TrustBox from "@/components/TrustBox";
import JsonLd from "@/components/JsonLd";
import { websiteSchema } from "@/data/schema";
import ComparisonTable from "@/components/ComparisonTable";
import { Zap, PiggyBank, BatteryCharging } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import AdBox from "@/components/AdBox";
import { tools } from "@/data/tools";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
<JsonLd data={websiteSchema} />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="mb-4 text-sm font-semibold text-emerald-400">
          Home Energy Savings Calculator Hub
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Calculate electricity costs and save money on your power bill.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          VoltWise helps you estimate appliance usage, AC running costs, EV charging,
          solar savings, and home energy expenses with simple calculators.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#tools"
            className="rounded-xl bg-emerald-400 px-6 py-3 text-center font-semibold text-slate-950"
          >
            Explore calculators
          </a>
          <a
            href="/guides"
            className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold text-white"
          >
            Read saving guides
          </a>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Main Calculators</h2>
        <p className="mt-2 text-slate-400">
          Choose a tool and calculate your energy cost.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>

        <AdBox />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Energy Saving Guides</h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            "How to reduce electricity bill",
            "How much electricity does AC use?",
            "Best ways to save power at home",
          ].map((guide) => (
            <div
              key={guide}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <h3 className="font-semibold">{guide}</h3>
              <p className="mt-2 text-sm text-slate-400">Coming soon.</p>
            </div>
          ))}
        </div>
      </section>
<section className="mx-auto max-w-6xl px-6 pb-16">
  <div className="grid gap-5 sm:grid-cols-3">
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <Zap className="text-emerald-400" />
      <h3 className="mt-4 font-semibold">Fast Calculations</h3>
      <p className="mt-2 text-sm text-slate-400">
        Get electricity cost estimates in seconds.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <PiggyBank className="text-emerald-400" />
      <h3 className="mt-4 font-semibold">Save Money</h3>
      <p className="mt-2 text-sm text-slate-400">
        Understand where your power bill is going.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <BatteryCharging className="text-emerald-400" />
      <h3 className="mt-4 font-semibold">Plan Better</h3>
      <p className="mt-2 text-sm text-slate-400">
        Compare appliances, EV charging, solar, and battery backup.
      </p>
    </div>
  </div>

  <ComparisonTable
    rows={[
      {
        item: "Ceiling Fan",
        low: "40W",
        average: "75W",
        high: "100W",
      },
      {
        item: "Refrigerator",
        low: "100W",
        average: "200W",
        high: "400W",
      },
      {
        item: "Air Conditioner",
        low: "900W",
        average: "1500W",
        high: "2500W",
      },
    ]}
  />
</section>
     <section className="mx-auto max-w-6xl px-6 pb-16">
  <PageSpeedNote />
  <TrustBox />
</section>
    <section className="mx-auto max-w-6xl px-6 pb-16">
  <AnalyticsNote />
</section>
     <Footer />
    </main>
  );
}