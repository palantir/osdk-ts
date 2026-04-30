import type { DerivedProperty, Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { useOsdkClient } from "@osdk/react/experimental";
import React, { useCallback } from "react";
import {
  Employee,
  getEmployeeDaysSinceStart,
} from "../../generatedNoCheck2/index.js";

type RDPs = {
  managerName: "string";
};

type FunctionColumns = {
  daysSinceStart: typeof getEmployeeDaysSinceStart;
};

const columnDefinitions: Array<
  ColumnDefinition<
    Employee,
    RDPs,
    FunctionColumns
  >
> = [
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    columnName: "My Name",
    validateEdit: async (value: unknown) => {
      if (typeof value !== "string" || !value.trim()) {
        return "Name cannot be empty";
      }
      return undefined;
    },
  },
  // Function-backed column
  {
    locator: {
      type: "function",
      id: "daysSinceStart",
      queryDefinition: getEmployeeDaysSinceStart,
      getFunctionParams: (objectSet) => ({ employees: objectSet }),
      getKey: (obj) => `${obj.$objectType}:${obj.$primaryKey}`,
      getValue: (data) =>
        (data as { daysSinceStart?: number } | undefined)?.daysSinceStart,
    },
    columnName: "Days Since Start",
    width: 150,
  },
  {
    locator: {
      type: "property",
      id: "employeeNumber",
    },
    columnName: "Employee Number",
  },
  {
    locator: { type: "property", id: "jobTitle" },
  },
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 300,
    renderHeader: () => "Start Date",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object.firstFullTimeStartDate
            ? new Date(object.firstFullTimeStartDate).toISOString()
            : "No value"}
        </div>
      );
    },
  },
  // RDP
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    columnName: "Derived Manager Name",
  },
  // Custom
  {
    locator: {
      type: "custom",
      id: "Custom Column",
    },
    renderHeader: () => "Custom",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <button onClick={() => alert(`Clicked ${object.$title}`)}>
          Click me
        </button>
      );
    },
    orderable: false,
  },
];

interface EmployeesTableProps {
  onRowClick?: (object: Osdk.Instance<Employee>) => void;
}

export function EmployeesTable({ onRowClick }: EmployeesTableProps) {
  const handleSubmitEdits = useCallback(
    async () => {
      alert(`Submitting edits...`);
      return true;
    },
    [],
  );

  const client = useOsdkClient();

  const os = client(Employee);

  return (
    <div
      style={{
        height: "300px",
        overflow: "hidden",
      }}
    >
      <ObjectTable<Employee, RDPs, FunctionColumns>
        objectSet={os}
        objectType={Employee}
        columnDefinitions={columnDefinitions}
        selectionMode={"multiple"}
        defaultOrderBy={[{
          property: "firstFullTimeStartDate",
          direction: "desc",
        }]}
        onSubmitEdits={handleSubmitEdits}
        editMode="manual"
        onRowClick={onRowClick}
      />
    </div>
  );
}
