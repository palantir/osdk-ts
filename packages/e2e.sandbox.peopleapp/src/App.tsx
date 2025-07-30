import { useOsdkObjects } from "@osdk/react/experimental";
import React, { useState } from "react";
import "./App.css";
import { EmployeeDetails } from "./components/EmployeeDetails.js";
import { H1, H2 } from "./components/headers.js";
import { Section } from "./components/Section.js";
import { Employee } from "./generatedNoCheck2/index.js";

function App() {
  const { data } = useOsdkObjects(Employee, {});
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(
    undefined,
  );

  const handleEmployeeClick = (employee: Employee.OsdkInstance) => {
    setSelectedEmployee(employee);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <H1>People App</H1>

      <div className="flex flex-row items-start text-left">
        <div className="min-w-96 mr-8">
          <Section>
            <H2>Employees</H2>
            <ul className="list-none">
              {data?.map(employee => {
                const isSelected =
                  selectedEmployee?.$primaryKey === employee.$primaryKey;
                return (
                  <li
                    key={employee.$primaryKey}
                    className={`py-2 px-3 mb-1 rounded cursor-pointer hover:bg-gray-100 ${
                      isSelected ? "bg-blue-100 hover:bg-blue-100" : ""
                    }`}
                    onClick={() => handleEmployeeClick(employee)}
                  >
                    <div className="font-medium">
                      {employee.fullName ?? "<full-name-missing>"}
                    </div>
                    <div className="text-sm text-gray-600">
                      {employee.adUsername ?? "<username-missing>"}{" "}
                      - #{employee.employeeNumber}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Section>
        </div>

        <div className="w-96">
          <Section>
            <EmployeeDetails employee={selectedEmployee} />
          </Section>
        </div>
      </div>
    </main>
  );
}

export default App;
