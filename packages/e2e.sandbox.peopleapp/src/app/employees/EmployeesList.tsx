import { useOsdkObjects } from "@osdk/react/experimental";
import { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeesListProps {
  selectedEmployee: Employee.OsdkInstance | undefined;
  onSelectEmployee: (employee: Employee.OsdkInstance) => void;
}

export function EmployeesList(
  { selectedEmployee, onSelectEmployee }: EmployeesListProps,
) {
  const { data, isLoading, error } = useOsdkObjects(Employee, {});

  if (isLoading) {
    return <div className="text-sm italic">Loading employees...</div>;
  }

  if (error) {
    return (
      <div className="text-sm text-red-500">
        Error loading employees: {error.message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div className="text-sm italic">No employees found</div>;
  }

  return (
    <ul className="list-none">
      {data.map(employee => {
        const isSelected =
          selectedEmployee?.$primaryKey === employee.$primaryKey;
        return (
          <li
            key={employee.$primaryKey}
            className={`py-2 px-3 mb-1 rounded cursor-pointer hover:bg-gray-100 ${
              isSelected ? "bg-blue-100 hover:bg-blue-100" : ""
            }`}
            onClick={() => onSelectEmployee(employee)}
          >
            <div className="font-medium">
              {employee.fullName ?? "<full-name-missing>"}
            </div>
            <div className="text-sm text-gray-600">
              {employee.adUsername ?? "<username-missing>"}{" "}
              - #{employee.employeeNumber}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
