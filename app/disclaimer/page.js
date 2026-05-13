import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lastUpdated, legalNotice } from "@/data/legalContent";

export const metadata = {
  title: "Disclaimer - VoltWise",
  description: "Read the VoltWise disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Disclaimer</h1>

        <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 leading-8 text-slate-300">
          <p>{legalNotice}</p>

          <h2 className="text-2xl font-semibold text-white">Calculator Estimates</h2>
          <p>
            VoltWise calculators use simple formulas based on user inputs.
            Actual electricity usage and cost may be different.
          </p>

          <h2 className="text-2xl font-semibold text-white">Electricity Rates</h2>
          <p>
            Electricity rates can change and may include slabs, taxes, fuel
            adjustment charges, fixed charges, and other fees. Always check your
            official provider bill.
          </p>

          <h2 className="text-2xl font-semibold text-white">No Guarantee</h2>
          <p>
            We do not guarantee that calculations, savings estimates, or guide
            content will exactly match your real-world bill.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}