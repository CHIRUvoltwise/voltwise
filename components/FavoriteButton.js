"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function FavoriteButton({ title, href }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("voltwise_favorites") || "[]");
    setSaved(favorites.some((item) => item.href === href));
  }, [href]);

  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("voltwise_favorites") || "[]");

    if (saved) {
      const updated = favorites.filter((item) => item.href !== href);
      localStorage.setItem("voltwise_favorites", JSON.stringify(updated));
      setSaved(false);
    } else {
      const updated = [...favorites, { title, href }];
      localStorage.setItem("voltwise_favorites", JSON.stringify(updated));
      setSaved(true);
    }
  }

  return (
    <button
      onClick={toggleFavorite}
      className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-emerald-400"
    >
      <Star size={18} className={saved ? "fill-emerald-400 text-emerald-400" : "text-slate-400"} />
      {saved ? "Saved to Favorites" : "Add to Favorites"}
    </button>
  );
}