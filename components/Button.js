export default function Button({ children, type = "button", variant = "primary", onClick }) {
  const styles =
    variant === "secondary"
      ? "border border-slate-700 text-white hover:border-emerald-400"
      : "bg-emerald-400 text-slate-950 hover:bg-emerald-300";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl px-5 py-3 font-semibold transition active:scale-95 ${styles}`}
    >
      {children}
    </button>
  );
}