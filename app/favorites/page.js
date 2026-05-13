"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("voltwise_favorites") || "[]");
    setFavorites(saved);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Favorites</p>
        <h1 className="mt-4 text-4xl font-bold">Favorite Calculators</h1>
        <p className="mt-4 text-slate-300">
          Your favorite calculators are saved in this browser.
        </p>

        <div className="mt-8 grid gap-4">
          {favorites.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-400">
              No favorite calculators yet.
            </div>
          ) : (
            favorites.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-emerald-400"
              >
                <h2 className="font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-emerald-400">Open calculator →</p>
              </Link>
            ))
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}