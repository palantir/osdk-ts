import { useState } from "react";
import type { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeesWithFilterList } from "./EmployeesWithFilterList.js";

export function EmployeesFilterListPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(undefined);

  return (
    <div style={{ height: "calc(100vh - 60px)", padding: 16 }}>
      <EmployeesWithFilterList
        selected={selectedEmployee}
        onSelect={setSelectedEmployee}
      />
    </div>
  );
}
