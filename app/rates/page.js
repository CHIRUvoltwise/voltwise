import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { electricityRates } from "@/data/electricityRates";

export const metadata = {
  title: "Electricity Rates - VoltWise",
  description: "View sample electricity rates for VoltWise calculators.",
};

export default function RatesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Rates</p>
        <h1 className="mt-4 text-4xl font-bold">Electricity Rate Data</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          These are sample electricity rates. Always check your official electricity
          provider for accurate rates.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-400">
              <tr>
                <th className="border-b border-slate-800 py-3">Country</th>
                <th className="border-b border-slate-800 py-3">State/Region</th>
                <th className="border-b border-slate-800 py-3">Rate</th>
              </tr>
            </thead>
            <tbody>
              {electricityRates.map((rate) => (
                <tr key={rate.slug}>
                  <td className="border-b border-slate-800 py-3">{rate.country}</td>
                  <td className="border-b border-slate-800 py-3">{rate.state}</td>
                  <td className="border-b border-slate-800 py-3 text-emerald-400">
                    {rate.currency}
                    {rate.rate} per unit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
}