"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorInput from "@/components/CalculatorInput";
import Button from "@/components/Button";
import ResultGrid from "@/components/ResultGrid";
import FormulaBox from "@/components/FormulaBox";
import ErrorMessage from "@/components/ErrorMessage";
import { validatePositiveNumbers, hasErrors } from "@/lib/validation";

export default function InverterBatteryUsageCalculatorPage() {
  const [form, setForm] = useState({
    batteryVoltage: "12",
    batteryAh: "150",
    loadWatts: "300",
    efficiency: "85",
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

    if (Number(form.loadWatts) === 0) {
      validationErrors.loadWatts = "Load watts cannot be zero.";
    }

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setResult(null);
      return;
    }

    setErrors({});

    const batteryWh = Number(form.batteryVoltage) * Number(form.batteryAh);
    const usableWh = batteryWh * (Number(form.efficiency) / 100);
    const backupHours = usableWh / Number(form.loadWatts);

    setResult({
      batteryWh,
      usableWh,
      backupHours,
    });
  }

  function reset() {
    setForm({
      batteryVoltage: "12",
      batteryAh: "150",
      loadWatts: "300",
      efficiency: "85",
    });
    setResult(null);
    setErrors({});
  }

  return (
    <CalculatorLayout
      title="Inverter/Battery Usage Calculator"
      description="Estimate inverter battery backup time based on battery capacity and load."
    >
      <form onSubmit={calculate} className="grid gap-5 sm:grid-cols-2">
        <div>
          <CalculatorInput label="Battery voltage" name="batteryVoltage" value={form.batteryVoltage} onChange={handleChange} />
          <ErrorMessage message={errors.batteryVoltage} />
        </div>

        <div>
          <CalculatorInput label="Battery Ah" name="batteryAh" value={form.batteryAh} onChange={handleChange} />
          <ErrorMessage message={errors.batteryAh} />
        </div>

        <div>
          <CalculatorInput label="Total load watts" name="loadWatts" value={form.loadWatts} onChange={handleChange} />
          <ErrorMessage message={errors.loadWatts} />
        </div>

        <div>
          <CalculatorInput label="Efficiency percentage" name="efficiency" value={form.efficiency} onChange={handleChange} />
          <ErrorMessage message={errors.efficiency} />
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <Button type="submit">Calculate Backup</Button>
          <Button variant="secondary" onClick={reset}>Reset</Button>
        </div>
      </form>

      <ResultGrid
        results={
          result
            ? [
                { label: "Battery Capacity", value: `${result.batteryWh.toFixed(2)} Wh` },
                { label: "Usable Energy", value: `${result.usableWh.toFixed(2)} Wh` },
                { label: "Backup Time", value: `${result.backupHours.toFixed(2)} hours` },
              ]
            : []
        }
      />

      <FormulaBox>
        <p>Battery Wh = battery voltage × battery Ah</p>
        <p>Backup time = usable battery Wh ÷ load watts</p>
      </FormulaBox>
    </CalculatorLayout>
  );
}