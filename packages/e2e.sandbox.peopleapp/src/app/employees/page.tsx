import { useState } from "react";
import { Section } from "../../components/Section.js";
import type { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeeDetails } from "./EmployeeDetails.js";
import { EmployeesList } from "./EmployeesList.js";
import { EmployeesListEnhanced } from "./EmployeesListEnhanced.js";
import { EmployeesTable } from "./EmployeesTable.js";

export function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(undefined);
  const [useEnhancedList, setUseEnhancedList] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="mb-4 p-4 bg-gray-100">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useEnhancedList}
            onChange={(e) => setUseEnhancedList(e.target.checked)}
          />
          Use Enhanced List (showcases new useOsdkObjects features)
        </label>
      </div>

      <div className="flex flex-row items-start text-left">
        <div className="min-w-96 mr-8">
          <Section>
            {useEnhancedList
              ? (
                <EmployeesListEnhanced
                  selected={selectedEmployee}
                  onSelect={setSelectedEmployee}
                />
              )
              : (
                <EmployeesList
                  selected={selectedEmployee}
                  onSelect={setSelectedEmployee}
                />
              )}
          </Section>
        </div>

        <div className="w-96">
          <Section>
            <EmployeeDetails employee={selectedEmployee} />
          </Section>
        </div>
      </div>
      <div className="flex w-192">
        <EmployeesTable />
      </div>
    </div>
  );
}
