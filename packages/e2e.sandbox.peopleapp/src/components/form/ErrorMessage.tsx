import React from "react";

interface ErrorMessageProps {
  error: unknown;
  className?: string;
}

export function ErrorMessage({ error, className = "" }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <div className={`mb-4 p-2 bg-red-100 text-red-700 rounded ${className}`}>
      <pre className="text-xs whitespace-pre-wrap">
        {typeof error === "string"
          ? error
          : JSON.stringify(error, null, 2)}
      </pre>
    </div>
  );
}
