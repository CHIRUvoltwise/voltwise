"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorInput from "@/components/CalculatorInput";
import Button from "@/components/Button";
import ResultGrid from "@/components/ResultGrid";
import FormulaBox from "@/components/FormulaBox";
import ErrorMessage from "@/components/ErrorMessage";
import { formatMoney, formatUnits } from "@/lib/energyCalculations";
import { validatePositiveNumbers, hasErrors } from "@/lib/validation";

export default function SolarSavingsCalculatorPage() {
  const [form, setForm] = useState({
    monthlyUnits: "300",
    solarUnits: "200",
    rate: "8",
    systemCost: "150000",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function calculate(event) {
    event.preventDefault();

    const validationErrors = validatePositiveNumbers(form);

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setResult(null);
      return;
    }

    setErrors({});

    const monthlySavings = Number(form.solarUnits) * Number(form.rate);
    const yearlySavings = monthlySavings * 12;
    const paybackYears =
      yearlySavings > 0 ? Number(form.systemCost) / yearlySavings : 0;

    setResult({
      monthlySavings,
      yearlySavings,
      paybackYears,
      solarUnits: Number(form.solarUnits),
    });
  }

  function reset() {
    setForm({
      monthlyUnits: "300",
      solarUnits: "200",
      rate: "8",
      systemCost: "150000",
    });
    setResult(null);
    setErrors({});
  }

  return (
    <CalculatorLayout
      title="Solar Savings Calculator"
      description="Estimate monthly savings, yearly savings, and payback period from solar power."
    >
      <form onSubmit={calculate} className="grid gap-5 sm:grid-cols-2">
        <div>
          <CalculatorInput label="Monthly electricity units" name="monthlyUnits" value={form.monthlyUnits} onChange={handleChange} />
          <ErrorMessage message={errors.monthlyUnits} />
        </div>

        <div>
          <CalculatorInput label="Solar units generated per month" name="solarUnits" value={form.solarUnits} onChange={handleChange} />
          <ErrorMessage message={errors.solarUnits} />
        </div>

        <div>
          <CalculatorInput label="Electricity rate per unit" name="rate" value={form.rate} onChange={handleChange} />
          <ErrorMessage message={errors.rate} />
        </div>

        <div>
          <CalculatorInput label="Solar system cost" name="systemCost" value={form.systemCost} onChange={handleChange} />
          <ErrorMessage message={errors.systemCost} />
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <Button type="submit">Calculate Solar Savings</Button>
          <Button variant="secondary" onClick={reset}>Reset</Button>
        </div>
      </form>

      <ResultGrid
        results={
          result
            ? [
                { label: "Solar Units Used", value: formatUnits(result.solarUnits) },
                { label: "Monthly Savings", value: formatMoney(result.monthlySavings) },
                { label: "Yearly Savings", value: formatMoney(result.yearlySavings) },
                { label: "Payback Period", value: `${result.paybackYears.toFixed(1)} years` },
              ]
            : []
        }
      />

      <FormulaBox>
        <p>Monthly savings = solar units generated × electricity rate</p>
        <p>Payback years = solar system cost ÷ yearly savings</p>
      </FormulaBox>
    </CalculatorLayout>
  );
}