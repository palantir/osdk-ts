import React from "react";

interface SuccessMessageProps {
  show: boolean;
  message?: string;
  className?: string;
}

export function SuccessMessage({
  show,
  message = "Operation completed successfully!",
  className = "",
}: SuccessMessageProps) {
  if (!show) return null;

  return (
    <div
      className={`mb-4 p-2 bg-green-100 text-green-700 rounded ${className}`}
    >
      {message}
    </div>
  );
}
