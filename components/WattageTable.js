export default function WattageTable({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">Common Appliance Wattage</h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="border-b border-slate-800 py-3">Appliance</th>
              <th className="border-b border-slate-800 py-3">Typical Watts</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.appliance}>
                <td className="border-b border-slate-800 py-3 text-white">
                  {item.appliance}
                </td>
                <td className="border-b border-slate-800 py-3 text-emerald-400">
                  {item.watts} W
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}