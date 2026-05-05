import { ObjectView } from "@osdk/react-components/experimental/object-view";
import { useCallback, useState } from "react";
import { Section } from "../../components/Section.js";
import type { Employee as EmployeeType } from "../../generatedNoCheck2/index.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeeDetails } from "./EmployeeDetails.js";
import { EmployeesList } from "./EmployeesList.js";
import { EmployeesListEnhanced } from "./EmployeesListEnhanced.js";
import { EmployeesTable } from "./EmployeesTable.js";

export function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    EmployeeType.OsdkInstance | undefined
  >(undefined);
  const [tableSelectedEmployee, setTableSelectedEmployee] = useState<
    EmployeeType.OsdkInstance | undefined
  >(undefined);
  const [useEnhancedList, setUseEnhancedList] = useState(false);

  const handleTableRowClick = useCallback(
    (object: EmployeeType.OsdkInstance) => setTableSelectedEmployee(object),
    [],
  );

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

      <div className="flex flex-col w-192">
        <div className="mb-2 text-sm text-gray-600">
          Click a row in the table to render <code>{`<ObjectView>`}</code>{" "}
          below.
        </div>
        <EmployeesTable onRowClick={handleTableRowClick} />

        {tableSelectedEmployee != null && (
          <div className="mt-4">
            <Section>
              <ObjectView
                objectType={Employee}
                primaryKey={tableSelectedEmployee.$primaryKey}
              />
            </Section>
          </div>
        )}
      </div>
    </div>
  );
}
