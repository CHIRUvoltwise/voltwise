"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalculatorInput from "@/components/CalculatorInput";
import Button from "@/components/Button";
import ResultGrid from "@/components/ResultGrid";
import SimpleBarChart from "@/components/SimpleBarChart";
import { calculateEnergyCost, formatMoney } from "@/lib/energyCalculations";

export default function CompareAppliancesPage() {
  const [form, setForm] = useState({
    applianceOne: "Old AC",
    wattsOne: "1800",
    applianceTwo: "New AC",
    wattsTwo: "1200",
    hoursPerDay: "6",
    daysPerMonth: "30",
    rate: "8",
  });

  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function calculate(event) {
    event.preventDefault();

    const one = calculateEnergyCost({
      watts: Number(form.wattsOne),
      hoursPerDay: Number(form.hoursPerDay),
      daysPerMonth: Number(form.daysPerMonth),
      rate: Number(form.rate),
    });

    const two = calculateEnergyCost({
      watts: Number(form.wattsTwo),
      hoursPerDay: Number(form.hoursPerDay),
      daysPerMonth: Number(form.daysPerMonth),
      rate: Number(form.rate),
    });

    setResult({
      one,
      two,
      savings: one.monthlyCost - two.monthlyCost,
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Compare</p>
        <h1 className="mt-4 text-4xl font-bold">Compare Appliances</h1>
        <p className="mt-4 text-slate-300">
          Compare electricity cost between two appliances.
        </p>

        <form onSubmit={calculate} className="mt-8 grid gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:grid-cols-2">
          <CalculatorInput label="Appliance 1 name" name="applianceOne" type="text" value={form.applianceOne} onChange={handleChange} />
          <CalculatorInput label="Appliance 2 name" name="applianceTwo" type="text" value={form.applianceTwo} onChange={handleChange} />
          <CalculatorInput label="Appliance 1 watts" name="wattsOne" value={form.wattsOne} onChange={handleChange} />
          <CalculatorInput label="Appliance 2 watts" name="wattsTwo" value={form.wattsTwo} onChange={handleChange} />
          <CalculatorInput label="Hours per day" name="hoursPerDay" value={form.hoursPerDay} onChange={handleChange} />
          <CalculatorInput label="Days per month" name="daysPerMonth" value={form.daysPerMonth} onChange={handleChange} />
          <CalculatorInput label="Electricity rate" name="rate" value={form.rate} onChange={handleChange} />

          <div className="sm:col-span-2">
            <Button type="submit">Compare</Button>
          </div>
        </form>

        <ResultGrid
          results={
            result
              ? [
                  { label: `${form.applianceOne} Monthly Cost`, value: formatMoney(result.one.monthlyCost) },
                  { label: `${form.applianceTwo} Monthly Cost`, value: formatMoney(result.two.monthlyCost) },
                  { label: "Monthly Savings", value: formatMoney(result.savings) },
                ]
              : []
          }
        />

        {result && (
          <SimpleBarChart
            items={[
              { label: form.applianceOne, value: result.one.monthlyCost },
              { label: form.applianceTwo, value: result.two.monthlyCost },
            ]}
          />
        )}
      </section>

      <Footer />
    </main>
  );
}