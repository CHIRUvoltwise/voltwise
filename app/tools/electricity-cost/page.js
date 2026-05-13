import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Electricity Cost Calculators",
  description:
    "Use free electricity cost calculators for appliances, AC, refrigerator, washing machine, TV, PC, and EV charging.",
};

export default function ElectricityCostCategoryPage() {
  const costTools = tools.filter((tool) =>
    [
      "/tools/appliance-cost-calculator",
      "/tools/ac-running-cost-calculator",
      "/tools/ev-charging-cost-calculator",
      "/tools/refrigerator-cost-calculator",
      "/tools/washing-machine-cost-calculator",
      "/tools/tv-pc-power-cost-calculator",
    ].includes(tool.href)
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">
          Calculator Category
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Electricity Cost Calculators
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Calculate electricity cost for home appliances, air conditioners,
          refrigerators, washing machines, TVs, PCs, and EV charging.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {costTools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}