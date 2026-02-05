import React from "react";
import type { Employee, Office } from "../generatedNoCheck2/index.js";

type OfficeWithRdps = Office.OsdkInstance & { employeeCount?: number };

interface LeftSidebarProps {
  offices: OfficeWithRdps[];
  employees: Employee.OsdkInstance[];
  selectedOffice: Office.OsdkInstance | null;
  selectedEmployee: Employee.OsdkInstance | null;
  onSelectOffice: (office: OfficeWithRdps) => void;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isLoadingOffices: boolean;
  isLoadingEmployees: boolean;
}

interface CollapsibleSectionProps {
  title: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function CollapsibleSection(
  { title, count, defaultOpen = true, children }: CollapsibleSectionProps,
) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-[var(--officenetwork-border-muted)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[var(--officenetwork-bg-elevated)] transition-colors"
      >
        <svg
          className={`size-3 text-[var(--officenetwork-text-muted)] transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5l8 7-8 7V5z" />
        </svg>
        <span className="officenetwork-section-label flex-1 text-left">
          {title}
        </span>
        {count !== undefined && (
          <span className="text-[10px] text-[var(--officenetwork-text-muted)] tabular-nums">
            {count}
          </span>
        )}
      </button>
      {isOpen && <div className="pb-2">{children}</div>}
    </div>
  );
}

export function LeftSidebar({
  offices,
  employees,
  selectedOffice,
  selectedEmployee,
  onSelectOffice,
  onSelectEmployee,
  isCollapsed,
  onToggleCollapse,
  isLoadingOffices,
  isLoadingEmployees,
}: LeftSidebarProps) {
  const [officeFilter, setOfficeFilter] = React.useState("");
  const [employeeFilter, setEmployeeFilter] = React.useState("");

  const filteredOffices = React.useMemo(() => {
    if (!officeFilter) return offices;
    const lower = officeFilter.toLowerCase();
    return offices.filter((o) => o.name?.toLowerCase().includes(lower));
  }, [offices, officeFilter]);

  const filteredEmployees = React.useMemo(() => {
    if (!employeeFilter) return employees.slice(0, 50);
    const lower = employeeFilter.toLowerCase();
    return employees
      .filter((e) => e.fullName?.toLowerCase().includes(lower))
      .slice(0, 50);
  }, [employees, employeeFilter]);

  if (isCollapsed) {
    return (
      <aside className="w-12 flex flex-col bg-[var(--officenetwork-bg-surface)] border-r border-[var(--officenetwork-border-default)]">
        <button
          onClick={onToggleCollapse}
          className="p-3 hover:bg-[var(--officenetwork-bg-elevated)] transition-colors"
          aria-label="Expand sidebar"
        >
          <svg
            className="size-5 text-[var(--officenetwork-text-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <div className="flex-1 flex flex-col items-center gap-2 py-2">
          <button
            className="p-2 rounded hover:bg-[var(--officenetwork-bg-elevated)] text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-accent-cyan)]"
            title="Offices"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 21h18M3 7v14m6-14v14m6-14v14m6-14v14M3 7l9-4 9 4" />
            </svg>
          </button>
          <button
            className="p-2 rounded hover:bg-[var(--officenetwork-bg-elevated)] text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-accent-cyan)]"
            title="People"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-60 flex flex-col bg-[var(--officenetwork-bg-surface)] border-r border-[var(--officenetwork-border-default)]">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--officenetwork-border-default)]">
        <span className="officenetwork-section-label">Explorer</span>
        <button
          onClick={onToggleCollapse}
          className="p-1 rounded hover:bg-[var(--officenetwork-bg-elevated)] text-[var(--officenetwork-text-muted)]"
          aria-label="Collapse sidebar"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Offices Section */}
        <CollapsibleSection title="Offices" count={offices.length}>
          <div className="px-3 pb-2">
            <input
              type="text"
              value={officeFilter}
              onChange={(e) => setOfficeFilter(e.target.value)}
              placeholder="Filter offices..."
              className="w-full h-6 px-2 text-xs bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-muted)] rounded text-[var(--officenetwork-text-primary)] placeholder:text-[var(--officenetwork-text-muted)] focus:outline-none focus:border-[var(--officenetwork-accent-cyan)]"
            />
          </div>
          {isLoadingOffices
            ? (
              <div className="px-3 py-2 text-xs text-[var(--officenetwork-text-muted)]">
                Loading...
              </div>
            )
            : (
              <div className="space-y-px">
                {filteredOffices.map((office) => {
                  const isSelected =
                    selectedOffice?.primaryKey_ === office.primaryKey_;
                  return (
                    <button
                      key={office.primaryKey_}
                      onClick={() => onSelectOffice(office)}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 text-left transition-colors ${
                        isSelected
                          ? "bg-[var(--officenetwork-accent-cyan)]/10 text-[var(--officenetwork-accent-cyan)]"
                          : "text-[var(--officenetwork-text-secondary)] hover:bg-[var(--officenetwork-bg-elevated)] hover:text-[var(--officenetwork-text-primary)]"
                      }`}
                    >
                      <svg
                        className="size-3.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M3 21h18M3 7v14m6-14v14m6-14v14m6-14v14M3 7l9-4 9 4" />
                      </svg>
                      <span className="text-xs truncate flex-1">
                        {office.name ?? "Unknown"}
                      </span>
                      {office.employeeCount !== undefined && (
                        <span className="text-[9px] tabular-nums px-1.5 py-0.5 rounded bg-[var(--officenetwork-bg-elevated)] text-[var(--officenetwork-text-muted)]">
                          {office.employeeCount}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
        </CollapsibleSection>

        {/* Employees Section */}
        <CollapsibleSection
          title="People"
          count={employees.length}
          defaultOpen={false}
        >
          <div className="px-3 pb-2">
            <input
              type="text"
              value={employeeFilter}
              onChange={(e) => setEmployeeFilter(e.target.value)}
              placeholder="Filter people..."
              className="w-full h-6 px-2 text-xs bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-muted)] rounded text-[var(--officenetwork-text-primary)] placeholder:text-[var(--officenetwork-text-muted)] focus:outline-none focus:border-[var(--officenetwork-accent-cyan)]"
            />
          </div>
          {isLoadingEmployees
            ? (
              <div className="px-3 py-2 text-xs text-[var(--officenetwork-text-muted)]">
                Loading...
              </div>
            )
            : (
              <div className="space-y-px">
                {filteredEmployees.map((employee) => {
                  const isSelected = selectedEmployee?.employeeNumber
                    === employee.employeeNumber;
                  return (
                    <button
                      key={employee.employeeNumber}
                      onClick={() => onSelectEmployee(employee)}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 text-left transition-colors ${
                        isSelected
                          ? "bg-[var(--officenetwork-accent-cyan)]/10 text-[var(--officenetwork-accent-cyan)]"
                          : "text-[var(--officenetwork-text-secondary)] hover:bg-[var(--officenetwork-bg-elevated)] hover:text-[var(--officenetwork-text-primary)]"
                      }`}
                    >
                      <span className="size-5 rounded-full bg-[var(--officenetwork-bg-elevated)] flex items-center justify-center text-[9px] font-medium shrink-0">
                        {employee.fullName?.split(" ").map((n) => n[0]).join("")
                          .slice(0, 2) ?? "?"}
                      </span>
                      <span className="text-xs truncate">
                        {employee.fullName ?? `#${employee.employeeNumber}`}
                      </span>
                    </button>
                  );
                })}
                {employees.length > 50 && !employeeFilter && (
                  <div className="px-3 py-1.5 text-[10px] text-[var(--officenetwork-text-muted)]">
                    +{employees.length - 50} more (use filter)
                  </div>
                )}
              </div>
            )}
        </CollapsibleSection>
      </div>
    </aside>
  );
}
