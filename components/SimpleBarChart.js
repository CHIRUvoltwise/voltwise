export default function SimpleBarChart({ items }) {
  if (!items || items.length === 0) return null;

  const maxValue = Math.max(...items.map((item) => item.value), 1);

  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <h3 className="font-semibold text-white">Cost Comparison</h3>

      <div className="mt-5 space-y-4">
        {items.map((item) => {
          const width = Math.max((item.value / maxValue) * 100, 5);

          return (
            <div key={item.label}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">{item.label}</span>
                <span className="text-emerald-400">₹{item.value.toFixed(2)}</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}