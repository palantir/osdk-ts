import React from "react";

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold border-b-1 mb-2 flex">{children}</h2>;
}
