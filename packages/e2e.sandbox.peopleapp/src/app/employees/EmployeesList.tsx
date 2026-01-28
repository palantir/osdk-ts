import type { DerivedProperty } from "@osdk/client";
import { useOsdkObjects } from "@osdk/react/experimental";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeeListItemProps {
  item: Employee.OsdkInstance & {
    managerName?: string;
    reportCount?: number;
  };
  isSelected: boolean;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

function EmployeeListItem(
  { item, isSelected, onSelect }: EmployeeListItemProps,
) {
  return (
    <ListItem
      isSelected={isSelected}
      onClick={() => onSelect(item)}
      primaryContent={item.fullName ?? "<full-name-missing>"}
      secondaryContent={
        <>
          {item.adUsername ?? "<username-missing>"} - #{item.employeeNumber}
          {item.managerName && <div>Manager: {item.managerName}</div>}
          {item.reportCount !== undefined && (
            <div>Direct Reports: {item.reportCount}</div>
          )}
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
  const withProperties = {
    managerName: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("lead").selectProperty("fullName"),
    reportCount: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("peeps").aggregate("$count"),
  };

  const employees = useOsdkObjects(Employee, {
    withProperties,
    where: {
      department: "Media Team",
      reportCount: { $gt: 0 },
    },
  });

  const { data } = useOsdkObjects(Employee, {
    withProperties,
    where: {
      department: "Media Team",
      reportCount: { $gt: 0 },
    },
  });

  return (
    <List<Employee>
      header="Employees"
      items={employees}
      Component={EmployeeListItem}
      {...props}
    />
  );
}
