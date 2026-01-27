import React from "react";
import type { Office } from "../generatedNoCheck2/index.js";

interface OfficeSelectorProps {
  offices: ReadonlyArray<Office.OsdkInstance>;
  selectedOffice: Office.OsdkInstance | null;
  onSelectOffice: (office: Office.OsdkInstance) => void;
  isLoading: boolean;
}

export function OfficeSelector({
  offices,
  selectedOffice,
  onSelectOffice,
  isLoading,
}: OfficeSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const office = offices.find((o) => o.primaryKey_ === e.target.value);
    if (office) {
      onSelectOffice(office);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <svg
        className="size-4 text-[var(--accent-cyan)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
      <select
        value={selectedOffice?.primaryKey_ ?? ""}
        onChange={handleChange}
        disabled={isLoading || offices.length === 0}
        aria-label="Select an office"
        className="appearance-none bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg px-3 py-1.5 pr-8 text-sm text-[var(--text-primary)] cursor-pointer focus:outline-none focus:border-[var(--accent-cyan)] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          backgroundSize: "1rem",
        }}
      >
        <option value="" disabled>
          {isLoading ? "Loading..." : "Select Office"}
        </option>
        {offices.map((office) => (
          <option key={office.primaryKey_} value={office.primaryKey_}>
            {office.name ?? "Unnamed Office"}
          </option>
        ))}
      </select>
    </div>
  );
}
