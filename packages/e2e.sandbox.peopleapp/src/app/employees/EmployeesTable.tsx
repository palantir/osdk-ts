import type { DerivedProperty, Osdk } from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental";
import { ObjectTable } from "@osdk/react-components/experimental";
import { useCallback } from "react";
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
    pinned: "right",
    columnName: "My Name",
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
    columnName: "Derived Manager Name",
    renderCell: (object: Osdk.Instance<Employee>) => {
      if ("managerName" in object) {
        return object["managerName"] as string;
      }
      return "No Value";
    },
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
];

export function EmployeesTable() {
  const renderCellContextMenu = useCallback(
    (_: Osdk.Instance<Employee>, cellValue: unknown) => {
      return (
        <div
          style={{
            background: "white",
            padding: 8,
            border: "1px solid #d1d5db",
            boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
            fontSize: 13,
          }}
        >
          {cellValue ? cellValue.toString() : "No Value"}
        </div>
      );
    },
    [],
  );

  return (
    <div
      style={{
        height: "500px",
        overflow: "hidden",
      }}
    >
      <ObjectTable<Employee, RDPs>
        objectType={Employee}
        columnDefinitions={columnDefinitions}
        selectionMode={"multiple"}
        renderCellContextMenu={renderCellContextMenu}
        defaultOrderBy={[{
          property: "firstFullTimeStartDate",
          direction: "desc",
        }]}
      />
    </div>
  );
}
