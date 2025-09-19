import type { Osdk, PropertyKeys } from "@osdk/api";
import { useObjectSet, type UseOsdkListResult } from "@osdk/react/experimental";
import type React from "react";
import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

type EmployeeWithPeepCount = Osdk.Instance<
  Employee,
  "$allBaseProperties",
  PropertyKeys<Employee>,
  {
    peepCount: "integer";
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
    where: {
      "department": "Media Team",
    },
    withProperties: {
      peepCount: (base) => base.pivotTo("peeps").aggregate("$count"),
    },
    dedupeIntervalMs: 5000,
  });

  const listResult: UseOsdkListResult<Employee> = {
    data: employees.data,
    isLoading: employees.isLoading,
    error: employees.error,
    fetchMore: undefined,
    isOptimistic: false,
  };

  return (
    <List<Employee>
      header="Employees"
      items={listResult}
      Component={EmployeeListItem as React.FC<{
        item: Osdk.Instance<Employee>;
        isSelected: boolean;
        onSelect: (item: Osdk.Instance<Employee>) => void;
      }>}
      selected={props.selected}
      onSelect={(item) => props.onSelect(item as Employee.OsdkInstance)}
    />
  );
}
