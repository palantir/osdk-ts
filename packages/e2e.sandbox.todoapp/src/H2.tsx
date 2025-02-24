import React from "react";

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-bold border-b-1 mb-2 flex items-center">{children}</h2>
  );
}

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="mb-6 text-xl">{children}</h1>;
}
