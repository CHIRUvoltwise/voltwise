export default function AdBox({ label = "Advertisement" }) {
  return (
    <div className="my-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900/70 p-6 text-center">
      <p className="text-xs uppercase tracking-widest text-slate-500">
        {label}
      </p>
      <div className="mt-3 flex min-h-24 items-center justify-center rounded-xl bg-slate-950 text-sm text-slate-500">
        Ad space reserved
      </div>
    </div>
  );
}