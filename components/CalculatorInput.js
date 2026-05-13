export default function CalculatorInput({
  label,
  name,
  type = "number",
  value,
  onChange,
  placeholder,
  min = "0",
  step = "any",
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <input
        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        step={step}
      />
    </label>
  );
}