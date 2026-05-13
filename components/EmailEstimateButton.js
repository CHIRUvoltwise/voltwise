"use client";

import { useState } from "react";
import Button from "./Button";

export default function EmailEstimateButton({ subject, body }) {
  const [copied, setCopied] = useState(false);

  async function copyEstimate() {
    try {
      await navigator.clipboard.writeText(
        `${subject}\n\n${body}`
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Button variant="secondary" onClick={copyEstimate}>
        {copied ? "Copied Estimate" : "Copy Estimate"}
      </Button>

      {copied && (
        <p className="mt-3 text-sm text-emerald-400">
          Estimate copied to clipboard.
        </p>
      )}
    </div>
  );
}