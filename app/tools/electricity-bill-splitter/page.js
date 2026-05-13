"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import CalculatorInput from "@/components/CalculatorInput";
import Button from "@/components/Button";
import ResultGrid from "@/components/ResultGrid";
import ErrorMessage from "@/components/ErrorMessage";
import FormulaBox from "@/components/FormulaBox";
import { formatMoney } from "@/lib/energyCalculations";
import { validatePositiveNumbers, hasErrors } from "@/lib/validation";

export default function ElectricityBillSplitterPage() {
  const [form, setForm] = useState({
    totalBill: "3000",
    people: "3",
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function calculate(event) {
    event.preventDefault();

    const validationErrors = validatePositiveNumbers({
      totalBill: form.totalBill,
      people: form.people,
    });

    if (Number(form.people) === 0) {
      validationErrors.people = "People cannot be zero.";
    }

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      setResult(null);
      return;
    }

    setErrors({});

    const share = Number(form.totalBill) / Number(form.people);
    setResult(share);
  }

  function reset() {
    setForm({
      totalBill: "3000",
      people: "3",
    });
    setResult(null);
    setErrors({});
  }

  return (
    <CalculatorLayout
      title="Electricity Bill Splitter"
      description="Split your electricity bill equally between roommates, tenants, or family members."
    >
      <form onSubmit={calculate} className="grid gap-5 sm:grid-cols-2">
        <div>
          <CalculatorInput
            label="Total electricity bill"
            name="totalBill"
            value={form.totalBill}
            onChange={handleChange}
            placeholder="Example: 3000"
          />
          <ErrorMessage message={errors.totalBill} />
        </div>

        <div>
          <CalculatorInput
            label="Number of people"
            name="people"
            value={form.people}
            onChange={handleChange}
            placeholder="Example: 3"
          />
          <ErrorMessage message={errors.people} />
        </div>

        <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <Button type="submit">Split Bill</Button>
          <Button variant="secondary" onClick={reset}>
            Reset
          </Button>
        </div>
      </form>

      <ResultGrid
        results={
          result
            ? [
                {
                  label: "Each person pays",
                  value: formatMoney(result),
                },
              ]
            : []
        }
      />

      <FormulaBox>
        <p>Each person pays = total bill ÷ number of people</p>
      </FormulaBox>
    </CalculatorLayout>
  );
}