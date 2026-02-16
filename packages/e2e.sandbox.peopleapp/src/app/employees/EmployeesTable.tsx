import type { DerivedProperty, Osdk } from "@osdk/api";
import type {
  CellIdentifier,
  CellValueState,
  ColumnDefinition,
} from "@osdk/react-components/experimental";
import { ObjectTable } from "@osdk/react-components/experimental";
import { useOsdkAction } from "@osdk/react/experimental";
import { useCallback } from "react";
import { Employee, modifyEmployee } from "../../generatedNoCheck2/index.js";

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
    editable: true,
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
  const { applyAction } = useOsdkAction(modifyEmployee);

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

  const handleSubmitEdits = useCallback(
    async (edits: Record<string, CellValueState>) => {
      try {
        // Process each edit and call modifyEmployee action
        const editEntries = Object.entries(edits);
        const rowEditsMap: Record<string, Partial<Employee>> = {};
        const actionPromises: Promise<any>[] = [];
        for (const [cellId, state] of editEntries) {
          const cellIdentifier = JSON.parse(cellId) as CellIdentifier;
          const { rowId, columnId } = cellIdentifier;

          if (!rowEditsMap[rowId]) {
            rowEditsMap[rowId] = {};
          }
          rowEditsMap[rowId][columnId as keyof Employee] = state
            .newValue as never;
        }
        for (const [rowId, updatedFields] of Object.entries(rowEditsMap)) {
          actionPromises.push(applyAction({
            employee: Number(rowId),
            ...updatedFields,
          }));
        }
        await Promise.all(actionPromises);
      } catch (error) {
        console.error("Failed to submit edits:", error);
        throw error;
      }
    },
    [applyAction],
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
        onSubmitEdits={handleSubmitEdits}
      />
    </div>
  );
}
