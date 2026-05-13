import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WattageTable from "@/components/WattageTable";
import FAQSection from "@/components/FAQSection";
import { wattageDatabase } from "@/data/wattageDatabase";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Appliance Wattage Database - VoltWise",
  description: "Check typical wattage values for common home appliances.",
};

export default function ApplianceWattagePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Wattage Database</p>
        <h1 className="mt-4 text-4xl font-bold">Common Appliance Wattage</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Use this table to find typical wattage values for appliances before using
          VoltWise calculators.
        </p>

        <WattageTable items={wattageDatabase} />
        <FAQSection faqs={faqs} />
      </section>

      <Footer />
    </main>
  );
}