import { ShieldCheck, Calculator, Info } from "lucide-react";

export default function TrustBox() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Estimate Only",
      text: "VoltWise results are helpful estimates, not official electricity bills.",
    },
    {
      icon: Calculator,
      title: "Transparent Formulas",
      text: "Each calculator shows the formula used for the result.",
    },
    {
      icon: Info,
      title: "User Controlled",
      text: "You can enter your own wattage, usage hours, and electricity rate.",
    },
  ];

  return (
    <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">Why trust VoltWise?</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <Icon className="text-emerald-400" size={24} />
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}