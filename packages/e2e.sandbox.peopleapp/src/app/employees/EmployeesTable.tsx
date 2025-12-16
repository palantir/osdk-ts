import { ObjectTable } from "@osdk/components/experimental";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

export function EmployeesTable() {
  const employeesObjectSet = $(Employee);

  return (
    <ObjectTable<Employee>
      objectSet={employeesObjectSet}
    />
  );
}
