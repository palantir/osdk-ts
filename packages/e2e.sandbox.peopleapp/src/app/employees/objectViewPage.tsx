import { ObjectView } from "@osdk/react-components/experimental/object-view";
import { useState } from "react";
import { Section } from "../../components/Section.js";
import type { Employee } from "../../generatedNoCheck2/index.js";
import { Employee as EmployeeType } from "../../generatedNoCheck2/index.js";
import { EmployeesList } from "./EmployeesList.js";

export function EmployeesObjectViewPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(undefined);

  return (
    <div className="flex flex-col">
      <div className="mb-4 p-4 bg-gray-100">
        <strong>ObjectView demo</strong>{" "}
        — pick an employee on the left; the right panel renders{" "}
        <code>{`<ObjectView>`}</code> for the selected primary key.
      </div>

      <div className="flex flex-row items-start text-left">
        <div className="min-w-96 mr-8">
          <Section>
            <EmployeesList
              selected={selectedEmployee}
              onSelect={setSelectedEmployee}
            />
          </Section>
        </div>

        <div className="w-96">
          <Section>
            {selectedEmployee != null
              ? (
                <ObjectView
                  objectType={EmployeeType}
                  primaryKey={selectedEmployee.$primaryKey}
                />
              )
              : (
                <div className="p-4 text-gray-500 italic">
                  Select an employee to view via ObjectView
                </div>
              )}
          </Section>
        </div>
      </div>
    </div>
  );
}
