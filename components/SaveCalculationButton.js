"use client";

import { useState } from "react";
import Button from "./Button";

export default function SaveCalculationButton({ payload }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSave() {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/save-calculation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("✅ Calculation saved successfully.");
      } else {
        setMessage(`❌ Failed: ${result.error}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-5">
      <Button onClick={handleSave}>
        {loading ? "Saving..." : "Save Calculation"}
      </Button>

      {message && (
        <p className="mt-3 text-sm text-emerald-400">{message}</p>
      )}
    </div>
  );
}