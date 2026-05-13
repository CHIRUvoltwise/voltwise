import Link from "next/link";
import { Calculator } from "lucide-react";

export default function ToolCard({ title, description, href }) {
  return (
    <Link
      href={href}
      className="fade-up group rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-emerald-950/30"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
        <Calculator size={22} />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <p className="mt-4 text-sm font-semibold text-emerald-400 group-hover:translate-x-1 transition">
        Open tool →
      </p>
    </Link>
  );
}