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
    renderCell: (object: Osdk.Instance<Employee>, _locator) => {
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
    renderCell: (object: Osdk.Instance<Employee>, _locator) => {
      if ("managerName" in object) {
        return object["managerName"] as string;
      }
      return "No Value";
    },
  },
];

export function EmployeesTable() {
  const employeesObjectSet = $(Employee);

  const handleRowClick = (row: Osdk.Instance<Employee>) => {
    console.log("Row clicked ", row);
  };

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
        onRowClick={handleRowClick}
      />
    </div>
  );
}
