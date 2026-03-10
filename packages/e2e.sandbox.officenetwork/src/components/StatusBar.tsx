import React from "react";
import type { LensMode } from "../utils/lensTheme.js";

interface StatusBarProps {
  officeCount: number;
  employeeCount: number;
  isLoadingOffices: boolean;
  isLoadingEmployees: boolean;
  lensMode: LensMode;
  selectedOffice: string | null;
  selectedEmployee: string | null;
}

const LENS_LABELS: Record<LensMode, string> = {
  offices: "Office View",
  employees: "People View",
  network: "Network Analysis",
  chain: "Reporting Chain",
  team: "Team Structure",
  reorg: "Reorganization Mode",
};

export function StatusBar({
  officeCount,
  employeeCount,
  isLoadingOffices,
  isLoadingEmployees,
  lensMode,
  selectedOffice,
  selectedEmployee,
}: StatusBarProps) {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const timeString = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const dateString = currentTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <footer className="h-7 flex items-center justify-between px-3 bg-[var(--officenetwork-bg-surface)] border-t border-[var(--officenetwork-border-default)] text-[10px]">
      {/* Left: Mode and Selection */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[var(--officenetwork-accent-cyan)]" />
          <span className="text-[var(--officenetwork-text-muted)] uppercase tracking-wider">
            {LENS_LABELS[lensMode]}
          </span>
        </div>

        {selectedOffice && (
          <div className="flex items-center gap-1.5 text-[var(--officenetwork-text-secondary)]">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 21h18M3 7v14m6-14v14m6-14v14m6-14v14M3 7l9-4 9 4" />
            </svg>
            <span>{selectedOffice}</span>
          </div>
        )}

        {selectedEmployee && (
          <div className="flex items-center gap-1.5 text-[var(--officenetwork-text-secondary)]">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span>{selectedEmployee}</span>
          </div>
        )}
      </div>

      {/* Right: Stats and Time */}
      <div className="flex items-center gap-4">
        {/* Data Stats */}
        <div className="flex items-center gap-3 text-[var(--officenetwork-text-muted)]">
          <div className="flex items-center gap-1">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 21h18M3 7v14m6-14v14m6-14v14m6-14v14M3 7l9-4 9 4" />
            </svg>
            <span className="tabular-nums">
              {isLoadingOffices ? "..." : officeCount}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="size-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            <span className="tabular-nums">
              {isLoadingEmployees ? "..." : employeeCount}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-3 bg-[var(--officenetwork-border-default)]" />

        {/* Time */}
        <div className="flex items-center gap-2 text-[var(--officenetwork-text-muted)] officenetwork-mono">
          <span>{dateString}</span>
          <span>{timeString}</span>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[var(--officenetwork-status-ready)]" />
          <span className="text-[var(--officenetwork-status-ready)] uppercase tracking-wider">
            Online
          </span>
        </div>
      </div>
    </footer>
  );
}
