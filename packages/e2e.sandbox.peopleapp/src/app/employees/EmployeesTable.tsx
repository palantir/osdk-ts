import type { DerivedProperty, Osdk } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
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
    // Per-row editability: only senior roles can edit
    editable: (rowData) => {
      const jobTitle = String(rowData.jobTitle ?? "");
      return (
        jobTitle.includes("Senior")
        || jobTitle.includes("Staff")
        || jobTitle.includes("Manager")
      );
    },
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

export function EmployeesTable() {
  const handleSubmitEdits = useCallback(
    async () => {
      alert(`Submitting edits...`);
      return true;
    },
    [],
  );

  const getRowAttributes = useCallback(
    (rowData: Osdk.Instance<Employee>) => {
      const jobTitle = String(rowData.jobTitle ?? "");
      // Highlight rows for senior engineers with a subtle background
      const isSenior = jobTitle.includes("Senior")
        || jobTitle.includes("Staff")
        || jobTitle.includes("Manager");
      return {
        "data-seniority-level": isSenior ? "senior" : "junior",
      };
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
        getRowAttributes={getRowAttributes}
        showEditFooter={true}
      />
      <style>
        {`
        /* Highlight senior employees with a subtle background */
        [data-seniority-level="senior"] {
          --osdk-table-row-bg-default: #f5f0ff;
          --osdk-table-row-bg-alternate: #ede8ff;
        }
      `}
      </style>
    </div>
  );
}
