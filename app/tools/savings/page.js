import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/data/tools";

export const metadata = {
  title: "Energy Savings Calculators",
  description:
    "Use free energy savings calculators for solar savings, old vs new appliance savings, and home energy planning.",
};

export default function SavingsCategoryPage() {
  const savingsTools = tools.filter((tool) =>
    [
      "/tools/old-vs-new-appliance-savings",
      "/tools/solar-savings-calculator",
      "/tools/inverter-battery-usage-calculator",
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
          Energy Savings Calculators
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Estimate solar savings, compare old and new appliances, and calculate
          battery backup for better home energy planning.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {savingsTools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}