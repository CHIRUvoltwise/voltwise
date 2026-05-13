export default function FormulaBox({ title = "Formula", children }) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-300">{children}</div>
    </div>
  );
}