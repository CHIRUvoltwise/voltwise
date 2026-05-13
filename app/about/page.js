import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBox from "@/components/TrustBox";

export const metadata = {
  title: "About VoltWise",
  description: "Learn about VoltWise and our home energy savings calculators.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">About VoltWise</p>

        <h1 className="mt-4 text-4xl font-bold">
          Simple electricity calculators for everyday people.
        </h1>

        <div className="mt-8 space-y-5 leading-8 text-slate-300">
          <p>
            VoltWise helps users estimate appliance electricity usage, monthly
            power costs, solar savings, EV charging costs, and home energy
            expenses.
          </p>

          <p>
            The goal is simple: make electricity calculations easy to understand
            without confusing formulas or complicated tools.
          </p>

          <p>
            VoltWise is built for students, families, renters, homeowners, and
            anyone who wants to understand power usage better.
          </p>
        </div>

        <TrustBox />
      </section>

      <Footer />
    </main>
  );
}