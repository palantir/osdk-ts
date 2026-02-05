import { useOsdkAggregation } from "@osdk/react/experimental";
import React from "react";
import { Employee } from "../generatedNoCheck2/index.js";
import { LoadingIndicator } from "./LoadingIndicator.js";

export function AggregationStatsPanel() {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const {
    data: totalCounts,
    isLoading: totalLoading,
    error: totalError,
    refetch: refetchTotal,
  } = useOsdkAggregation(Employee, {
    aggregate: {
      $select: {
        $count: "unordered",
      },
    },
  });

  const {
    data: byDepartment,
    isLoading: deptLoading,
    error: deptError,
    refetch: refetchDept,
  } = useOsdkAggregation(Employee, {
    aggregate: {
      $select: {
        $count: "unordered",
      },
      $groupBy: {
        department: "exact",
      },
    },
  });

  const {
    data: byOffice,
    isLoading: officeLoading,
    error: officeError,
    refetch: refetchOffice,
  } = useOsdkAggregation(Employee, {
    aggregate: {
      $select: {
        $count: "unordered",
      },
      $groupBy: {
        primaryOfficeId: "exact",
      },
    },
  });

  const isLoading = totalLoading || deptLoading || officeLoading;
  const hasError = totalError || deptError || officeError;

  const handleRefresh = () => {
    refetchTotal();
    refetchDept();
    refetchOffice();
  };

  const departmentData = React.useMemo(() => {
    if (!byDepartment) return [];
    return [...byDepartment]
      .filter((d) => d.$group.department)
      .sort((a, b) => (b.$count ?? 0) - (a.$count ?? 0))
      .slice(0, 5);
  }, [byDepartment]);

  const officeData = React.useMemo(() => {
    if (!byOffice) return [];
    return [...byOffice]
      .filter((d) => d.$group.primaryOfficeId)
      .sort((a, b) => (b.$count ?? 0) - (a.$count ?? 0))
      .slice(0, 5);
  }, [byOffice]);

  return (
    <div className="bg-[var(--officenetwork-bg-surface)]/95 backdrop-blur border border-[var(--officenetwork-border-default)] rounded-lg shadow-xl min-w-56">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-[var(--officenetwork-bg-elevated)]/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg
            className={`size-3 text-[var(--officenetwork-text-muted)] transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5l8 7-8 7V5z" />
          </svg>
          <span className="text-[10px] text-[var(--officenetwork-text-muted)] uppercase tracking-wider font-semibold">
            Aggregations
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isLoading && <LoadingIndicator size="sm" />}
          {hasError && (
            <span className="size-2 rounded-full bg-[var(--officenetwork-status-error)]" />
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRefresh();
            }}
            className="p-1 rounded hover:bg-[var(--officenetwork-bg-elevated)] text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-accent-cyan)]"
            aria-label="Refresh aggregations"
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
      </button>

      {isExpanded && (
        <div className="px-3 pb-3 space-y-3">
          <div className="space-y-1">
            <div className="text-[9px] text-[var(--officenetwork-accent-cyan)] uppercase tracking-wider">
              Total Count
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--officenetwork-text-muted)]">
                Employees
              </span>
              {totalLoading
                ? <LoadingIndicator size="sm" />
                : totalError
                ? (
                  <span className="text-xs text-[var(--officenetwork-status-error)]">
                    Error
                  </span>
                )
                : (
                  <span className="text-sm font-bold tabular-nums text-[var(--officenetwork-accent-cyan)]">
                    {totalCounts?.$count ?? 0}
                  </span>
                )}
            </div>
          </div>

          <div className="border-t border-[var(--officenetwork-border-muted)] pt-2 space-y-1">
            <div className="text-[9px] text-[var(--officenetwork-status-warning)] uppercase tracking-wider">
              By Department (Top 5)
            </div>
            {deptLoading
              ? <LoadingIndicator size="sm" />
              : deptError
              ? (
                <span className="text-xs text-[var(--officenetwork-status-error)]">
                  Error
                </span>
              )
              : departmentData.length > 0
              ? (
                <div className="space-y-0.5">
                  {departmentData.map((item, index) => (
                    <div
                      key={item.$group.department ?? `dept-${index}`}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[10px] text-[var(--officenetwork-text-secondary)] truncate max-w-32">
                        {item.$group.department}
                      </span>
                      <span className="text-[10px] font-medium tabular-nums text-[var(--officenetwork-status-warning)]">
                        {item.$count}
                      </span>
                    </div>
                  ))}
                </div>
              )
              : (
                <span className="text-[10px] text-[var(--officenetwork-text-muted)]">
                  No data
                </span>
              )}
          </div>

          <div className="border-t border-[var(--officenetwork-border-muted)] pt-2 space-y-1">
            <div className="text-[9px] text-[var(--officenetwork-status-ready)] uppercase tracking-wider">
              By Office (Top 5)
            </div>
            {officeLoading
              ? <LoadingIndicator size="sm" />
              : officeError
              ? (
                <span className="text-xs text-[var(--officenetwork-status-error)]">
                  Error
                </span>
              )
              : officeData.length > 0
              ? (
                <div className="space-y-0.5">
                  {officeData.map((item, index) => (
                    <div
                      key={item.$group.primaryOfficeId ?? `office-${index}`}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[10px] text-[var(--officenetwork-text-secondary)] truncate max-w-32 officenetwork-mono">
                        {item.$group.primaryOfficeId}
                      </span>
                      <span className="text-[10px] font-medium tabular-nums text-[var(--officenetwork-status-ready)]">
                        {item.$count}
                      </span>
                    </div>
                  ))}
                </div>
              )
              : (
                <span className="text-[10px] text-[var(--officenetwork-text-muted)]">
                  No data
                </span>
              )}
          </div>

          <div className="pt-1 text-[9px] text-[var(--officenetwork-text-muted)] officenetwork-mono">
            useOsdkAggregation()
          </div>
        </div>
      )}
    </div>
  );
}
