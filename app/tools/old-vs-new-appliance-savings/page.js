"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorInput from "@/components/CalculatorInput";
import Button from "@/components/Button";
import ResultGrid from "@/components/ResultGrid";
import FormulaBox from "@/components/FormulaBox";
import SimpleBarChart from "@/components/SimpleBarChart";
import ErrorMessage from "@/components/ErrorMessage";
import {
  calculateEnergyCost,
  formatMoney,
  formatUnits,
} from "@/lib/energyCalculations";
import { validatePositiveNumbers, hasErrors } from "@/lib/validation";

export default function OldVsNewApplianceSavingsPage() {
  const [form, setForm] = useState({
    oldWatts: "1500",
    newWatts: "900",
    hoursPerDay: "4",
    daysPerMonth: "30",
    rate: "8",
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

    const oldCost = calculateEnergyCost({
      watts: Number(form.oldWatts),
      hoursPerDay: Number(form.hoursPerDay),
      daysPerMonth: Number(form.daysPerMonth),
      rate: Number(form.rate),
    });

    const newCost = calculateEnergyCost({
      watts: Number(form.newWatts),
      hoursPerDay: Number(form.hoursPerDay),
      daysPerMonth: Number(form.daysPerMonth),
      rate: Number(form.rate),
    });

    setResult({
      oldCost,
      newCost,
      monthlySavings: oldCost.monthlyCost - newCost.monthlyCost,
      yearlySavings: oldCost.yearlyCost - newCost.yearlyCost,
      monthlyUnitsSaved: oldCost.monthlyUnits - newCost.monthlyUnits,
    });
  }

  function reset() {
    setForm({
      oldWatts: "1500",
      newWatts: "900",
      hoursPerDay: "4",
      daysPerMonth: "30",
      rate: "8",
    });
    setErrors({});
    setResult(null);
  }

  return (
    <CalculatorLayout
      title="Old vs New Appliance Savings"
      description="Compare an old appliance with a new efficient appliance and estimate your savings."
    >
      <form onSubmit={calculate} className="grid gap-5 sm:grid-cols-2">
        <div>
          <CalculatorInput label="Old appliance wattage" name="oldWatts" value={form.oldWatts} onChange={handleChange} />
          <ErrorMessage message={errors.oldWatts} />
        </div>

        <div>
          <CalculatorInput label="New appliance wattage" name="newWatts" value={form.newWatts} onChange={handleChange} />
          <ErrorMessage message={errors.newWatts} />
        </div>

        <div>
          <CalculatorInput label="Hours per day" name="hoursPerDay" value={form.hoursPerDay} onChange={handleChange} />
          <ErrorMessage message={errors.hoursPerDay} />
        </div>

        <div>
          <CalculatorInput label="Days per month" name="daysPerMonth" value={form.daysPerMonth} onChange={handleChange} />
          <ErrorMessage message={errors.daysPerMonth} />
        </div>

        <div>
          <CalculatorInput label="Electricity rate per unit" name="rate" value={form.rate} onChange={handleChange} />
          <ErrorMessage message={errors.rate} />
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <Button type="submit">Compare Savings</Button>
          <Button variant="secondary" onClick={reset}>Reset</Button>
        </div>
      </form>

      <ResultGrid
        results={
          result
            ? [
                { label: "Old Monthly Cost", value: formatMoney(result.oldCost.monthlyCost) },
                { label: "New Monthly Cost", value: formatMoney(result.newCost.monthlyCost) },
                { label: "Monthly Savings", value: formatMoney(result.monthlySavings) },
                { label: "Yearly Savings", value: formatMoney(result.yearlySavings) },
                { label: "Monthly Units Saved", value: formatUnits(result.monthlyUnitsSaved) },
              ]
            : []
        }
      />

      {result && (
        <SimpleBarChart
          items={[
            { label: "Old appliance", value: result.oldCost.monthlyCost },
            { label: "New appliance", value: result.newCost.monthlyCost },
          ]}
        />
      )}

      <FormulaBox>
        <p>Savings = old appliance cost - new appliance cost</p>
      </FormulaBox>
    </CalculatorLayout>
  );
}