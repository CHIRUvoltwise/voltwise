export default function CalculatorSlider({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step = "1",
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">{label}</span>
        <span className="text-sm font-semibold text-emerald-400">{value}</span>
      </div>

      <input
        type="range"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className="w-full accent-emerald-400"
      />
    </label>
  );
}