import { useLinks, useOsdkAggregation } from "@osdk/react/experimental";
import { Employee } from "../generatedNoCheck2/index.js";
import type { Office } from "../generatedNoCheck2/index.js";
import {
  getHierarchyLevel,
  HIERARCHY_COLORS,
  HIERARCHY_LABELS,
} from "../utils/hierarchy.js";
import { LoadingIndicator } from "./LoadingIndicator.js";

interface OfficePanelProps {
  office: Office.OsdkInstance;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
  onClose: () => void;
}

export function OfficePanel(
  { office, onSelectEmployee, onClose }: OfficePanelProps,
) {
  const { links: occupants, isLoading, error } = useLinks(office, "occupants");

  const {
    data: occupantAgg,
    isLoading: aggLoading,
    error: aggError,
  } = useOsdkAggregation(Employee, {
    where: { primaryOfficeId: office.primaryKey_ },
    aggregate: {
      $select: {
        $count: "unordered",
      },
    },
  });

  const aggregatedCount = occupantAgg?.$count;

  const coords = office.location
    ? `${office.location.coordinates[1].toFixed(4)}, ${
      office.location.coordinates[0].toFixed(4)
    }`
    : "No coordinates";

  return (
    <div className="h-full flex flex-col bg-[var(--gotham-bg-surface)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--gotham-border-default)] flex items-start justify-between">
        <div>
          <div className="gotham-section-label text-[var(--gotham-accent-cyan)] mb-1">
            Office
          </div>
          <h2 className="text-lg font-semibold text-[var(--gotham-text-primary)]">
            {office.name ?? "Unnamed Office"}
          </h2>
          <div className="text-xs text-[var(--gotham-text-muted)] mt-1 gotham-mono">
            {coords}
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[var(--gotham-text-muted)] hover:text-[var(--gotham-text-primary)] hover:bg-[var(--gotham-bg-elevated)] rounded transition-colors"
          aria-label="Close office panel"
        >
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Stats */}
      <div className="p-4 border-b border-[var(--gotham-border-default)]">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-semibold tabular-nums text-[var(--gotham-status-ready)]">
            {occupants?.length ?? 0}
          </div>
          <div>
            <div className="text-xs text-[var(--gotham-text-secondary)]">
              Employees
            </div>
            <div className="text-[10px] text-[var(--gotham-text-muted)] gotham-mono">
              useLinks
            </div>
          </div>
          {isLoading && <LoadingIndicator size="sm" />}
          {error && (
            <span className="gotham-badge gotham-badge-error">Error</span>
          )}
        </div>
      </div>

      {/* Occupants List */}
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <div className="gotham-section-label px-2 py-2">
            Occupants
          </div>
          {occupants && occupants.length > 0
            ? (
              <div className="space-y-px">
                {occupants.map((emp) => {
                  const level = getHierarchyLevel(emp.jobTitle);
                  return (
                    <button
                      key={emp.employeeNumber}
                      onClick={() => onSelectEmployee(emp)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-[var(--gotham-bg-elevated)] transition-colors group flex items-center gap-3"
                    >
                      <div
                        className="size-2 rounded-sm shrink-0"
                        style={{ backgroundColor: HIERARCHY_COLORS[level] }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-[var(--gotham-text-primary)] group-hover:text-[var(--gotham-accent-cyan)] truncate">
                          {emp.fullName ?? `Employee #${emp.employeeNumber}`}
                        </div>
                        <div className="text-[10px] text-[var(--gotham-text-muted)] flex items-center gap-2">
                          <span>{emp.jobTitle ?? "No title"}</span>
                          <span
                            className="uppercase tracking-wider"
                            style={{ color: HIERARCHY_COLORS[level] }}
                          >
                            {HIERARCHY_LABELS[level]}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )
            : !isLoading
            ? (
              <div className="px-3 py-8 text-center">
                <div className="text-sm text-[var(--gotham-text-muted)]">
                  No employees at this office
                </div>
              </div>
            )
            : null}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[var(--gotham-border-default)] bg-[var(--gotham-bg-base)]">
        <div className="text-[10px] text-[var(--gotham-text-muted)] gotham-mono flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--gotham-accent-cyan)]" />
          <span>Office → occupants</span>
        </div>
      </div>
    </div>
  );
}
