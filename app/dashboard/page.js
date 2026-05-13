"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResultGrid from "@/components/ResultGrid";
import { formatMoney } from "@/lib/energyCalculations";

export default function DashboardPage() {
  const [summary, setSummary] = useState({
    favorites: 0,
    estimatedSavings: 0,
    trackedBills: 0,
  });

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("voltwise_favorites") || "[]");

    setSummary({
      favorites: favorites.length,
      estimatedSavings: favorites.length * 100,
      trackedBills: 0,
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Dashboard</p>
        <h1 className="mt-4 text-4xl font-bold">Monthly Savings Dashboard</h1>
        <p className="mt-4 text-slate-300">
          A simple dashboard for your VoltWise activity.
        </p>

        <ResultGrid
          results={[
            { label: "Favorite Calculators", value: summary.favorites },
            { label: "Estimated Monthly Savings", value: formatMoney(summary.estimatedSavings) },
            { label: "Tracked Bills", value: summary.trackedBills },
          ]}
        />

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">Dashboard Note</h2>
          <p className="mt-3 leading-8 text-slate-300">
            This is the first version of the dashboard. Later, after login is added,
            users can see saved calculations, real bill history, and personal savings.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}