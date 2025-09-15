import type { Osdk, PropertyKeys } from "@osdk/api";
import { useObjectSet } from "@osdk/react/experimental";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeeListItemProps {
  item: Osdk.Instance<Employee, "$allBaseProperties", PropertyKeys<Employee>, {
    peepCount: "integer";
  }>;
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
          {item.adUsername ?? "<username-missing>"} - #{item.employeeNumber} -
          {" "}
          {item.peepCount} peeps
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
  const employees = useObjectSet($(Employee), {
    withProperties: {
      peepCount: (base) => base.pivotTo("peeps").aggregate("$count"),
    },
  });
  console.log(employees);
  return (
    <List<Employee>
      header="Employees"
      items={employees}
      Component={EmployeeListItem}
      {...props}
    />
  );
}
