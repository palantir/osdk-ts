import React from "react";

interface SpinnerProps {
  className?: string;
}

export function Spinner({ className = "" }: SpinnerProps): React.ReactElement {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="size-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
