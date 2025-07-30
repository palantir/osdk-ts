import React from "react";
import { InlineSpinner } from "./InlineSpinner.js";

interface LoadingMessageProps {
  message?: string;
  showSpinner?: boolean;
}

export function LoadingMessage({
  message = "Loading...",
  showSpinner = true,
}: LoadingMessageProps) {
  return (
    <div className="text-sm italic flex items-center gap-2">
      {showSpinner && <InlineSpinner />}
      {message}
    </div>
  );
}
