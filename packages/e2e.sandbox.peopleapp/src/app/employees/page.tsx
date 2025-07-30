import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";
import { Section } from "../../components/Section.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeeDetails } from "./EmployeeDetails.js";
import { EmployeesList } from "./EmployeesList.js";

export function EmployeesPage() {
  const { data } = useOsdkObjects(Employee, {});
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(undefined);

  const handleEmployeeClick = (employee: Employee.OsdkInstance) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="flex flex-row items-start text-left">
      <div className="min-w-96 mr-8">
        <Section>
          <EmployeesList
            selectedEmployee={selectedEmployee}
            onSelectEmployee={handleEmployeeClick}
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
