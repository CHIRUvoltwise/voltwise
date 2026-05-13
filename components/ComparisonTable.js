export default function ComparisonTable({ rows }) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">Quick Comparison</h2>

      <table className="mt-6 w-full text-left text-sm">
        <thead className="text-slate-400">
          <tr>
            <th className="border-b border-slate-800 py-3">Item</th>
            <th className="border-b border-slate-800 py-3">Low</th>
            <th className="border-b border-slate-800 py-3">Average</th>
            <th className="border-b border-slate-800 py-3">High</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.item}>
              <td className="border-b border-slate-800 py-3 text-white">{row.item}</td>
              <td className="border-b border-slate-800 py-3 text-slate-300">{row.low}</td>
              <td className="border-b border-slate-800 py-3 text-emerald-400">{row.average}</td>
              <td className="border-b border-slate-800 py-3 text-slate-300">{row.high}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}