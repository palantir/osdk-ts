import type { Osdk, PropertyKeys } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react/experimental";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { Employee } from "../../generatedNoCheck2/index.js";

type EmployeeWithPeepCount = Osdk.Instance<
  Employee,
  "$allBaseProperties",
  PropertyKeys<Employee>,
  {
    managerName: "string";
    reportCount: "integer";
  }
>;

interface EmployeeListItemProps {
  item: EmployeeWithPeepCount;
  isSelected: boolean;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

function EmployeeListItem(
  { item: item, isSelected, onSelect }: EmployeeListItemProps,
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
  const employees = useOsdkObjects(Employee, {
    withProperties: {
      managerName: (base) => base.pivotTo("lead").selectProperty("fullName"),
      reportCount: (base) => base.pivotTo("peeps").aggregate("$count"),
    },
    where: {
      department: "Media Team",
      $rdp: {
        reportCount: { $eq: 0 },
      },
    },
  });

  const EmployeeListItemWithRdp = EmployeeListItem as React.FC<{
    item: Employee.OsdkInstance;
    isSelected: boolean;
    onSelect: (item: Employee.OsdkInstance) => void;
  }>;

  return (
    <List<Employee>
      header="Employees"
      items={employees}
      Component={EmployeeListItemWithRdp}
      {...props}
    />
  );
}
