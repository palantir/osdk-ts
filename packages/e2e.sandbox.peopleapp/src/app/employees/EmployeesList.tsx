import { useOsdkObjects } from "@osdk/react/experimental";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeeListItemProps {
  item: Employee.OsdkInstance;
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
  const employees = useOsdkObjects(Employee, {});

  return (
    <List<Employee>
      header="Employees"
      items={employees}
      Component={EmployeeListItem}
      {...props}
    />
  );
}
