import { useState } from "react";
import { Section } from "../../components/Section.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeeDetails } from "./EmployeeDetails.js";
import { EmployeesList } from "./EmployeesList.js";

export function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(undefined);

  return (
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
          <EmployeeDetails employee={selectedEmployee} />
        </Section>
      </div>
    </div>
  );
}
