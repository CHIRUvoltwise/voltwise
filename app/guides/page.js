import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";

export const metadata = {
  title: "Energy Saving Guides - VoltWise",
  description:
    "Read simple guides about electricity bills, AC power usage, refrigerator costs, solar savings, EV charging, and energy-saving tips.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">VoltWise Guides</p>
        <h1 className="mt-4 text-4xl font-bold">Energy Saving Guides</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Learn how electricity usage works and how to reduce your monthly power bill.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}