import React from "react";

export function InlineSpinner({ isLoading = true }: { isLoading?: boolean }) {
  return (
    <div className="inline">
      {isLoading
        ? (
          <div className="mx-1 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent">
          </div>
        )
        : <div className="mx-1 w-4 h-4"></div>}
    </div>
  );
}
