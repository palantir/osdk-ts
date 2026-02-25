import type { DerivedProperty, Osdk } from "@osdk/api";
import type {
  CellEditEvent,
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
    editable: false,
  },
  // With isVisible prop
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
];

export function EmployeesTable() {
  const { applyAction } = useOsdkAction(modifyEmployee);

  const handleSubmitEdits = useCallback(
    async (
      edits: CellEditEvent<
        Osdk.Instance<Employee>,
        unknown
      >[],
    ) => {
      console.log("Edits to submit:", edits);
      try {
        // Process each edit and call modifyEmployee action
        const rowEditsMap: Record<string, Record<string, any>> = {};
        const actionPromises: Promise<any>[] = [];
        for (const edit of edits) {
          const { rowId, columnId, newValue, rowData } = edit;
          // Now we have access to rowData which contains the full employee object
          console.log("Editing employee:", rowData.$title);

          if (!rowEditsMap[rowId]) {
            rowEditsMap[rowId] = {};
          }
          rowEditsMap[rowId][columnId] = newValue;
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
        defaultOrderBy={[{
          property: "firstFullTimeStartDate",
          direction: "desc",
        }]}
        onSubmitEdits={handleSubmitEdits}
        enableEditModeByDefault={false}
        onRowClick={() => alert("Row clicked")}
        onCellValueChanged={(event) => {
          console.log("Cell edited:", event);
        }}
      />
    </div>
  );
}
