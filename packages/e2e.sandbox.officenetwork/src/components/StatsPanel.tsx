import { useOsdkFunction } from "@osdk/react/experimental";
import { fooEa } from "../generatedNoCheck2/index.js";
import { LoadingIndicator } from "./LoadingIndicator.js";

interface StatsPanelProps {
  officeCount: number;
  isLoadingOffices: boolean;
  employeeCount: number;
  isLoadingEmployees: boolean;
}

export function StatsPanel(
  { officeCount, isLoadingOffices, employeeCount, isLoadingEmployees }:
    StatsPanelProps,
) {
  const {
    data: fooResult,
    isLoading: fooLoading,
    error: fooError,
    refetch: refetchFoo,
  } = useOsdkFunction(fooEa, { params: undefined });

  return (
    <div className="bg-[var(--bg-secondary)]/95 backdrop-blur border border-[var(--border-subtle)] rounded-lg shadow-xl p-3 min-w-48">
      <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-2">
        Query Functions
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">fooEa</span>
          <div className="flex items-center gap-2">
            {fooLoading
              ? <LoadingIndicator size="sm" />
              : fooError
              ? (
                <span className="text-xs text-red-400" title={String(fooError)}>
                  Error
                </span>
              )
              : (
                <span className="text-sm font-bold tabular-nums text-[var(--accent-cyan)]">
                  {fooResult ?? "—"}
                </span>
              )}
            <button
              onClick={() => refetchFoo()}
              className="text-[10px] text-[var(--text-muted)] hover:text-[var(--accent-cyan)]"
              aria-label="Refetch query result"
            >
              <svg
                className="size-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-[var(--border-subtle)] space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">Offices</span>
          <div className="flex items-center gap-1">
            {isLoadingOffices && <LoadingIndicator size="sm" />}
            <span className="text-sm font-bold tabular-nums text-[var(--accent-emerald)]">
              {officeCount}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">Employees</span>
          <div className="flex items-center gap-1">
            {isLoadingEmployees && <LoadingIndicator size="sm" />}
            <span className="text-sm font-bold tabular-nums text-[var(--accent-violet)]">
              {employeeCount}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-2 text-[10px] text-[var(--text-muted)] font-mono">
        useOsdkFunction()
      </div>
    </div>
  );
}
