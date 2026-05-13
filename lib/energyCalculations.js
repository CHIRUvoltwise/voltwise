export function calculateEnergyCost({ watts, hoursPerDay, daysPerMonth, rate }) {
  const powerKw = watts / 1000;
  const dailyUnits = powerKw * hoursPerDay;
  const monthlyUnits = dailyUnits * daysPerMonth;
  const yearlyUnits = dailyUnits * 365;

  const dailyCost = dailyUnits * rate;
  const monthlyCost = monthlyUnits * rate;
  const yearlyCost = yearlyUnits * rate;

  return {
    dailyUnits,
    monthlyUnits,
    yearlyUnits,
    dailyCost,
    monthlyCost,
    yearlyCost,
  };
}

export function formatMoney(value) {
  return `₹${Number(value || 0).toFixed(2)}`;
}

export function formatUnits(value) {
  return `${Number(value || 0).toFixed(2)} kWh`;
}