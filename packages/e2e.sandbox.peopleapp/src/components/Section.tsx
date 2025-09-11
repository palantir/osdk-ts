import React from "react";

export function Section({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
