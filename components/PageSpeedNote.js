import { Gauge } from "lucide-react";

export default function PageSpeedNote() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center gap-3">
        <Gauge className="text-emerald-400" size={22} />
        <h2 className="font-semibold text-white">Built for speed</h2>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        VoltWise is designed with simple pages, reusable components, and lightweight
        calculators so visitors can get results quickly.
      </p>
    </div>
  );
}