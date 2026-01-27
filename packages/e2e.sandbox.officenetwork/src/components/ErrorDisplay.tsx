import React from "react";

interface ErrorDisplayProps {
  error: Error | undefined;
  fallbackMessage?: string;
}

export function ErrorDisplay({ error, fallbackMessage }: ErrorDisplayProps) {
  if (!error) return null;

  return (
    <div className="p-3 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
      {error.message || fallbackMessage || "An error occurred"}
    </div>
  );
}
