export function validatePositiveNumbers(fields) {
  const errors = {};

  Object.entries(fields).forEach(([key, value]) => {
    if (value === "" || value === null || value === undefined) {
      errors[key] = "This field is required.";
      return;
    }

    if (Number(value) < 0) {
      errors[key] = "Value cannot be negative.";
      return;
    }
  });

  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}