import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Energy Calculators - VoltWise",
  description:
    "Browse all VoltWise electricity cost and energy savings calculators.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">
          VoltWise Tools
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Energy Cost Calculators
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Use these calculators to estimate electricity usage, appliance running
          costs, solar savings, EV charging costs, and battery backup time.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/tools/electricity-cost"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-emerald-400 hover:text-emerald-400"
          >
            Electricity Cost Calculators
          </a>

          <a
            href="/tools/savings"
            className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-emerald-400 hover:text-emerald-400"
          >
            Energy Savings Calculators
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}