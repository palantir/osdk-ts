import { useLinks } from "@osdk/react";
import React from "react";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import {
  getHierarchyLevel,
  HIERARCHY_COLORS,
  HIERARCHY_LABELS,
} from "../utils/hierarchy.js";
import { LoadingIndicator } from "./LoadingIndicator.js";

interface MultiOfficeLinksPanelProps {
  offices: Office.OsdkInstance[];
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
}

export function MultiOfficeLinksPanel(
  { offices, onSelectEmployee }: MultiOfficeLinksPanelProps,
) {
  const {
    links: allOccupants,
    linkedObjectsBySourcePrimaryKey,
    isLoading,
    error,
  } = useLinks(
    offices,
    "occupants",
  );

  const [expandedOffices, setExpandedOffices] = React.useState<
    Set<string>
  >(() => new Set());

  const toggleOffice = React.useCallback((officeId: string) => {
    setExpandedOffices((prev) => {
      const next = new Set(prev);
      if (next.has(officeId)) {
        next.delete(officeId);
      } else {
        next.add(officeId);
      }
      return next;
    });
  }, []);

  return (
    <div className="h-full flex flex-col bg-[var(--officenetwork-bg-surface)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
        <div className="officenetwork-section-label text-[var(--officenetwork-accent-cyan)] mb-1">
          Multi-Office Links
        </div>
        <div className="flex items-center gap-3">
          <div className="text-2xl font-semibold tabular-nums text-[var(--officenetwork-text-primary)]">
            {offices.length}
          </div>
          <div>
            <div className="text-xs text-[var(--officenetwork-text-secondary)]">
              Offices
            </div>
          </div>
          <div className="text-2xl font-semibold tabular-nums text-[var(--officenetwork-status-ready)]">
            {allOccupants?.length ?? 0}
          </div>
          <div>
            <div className="text-xs text-[var(--officenetwork-text-secondary)]">
              Employees
            </div>
          </div>
          {isLoading && <LoadingIndicator size="sm" />}
          {error && (
            <span className="officenetwork-badge officenetwork-badge-error">
              Error
            </span>
          )}
        </div>
      </div>

      {/* Office sections */}
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          {offices.map((office) => {
            const officeEmployees = linkedObjectsBySourcePrimaryKey.get(
              office.primaryKey_,
            );
            const count = officeEmployees?.length ?? 0;
            const isExpanded = expandedOffices.has(office.primaryKey_);

            return (
              <div
                key={office.primaryKey_}
                className="mb-1"
              >
                <button
                  onClick={() => toggleOffice(office.primaryKey_)}
                  className="w-full text-left px-3 py-2 rounded hover:bg-[var(--officenetwork-bg-elevated)] transition-colors flex items-center gap-2"
                >
                  <span className="text-[10px] text-[var(--officenetwork-text-muted)]">
                    {isExpanded ? "▼" : "▶"}
                  </span>
                  <span className="size-2 rounded-sm shrink-0 bg-[var(--officenetwork-accent-cyan)]" />
                  <span className="text-sm text-[var(--officenetwork-text-primary)] flex-1 truncate">
                    {office.name ?? "Unnamed Office"}
                  </span>
                  <span className="text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono tabular-nums">
                    {count}
                  </span>
                </button>

                {isExpanded && officeEmployees && officeEmployees.length > 0
                  && (
                    <div className="ml-5 space-y-px">
                      {officeEmployees.map((emp) => {
                        const level = getHierarchyLevel(emp.jobTitle);
                        return (
                          <button
                            key={emp.employeeNumber}
                            onClick={() => onSelectEmployee(emp)}
                            className="w-full text-left px-3 py-1.5 rounded hover:bg-[var(--officenetwork-bg-elevated)] transition-colors group flex items-center gap-2"
                          >
                            <div
                              className="size-1.5 rounded-sm shrink-0"
                              style={{
                                backgroundColor: HIERARCHY_COLORS[level],
                              }}
                            />
                            <span className="text-xs text-[var(--officenetwork-text-secondary)] group-hover:text-[var(--officenetwork-accent-cyan)] truncate flex-1">
                              {emp.fullName
                                ?? `Employee #${emp.employeeNumber}`}
                            </span>
                            <span
                              className="text-[9px] officenetwork-mono uppercase tracking-wider shrink-0"
                              style={{ color: HIERARCHY_COLORS[level] }}
                            >
                              {HIERARCHY_LABELS[level]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                {isExpanded
                  && (!officeEmployees || officeEmployees.length === 0)
                  && !isLoading && (
                  <div className="ml-5 px-3 py-2 text-[10px] text-[var(--officenetwork-text-muted)]">
                    No employees
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-base)]">
        <div className="text-[10px] text-[var(--officenetwork-text-muted)] officenetwork-mono flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[var(--officenetwork-accent-cyan)]" />
          <span>
            useLinks(offices[], "occupants") + linkedObjectsBySourcePrimaryKey
          </span>
        </div>
      </div>
    </div>
  );
}
