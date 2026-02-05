import React from "react";

interface DataCardProps {
  label: string;
  value: React.ReactNode;
  accent?: "cyan" | "violet" | "emerald" | "amber";
  onClick?: () => void;
  isSelected?: boolean;
}

export function DataCard(
  { label, value, accent = "cyan", onClick, isSelected }: DataCardProps,
) {
  const accentColors = {
    cyan: "var(--accent-cyan)",
    violet: "var(--accent-violet)",
    emerald: "var(--accent-emerald)",
    amber: "var(--accent-amber)",
  };

  const style = {
    "--card-accent": accentColors[accent],
  } as React.CSSProperties;

  return (
    <div
      style={style}
      onClick={onClick}
      className={`
        p-3 rounded border transition-all duration-150
        ${onClick ? "cursor-pointer" : ""}
        ${
        isSelected
          ? "bg-[color:var(--card-accent)]/10 border-[color:var(--card-accent)]/50"
          : "bg-[var(--bg-tertiary)] border-[var(--border-subtle)] hover:border-[var(--border-accent)]"
      }
      `}
    >
      <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] mb-1">
        {label}
      </div>
      <div className="text-sm text-[var(--text-primary)] font-medium truncate">
        {value}
      </div>
    </div>
  );
}

interface DataListProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
}

export function DataList({ children, columns = 1 }: DataListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-2`}>
      {children}
    </div>
  );
}
