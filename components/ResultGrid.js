import ResultCard from "./ResultCard";

export default function ResultGrid({ results }) {
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <ResultCard
          key={result.label}
          label={result.label}
          value={result.value}
        />
      ))}
    </div>
  );
}