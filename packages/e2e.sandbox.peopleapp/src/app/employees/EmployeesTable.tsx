import type { DerivedProperty, Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import { ObjectTable } from "@osdk/react-components/experimental";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

type RDPs = {
  managerName: "string";
};

const columnDefinitions: ColumnDefinition<
  Employee,
  RDPs,
  {}
>[] = [
  // With renderHeader prop
  {
    locator: {
      type: "property",
      id: "fullName",
    },
    renderHeader: () => <div style={{ color: "red" }}>My Name</div>,
  },
  // With isVisible prop
  {
    locator: { type: "property", id: "jobTitle" },
    isVisible: false,
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
    renderHeader: () => "Derived Manager Name",
  },
];

export function EmployeesTable() {
  const employeesObjectSet = $(Employee);

  return (
    <div
      style={{
        height: "500px",
        overflow: "auto",
      }}
    >
      <ObjectTable<Employee, { managerName: "string" }>
        objectSet={employeesObjectSet}
        objectType={Employee}
        columnDefinitions={columnDefinitions}
      />
    </div>
  );
}
