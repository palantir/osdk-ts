import React from "react";
import type { Employee } from "../generatedNoCheck2/index.js";

interface EmployeeSelectorProps {
  employees: ReadonlyArray<Employee.OsdkInstance>;
  selectedEmployee: Employee.OsdkInstance | null;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
  isLoading: boolean;
}

export function EmployeeSelector({
  employees,
  selectedEmployee,
  onSelectEmployee,
  isLoading,
}: EmployeeSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const employee = employees.find((emp) =>
      String(emp.employeeNumber) === e.target.value
    );
    if (employee) {
      onSelectEmployee(employee);
    }
  };

  const sortedEmployees = React.useMemo(() => {
    return [...employees].sort((a, b) => {
      const nameA = a.fullName ?? "";
      const nameB = b.fullName ?? "";
      return nameA.localeCompare(nameB);
    });
  }, [employees]);

  return (
    <div className="flex items-center gap-2">
      <svg
        className="size-4 text-[var(--accent-violet)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <select
        value={selectedEmployee?.employeeNumber?.toString() ?? ""}
        onChange={handleChange}
        disabled={isLoading || employees.length === 0}
        aria-label="Select an employee"
        className="appearance-none bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg px-3 py-1.5 pr-8 text-sm text-[var(--text-primary)] cursor-pointer focus:outline-none focus:border-[var(--accent-violet)] disabled:opacity-50 disabled:cursor-not-allowed max-w-[200px]"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          backgroundSize: "1rem",
        }}
      >
        <option value="" disabled>
          {isLoading ? "Loading..." : `Select Employee (${employees.length})`}
        </option>
        {sortedEmployees.map((employee) => (
          <option
            key={employee.employeeNumber}
            value={employee.employeeNumber?.toString()}
          >
            {employee.fullName ?? `Employee #${employee.employeeNumber}`}
          </option>
        ))}
      </select>
    </div>
  );
}
