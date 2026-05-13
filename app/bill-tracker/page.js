"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalculatorInput from "@/components/CalculatorInput";
import Button from "@/components/Button";
import ResultGrid from "@/components/ResultGrid";
import { formatMoney } from "@/lib/energyCalculations";

export default function BillTrackerPage() {
  const [form, setForm] = useState({
    lastMonth: "2500",
    thisMonth: "2200",
  });

  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function calculate(event) {
    event.preventDefault();

    const difference = Number(form.thisMonth) - Number(form.lastMonth);
    const percent =
      Number(form.lastMonth) > 0
        ? (difference / Number(form.lastMonth)) * 100
        : 0;

    setResult({
      difference,
      percent,
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Bill Tracker</p>
        <h1 className="mt-4 text-4xl font-bold">Monthly Bill Tracker</h1>
        <p className="mt-4 text-slate-300">
          Compare this month electricity bill with last month.
        </p>

        <form onSubmit={calculate} className="mt-8 grid gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-2">
          <CalculatorInput
            label="Last month bill"
            name="lastMonth"
            value={form.lastMonth}
            onChange={handleChange}
          />

          <CalculatorInput
            label="This month bill"
            name="thisMonth"
            value={form.thisMonth}
            onChange={handleChange}
          />

          <div className="sm:col-span-2">
            <Button type="submit">Compare Bills</Button>
          </div>
        </form>

        <ResultGrid
          results={
            result
              ? [
                  {
                    label: "Bill Difference",
                    value: formatMoney(result.difference),
                  },
                  {
                    label: "Percentage Change",
                    value: `${result.percent.toFixed(2)}%`,
                  },
                ]
              : []
          }
        />
      </section>

      <Footer />
    </main>
  );
}