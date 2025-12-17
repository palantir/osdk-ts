import type { Osdk } from "@osdk/api";
import type {
  ColumnDefinition} from "@osdk/react-components/experimental";
import {
  ObjectTable,
} from "@osdk/react-components/experimental";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

const columnDefinitions: ColumnDefinition<Employee>[] = [{
  locator: {
    type: "property",
    propertyKey: "fullName",
  },
  renderHeader: () => <div style={{ color: "red" }}>My Name</div>,
}, {
  locator: { type: "property", propertyKey: "jobTitle" },
  isVisible: false,
}, {
  locator: { type: "property", propertyKey: "firstFullTimeStartDate" },
  width: 500,
  renderHeader: () => "Start Date",
  renderCell: (
    object: Osdk.Instance<Employee>,
    locator: ColumnDefinition<Employee>["locator"],
  ) => {
    return (
      <div>
        {object["firstFullTimeStartDate"]
          ? new Date(object["firstFullTimeStartDate"]).toISOString()
          : "No value"}
      </div>
    );
  },
}];

export function EmployeesTable() {
  const employeesObjectSet = $(Employee);

  return (
    <ObjectTable<Employee>
      objectSet={employeesObjectSet}
      objectType={Employee}
      columnDefinitions={columnDefinitions}
    />
  );
}
