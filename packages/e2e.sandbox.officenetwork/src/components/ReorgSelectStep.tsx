import React, { startTransition } from "react";
import type { Employee, Office } from "../generatedNoCheck2/index.js";
import { useOfficeMap } from "../hooks/useOfficeMap.js";
import type { ReorgConfig } from "../hooks/useReorgState.js";

interface ReorgSelectStepProps {
  employees: Employee.OsdkInstance[];
  offices: Office.OsdkInstance[];
  selectedIds: Set<number>;
  config: ReorgConfig;
  onToggleEmployee: (employeeNumber: number) => void;
  onSelectAll: (employeeNumbers: number[]) => void;
  onSelectByOffice: (employeeNumbers: number[]) => void;
  onClearSelection: () => void;
}

export function ReorgSelectStep({
  employees,
  offices,
  selectedIds,
  config,
  onToggleEmployee,
  onSelectAll,
  onSelectByOffice,
  onClearSelection,
}: ReorgSelectStepProps) {
  const [filterOffice, setFilterOffice] = React.useState<string>("");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredEmployees = React.useMemo(() => {
    let result = employees;

    if (config.algorithm === "swap" && config.swapOfficeIds) {
      const [officeA, officeB] = config.swapOfficeIds;
      result = result.filter(
        (e) => e.primaryOfficeId === officeA || e.primaryOfficeId === officeB,
      );
    }

    if (filterOffice) {
      result = result.filter((e) => e.primaryOfficeId === filterOffice);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.fullName?.toLowerCase().includes(query)
          || e.emailPrimaryWork?.toLowerCase().includes(query)
          || e.team?.toLowerCase().includes(query),
      );
    }

    return result.sort((a, b) =>
      (a.fullName ?? "").localeCompare(b.fullName ?? "")
    );
  }, [
    employees,
    filterOffice,
    searchQuery,
    config.algorithm,
    config.swapOfficeIds,
  ]);

  const handleSelectAll = React.useCallback(() => {
    startTransition(() => {
      onSelectAll(filteredEmployees.map((e) => e.employeeNumber));
    });
  }, [filteredEmployees, onSelectAll]);

  const handleSelectByOffice = React.useCallback(
    (officeId: string) => {
      startTransition(() => {
        const officeEmployees = employees
          .filter((e) => e.primaryOfficeId === officeId)
          .map((e) => e.employeeNumber);
        onSelectByOffice(officeEmployees);
      });
    },
    [employees, onSelectByOffice],
  );

  const officeMap = useOfficeMap(offices);

  const employeesByOffice = React.useMemo(() => {
    const map = new Map<string, number>();
    employees.forEach((e) => {
      if (e.primaryOfficeId) {
        map.set(e.primaryOfficeId, (map.get(e.primaryOfficeId) ?? 0) + 1);
      }
    });
    return map;
  }, [employees]);

  const selectedByOffice = React.useMemo(() => {
    const map = new Map<string, number>();
    employees.forEach((e) => {
      if (selectedIds.has(e.employeeNumber) && e.primaryOfficeId) {
        map.set(e.primaryOfficeId, (map.get(e.primaryOfficeId) ?? 0) + 1);
      }
    });
    return map;
  }, [employees, selectedIds]);

  return (
    <div className="flex flex-col h-full">
      {/* Filters */}
      <div className="p-4 border-b border-[var(--officenetwork-border-default)] space-y-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-default)] rounded text-[var(--officenetwork-text-primary)] placeholder:text-[var(--officenetwork-text-muted)]"
          />
          <select
            value={filterOffice}
            onChange={(e) => setFilterOffice(e.target.value)}
            className="px-3 py-1.5 text-sm bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-default)] rounded text-[var(--officenetwork-text-primary)]"
          >
            <option value="">All offices</option>
            {offices.map((office) => (
              <option key={office.primaryKey_} value={office.primaryKey_}>
                {office.name} ({employeesByOffice.get(office.primaryKey_) ?? 0})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleSelectAll}
            className="px-2.5 py-1 text-xs font-medium text-[var(--officenetwork-status-warning)] border border-[var(--officenetwork-status-warning)]/30 rounded hover:bg-[var(--officenetwork-status-warning)]/10 transition-colors"
          >
            Select All ({filteredEmployees.length})
          </button>
          <button
            onClick={onClearSelection}
            disabled={selectedIds.size === 0}
            className="px-2.5 py-1 text-xs font-medium text-[var(--officenetwork-text-muted)] border border-[var(--officenetwork-border-default)] rounded hover:text-[var(--officenetwork-text-primary)] hover:border-[var(--officenetwork-text-muted)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
          {offices.slice(0, 3).map((office) => (
            <button
              key={office.primaryKey_}
              onClick={() => handleSelectByOffice(office.primaryKey_)}
              className="px-2.5 py-1 text-xs font-medium text-[var(--officenetwork-text-secondary)] border border-[var(--officenetwork-border-default)] rounded hover:text-[var(--officenetwork-text-primary)] hover:border-[var(--officenetwork-text-muted)] transition-colors"
            >
              + {office.name}
            </button>
          ))}
        </div>
      </div>

      {/* Employee List */}
      <div className="flex-1 overflow-auto">
        <div className="divide-y divide-[var(--officenetwork-border-default)]">
          {filteredEmployees.map((employee) => {
            const isSelected = selectedIds.has(employee.employeeNumber);
            const office = employee.primaryOfficeId
              ? officeMap.get(employee.primaryOfficeId)
              : null;

            return (
              <label
                key={employee.employeeNumber}
                className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[var(--officenetwork-status-warning)]/10"
                    : "hover:bg-[var(--officenetwork-bg-elevated)]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onToggleEmployee(employee.employeeNumber)}
                  className="accent-[var(--officenetwork-status-warning)]"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[var(--officenetwork-text-primary)] truncate">
                    {employee.fullName ?? `Employee ${employee.employeeNumber}`}
                  </div>
                  <div className="text-xs text-[var(--officenetwork-text-muted)] truncate">
                    {employee.jobTitle ?? "Unknown role"}
                    {office && (
                      <span className="ml-2 text-[var(--officenetwork-accent-cyan)]">
                        @ {office.name}
                      </span>
                    )}
                  </div>
                </div>
                {employee.team && (
                  <span className="text-xs text-[var(--officenetwork-text-muted)] bg-[var(--officenetwork-bg-elevated)] px-2 py-0.5 rounded officenetwork-mono">
                    {employee.team}
                  </span>
                )}
              </label>
            );
          })}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[var(--officenetwork-text-muted)] text-sm text-pretty">
              No employees match your filters
            </p>
          </div>
        )}
      </div>

      {/* Selection summary */}
      {selectedIds.size > 0 && (
        <div className="p-3 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-elevated)]">
          <div className="text-xs text-[var(--officenetwork-text-muted)] officenetwork-mono">
            <span className="font-semibold text-[var(--officenetwork-status-warning)] tabular-nums">
              {selectedIds.size}
            </span>{" "}
            employees selected across{" "}
            <span className="font-semibold tabular-nums">
              {selectedByOffice.size}
            </span>{" "}
            offices
          </div>
        </div>
      )}
    </div>
  );
}
