import React from "react";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import { useOfficeMap } from "../hooks/useOfficeMap.js";
import type { EmployeeChange, ReorgConfig } from "../hooks/useReorgState.js";
import { generateChanges } from "../utils/reorgAlgorithms.js";

interface ReorgPreviewStepProps {
  employees: Employee.OsdkInstance[];
  offices: Office.OsdkInstance[];
  selectedIds: Set<number>;
  changes: Map<number, EmployeeChange>;
  config: ReorgConfig;
  onSetAllChanges: (changes: Map<number, EmployeeChange>) => void;
  onSetChange: (employeeNumber: number, change: EmployeeChange) => void;
}

export function ReorgPreviewStep({
  employees,
  offices,
  selectedIds,
  changes,
  config,
  onSetAllChanges,
  onSetChange,
}: ReorgPreviewStepProps) {
  const selectedEmployees = React.useMemo(() => {
    return employees.filter((e) => selectedIds.has(e.employeeNumber));
  }, [employees, selectedIds]);

  const officeMap = useOfficeMap(offices);

  React.useEffect(() => {
    if (
      config.algorithm !== "manual" && changes.size === 0
      && selectedEmployees.length > 0
    ) {
      const generatedChanges = generateChanges(
        selectedEmployees,
        offices,
        config,
      );
      onSetAllChanges(generatedChanges);
    }
  }, [config, selectedEmployees, offices, changes.size, onSetAllChanges]);

  const changesWithEmployees = React.useMemo(() => {
    return selectedEmployees
      .map((employee) => ({
        employee,
        change: changes.get(employee.employeeNumber),
      }))
      .filter((item) => item.change !== undefined);
  }, [selectedEmployees, changes]);

  const summary = React.useMemo(() => {
    const officeChanges = new Set<string>();
    let totalMoves = 0;

    changesWithEmployees.forEach(({ employee, change }) => {
      if (
        change?.targetOfficeId
        && change.targetOfficeId !== employee.primaryOfficeId
      ) {
        totalMoves++;
        if (employee.primaryOfficeId) {
          officeChanges.add(employee.primaryOfficeId);
        }
        officeChanges.add(change.targetOfficeId);
      }
    });

    return { totalMoves, officesAffected: officeChanges.size };
  }, [changesWithEmployees]);

  return (
    <div className="flex flex-col h-full">
      {/* Summary */}
      <div className="p-4 border-b border-[var(--gotham-border-default)]">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-semibold text-[var(--gotham-status-warning)] tabular-nums">
              {summary.totalMoves}
            </div>
            <div className="text-xs text-[var(--gotham-text-muted)] gotham-mono">
              moves
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-[var(--gotham-accent-cyan)] tabular-nums">
              {summary.officesAffected}
            </div>
            <div className="text-xs text-[var(--gotham-text-muted)] gotham-mono">
              offices
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-[var(--gotham-hier-evp)] tabular-nums">
              {selectedIds.size}
            </div>
            <div className="text-xs text-[var(--gotham-text-muted)] gotham-mono">
              selected
            </div>
          </div>
        </div>
      </div>

      {/* Changes Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-[var(--gotham-bg-surface)] z-10">
            <tr className="border-b border-[var(--gotham-border-default)]">
              <th className="text-left px-4 py-2 gotham-section-label">
                Employee
              </th>
              <th className="text-left px-4 py-2 gotham-section-label">
                From
              </th>
              <th className="text-center px-2 py-2 text-xs font-semibold text-[var(--gotham-text-muted)]">
                →
              </th>
              <th className="text-left px-4 py-2 gotham-section-label">
                To
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--gotham-border-default)]">
            {changesWithEmployees.map(({ employee, change }) => {
              const fromOffice = employee.primaryOfficeId
                ? officeMap.get(employee.primaryOfficeId)
                : null;
              const toOffice = change?.targetOfficeId
                ? officeMap.get(change.targetOfficeId)
                : null;
              const hasOfficeChange = change?.targetOfficeId
                && change.targetOfficeId !== employee.primaryOfficeId;

              return (
                <tr
                  key={employee.employeeNumber}
                  className={hasOfficeChange
                    ? "bg-[var(--gotham-status-warning)]/5"
                    : ""}
                >
                  <td className="px-4 py-2">
                    <div className="font-medium text-[var(--gotham-text-primary)]">
                      {employee.fullName}
                    </div>
                    <div className="text-xs text-[var(--gotham-text-muted)]">
                      {employee.jobTitle}
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={hasOfficeChange
                        ? "text-[var(--gotham-status-error)]"
                        : "text-[var(--gotham-text-secondary)]"}
                    >
                      {fromOffice?.name ?? "—"}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-center text-[var(--gotham-text-muted)]">
                    {hasOfficeChange ? "→" : "—"}
                  </td>
                  <td className="px-4 py-2">
                    {config.algorithm === "manual"
                      ? (
                        <select
                          value={change?.targetOfficeId
                            ?? employee.primaryOfficeId ?? ""}
                          onChange={(e) =>
                            onSetChange(employee.employeeNumber, {
                              ...change,
                              targetOfficeId: e.target.value || undefined,
                            })}
                          className="w-full px-2 py-1 text-sm bg-[var(--gotham-bg-elevated)] border border-[var(--gotham-border-default)] rounded text-[var(--gotham-text-primary)]"
                        >
                          <option value="">No change</option>
                          {offices.map((office) => (
                            <option
                              key={office.primaryKey_}
                              value={office.primaryKey_}
                            >
                              {office.name}
                            </option>
                          ))}
                        </select>
                      )
                      : (
                        <span
                          className={hasOfficeChange
                            ? "text-[var(--gotham-status-ready)]"
                            : "text-[var(--gotham-text-secondary)]"}
                        >
                          {toOffice?.name ?? fromOffice?.name ?? "—"}
                        </span>
                      )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {changesWithEmployees.length === 0 && selectedIds.size > 0 && (
          <div className="text-center py-8">
            <p className="text-[var(--gotham-text-muted)] text-sm text-pretty mb-4">
              No changes configured yet
            </p>
            {config.algorithm === "manual" && (
              <p className="text-xs text-[var(--gotham-text-muted)]">
                Select target offices for each employee above
              </p>
            )}
          </div>
        )}

        {selectedIds.size === 0 && (
          <div className="text-center py-8">
            <p className="text-[var(--gotham-text-muted)] text-sm text-pretty">
              No employees selected
            </p>
            <p className="text-xs text-[var(--gotham-text-muted)] mt-1">
              Go back to select employees for the reorg
            </p>
          </div>
        )}
      </div>

      {/* Ready summary */}
      {summary.totalMoves > 0 && (
        <div className="p-3 border-t border-[var(--gotham-border-default)] bg-[var(--gotham-bg-elevated)]">
          <div className="text-xs text-[var(--gotham-text-muted)] gotham-mono text-pretty">
            Ready to move{" "}
            <span className="font-semibold text-[var(--gotham-status-warning)] tabular-nums">
              {summary.totalMoves}
            </span>{" "}
            employees across{" "}
            <span className="font-semibold tabular-nums">
              {summary.officesAffected}
            </span>{" "}
            offices
          </div>
        </div>
      )}
    </div>
  );
}
