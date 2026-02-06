import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  featureTag: string;
}

export function PageHeader(
  { title, description, featureTag }: PageHeaderProps,
) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-xl font-bold text-[var(--text-primary)] text-balance">
          {title}
        </h1>
        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-[var(--accent-violet)]/20 text-[var(--accent-violet)]">
          {featureTag}
        </span>
      </div>
      <p className="text-sm text-[var(--text-secondary)] text-pretty">
        {description}
      </p>
    </div>
  );
}
