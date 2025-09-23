import { useOsdkObjects, usePrefetch } from "@osdk/react/experimental";
import React from "react";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { Employee, Office } from "../../generatedNoCheck2/index.js";

interface EmployeeListItemProps {
  item: Employee.OsdkInstance;
  isSelected: boolean;
  onSelect: (employee: Employee.OsdkInstance) => void;
  onHover: (employee: Employee.OsdkInstance | null) => void;
}

function EmployeeListItem(
  { item: item, isSelected, onSelect, onHover }: EmployeeListItemProps,
) {
  return (
    <ListItem
      isSelected={isSelected}
      onClick={() => onSelect(item)}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      primaryContent={item.fullName ?? "<full-name-missing>"}
      secondaryContent={
        <>
          {item.adUsername ?? "<username-missing>"} - #{item.employeeNumber}
        </>
      }
    />
  );
}

interface EmployeesListProps {
  selected: Employee.OsdkInstance | undefined;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

export function EmployeesList(props: EmployeesListProps) {
  const { prefetchObject, prefetchList } = usePrefetch();
  const [hoveredEmployee, setHoveredEmployee] = React.useState<Employee.OsdkInstance | null>(null);
  const [prefetchedEmployees, setPrefetchedEmployees] = React.useState<Set<string>>(new Set());
  
  // Prefetch offices and related employees on mount
  const employees = useOsdkObjects(Employee, {
    prefetch: [
      // Prefetch all offices for quick access
      {
        type: Office,
        where: {},
        pageSize: 100,
      },
    ],
  });

  // Prefetch employee details and their office when hovering
  React.useEffect(() => {
    if (hoveredEmployee && !prefetchedEmployees.has(String(hoveredEmployee.$primaryKey))) {
      // Mark as prefetched to avoid redundant calls
      setPrefetchedEmployees(prev => new Set(prev).add(String(hoveredEmployee.$primaryKey)));
      
      // Prefetch the employee's office if they have one
      if (hoveredEmployee.primaryOfficeId) {
        prefetchObject(Office, hoveredEmployee.primaryOfficeId).catch(() => {
          // Silently handle prefetch errors
        });
      }
      
      // Prefetch employees from the same department
      if (hoveredEmployee.department) {
        prefetchList({
          type: Employee,
          where: { department: hoveredEmployee.department },
          pageSize: 20,
        }).catch(() => {
          // Silently handle prefetch errors
        });
      }
    }
  }, [hoveredEmployee, prefetchedEmployees, prefetchObject, prefetchList]);

  // Prefetch all employees button for testing bulk prefetch
  const handlePrefetchAll = React.useCallback(async () => {
    const prefetchPromises = employees.data?.slice(0, 10).map(emp => 
      prefetchObject(Employee, emp.$primaryKey)
    ) ?? [];
    
    try {
      await Promise.all(prefetchPromises);
      console.log("Prefetched first 10 employees");
    } catch (error) {
      console.error("Error prefetching employees:", error);
    }
  }, [employees.data, prefetchObject]);

  return (
    <div>
      <div className="mb-2 p-2 bg-gray-50 rounded">
        <button
          onClick={handlePrefetchAll}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          disabled={!employees.data || employees.isLoading}
        >
          Prefetch First 10 Employees
        </button>
        <span className="ml-2 text-xs text-gray-600">
          (For testing bulk prefetch)
        </span>
      </div>
      
      <List<Employee>
        header="Employees"
        items={employees}
        Component={(props) => (
          <EmployeeListItem
            {...props}
            onHover={setHoveredEmployee}
          />
        )}
        {...props}
      />
      
      {hoveredEmployee && (
        <div className="mt-2 p-2 bg-yellow-50 rounded text-xs">
          Prefetching details for: {hoveredEmployee.fullName}
        </div>
      )}
    </div>
  );
}
