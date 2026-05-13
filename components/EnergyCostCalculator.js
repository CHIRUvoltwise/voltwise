"use client";

import EmailEstimateButton from "./EmailEstimateButton";
import SaveCalculationButton from "./SaveCalculationButton";
import { useState } from "react";
import CalculatorInput from "./CalculatorInput";
import CalculatorSlider from "./CalculatorSlider";
import Button from "./Button";
import ResultGrid from "./ResultGrid";
import FormulaBox from "./FormulaBox";
import SimpleBarChart from "./SimpleBarChart";
import ErrorMessage from "./ErrorMessage";
import {
  calculateEnergyCost,
  formatMoney,
  formatUnits,
} from "@/lib/energyCalculations";
import { validatePositiveNumbers, hasErrors } from "@/lib/validation";

export default function EnergyCostCalculator({
  defaultName = "Appliance",
  defaultWatts = "1000",
  defaultHours = "4",
  defaultDays = "30",
  defaultRate = "8",
}) {
  const [form, setForm] = useState({
    name: defaultName,
    watts: defaultWatts,
    hoursPerDay: defaultHours,
    daysPerMonth: defaultDays,
    rate: defaultRate,
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCalculate(event) {
    event.preventDefault();
    setLoading(true);

    const validationErrors = validatePositiveNumbers({
      watts: form.watts,
      hoursPerDay: form.hoursPerDay,
      daysPerMonth: form.daysPerMonth,
      rate: form.rate,
    });

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setResult(null);
      setLoading(false);
      return;
    }

    setErrors({});

    const calculated = calculateEnergyCost({
      watts: Number(form.watts),
      hoursPerDay: Number(form.hoursPerDay),
      daysPerMonth: Number(form.daysPerMonth),
      rate: Number(form.rate),
    });

    setTimeout(() => {
      setResult(calculated);
      setLoading(false);
    }, 300);
  }

  function handleReset() {
    setForm({
      name: defaultName,
      watts: defaultWatts,
      hoursPerDay: defaultHours,
      daysPerMonth: defaultDays,
      rate: defaultRate,
    });

    setErrors({});
    setResult(null);
  }

  const resultCards = result
    ? [
        { label: "Daily Units", value: formatUnits(result.dailyUnits) },
        { label: "Monthly Units", value: formatUnits(result.monthlyUnits) },
        { label: "Yearly Units", value: formatUnits(result.yearlyUnits) },
        { label: "Daily Cost", value: formatMoney(result.dailyCost) },
        { label: "Monthly Cost", value: formatMoney(result.monthlyCost) },
        { label: "Yearly Cost", value: formatMoney(result.yearlyCost) },
      ]
    : [];

  const chartItems = result
    ? [
        { label: "Daily", value: result.dailyCost },
        { label: "Monthly", value: result.monthlyCost },
        { label: "Yearly", value: result.yearlyCost },
      ]
    : [];

  return (
    <div>
      <form onSubmit={handleCalculate} className="grid gap-6 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-slate-300">Appliance Name</span>
          <input
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Example: Fan, AC, TV"
          />
        </label>

        <div>
          <CalculatorInput
            label="Wattage"
            name="watts"
            value={form.watts}
            onChange={handleChange}
            placeholder="Example: 1000"
          />
          <ErrorMessage message={errors.watts} />
        </div>

        <div>
          <CalculatorInput
            label="Electricity rate per unit"
            name="rate"
            value={form.rate}
            onChange={handleChange}
            placeholder="Example: 8"
          />
          <ErrorMessage message={errors.rate} />
        </div>

        <div>
          <CalculatorSlider
            label="Hours per day"
            name="hoursPerDay"
            value={form.hoursPerDay}
            onChange={handleChange}
            min="0"
            max="24"
            step="0.5"
          />
          <ErrorMessage message={errors.hoursPerDay} />
        </div>

        <div>
          <CalculatorSlider
            label="Days per month"
            name="daysPerMonth"
            value={form.daysPerMonth}
            onChange={handleChange}
            min="1"
            max="31"
          />
          <ErrorMessage message={errors.daysPerMonth} />
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <Button type="submit">
            {loading ? "Calculating..." : "Calculate Cost"}
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>

      <ResultGrid results={resultCards} />

      <SimpleBarChart items={chartItems} />
{result && (
  <div className="mt-5">
    <EmailEstimateButton
      subject={`VoltWise Estimate for ${form.name}`}
      body={`VoltWise Estimate\n\nAppliance: ${form.name}\nWatts: ${form.watts}\nHours/day: ${form.hoursPerDay}\nDays/month: ${form.daysPerMonth}\nRate: ${form.rate}\nMonthly Cost: ${formatMoney(result.monthlyCost)}\nYearly Cost: ${formatMoney(result.yearlyCost)}`}
    />
  </div>
)}
{result && (
  <SaveCalculationButton
    payload={{
      calculator_name: form.name,
      appliance_name: form.name,
      watts: Number(form.watts),
      hours_per_day: Number(form.hoursPerDay),
      days_per_month: Number(form.daysPerMonth),
      electricity_rate: Number(form.rate),
      monthly_cost: result.monthlyCost,
    }}
  />
)}
      <FormulaBox>
        <p>Units used = watts ÷ 1000 × hours per day × days</p>
        <p>Cost = units used × electricity rate</p>
      </FormulaBox>
    </div>
  );
}