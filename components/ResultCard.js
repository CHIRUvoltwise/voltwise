export default function ResultCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-bold text-emerald-400">{value}</p>
    </div>
  );
}