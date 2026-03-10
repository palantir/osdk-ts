import type { DerivedProperty, Osdk } from "@osdk/api";
import type {
  CellEditEvent,
  ColumnDefinition,
} from "@osdk/react-components/experimental";
import { ObjectTable } from "@osdk/react-components/experimental";
import { useCallback } from "react";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

type RDPs = {
  managerName: "string";
};

const columnDefinitions: Array<
  ColumnDefinition<
    Employee,
    RDPs,
    {}
  >
> = [
  // With renderHeader prop
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    columnName: "My Name",
    editable: true,
  },
  {
    locator: {
      type: "property",
      id: "employeeNumber",
    },
    columnName: "Employee Number",
    editable: false,
  },
  {
    locator: { type: "property", id: "jobTitle" },
    editable: true,
  },
  // With renderHeader, renderCell, width prop
  {
    locator: { type: "property", id: "firstFullTimeStartDate" },
    width: 300,
    renderHeader: () => "Start Date",
    renderCell: (object: Osdk.Instance<Employee>) => {
      return (
        <div>
          {object["firstFullTimeStartDate"]
            ? new Date(object["firstFullTimeStartDate"]).toISOString()
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
        <button onClick={() => alert(`Clicked ${object["$title"]}`)}>
          Click me
        </button>
      );
    },
    orderable: false,
  },
  {
    locator: { type: "property", id: "email" },
    editable: true,
    validate: async (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value as string);
    },
    onValidationError: (error) => {
      return "Please enter a valid email address";
    },
  },
];

export function EmployeesTable() {
  const handleSubmitEdits = useCallback(
    async (
      edits: CellEditEvent<
        Osdk.Instance<Employee>,
        unknown
      >[],
    ) => {
      console.log("Edits to submit:", edits);
      alert(`Submitting edits...`);
      return true;
    },
    [],
  );

  const employeeOS = $(Employee).where({
    fullName: { $eq: "Jane Doe" },
  });

  return (
    <div
      style={{
        height: "500px",
        overflow: "hidden",
      }}
    >
      <ObjectTable<Employee, RDPs>
        objectSet={employeeOS}
        objectType={Employee}
        columnDefinitions={columnDefinitions}
        selectionMode={"multiple"}
        defaultOrderBy={[{
          property: "firstFullTimeStartDate",
          direction: "desc",
        }]}
        onSubmitEdits={handleSubmitEdits}
        enableEditModeByDefault={false}
        onCellValueChanged={(event) => {
          console.log("Cell edited:", event);
        }}
      />
    </div>
  );
}
