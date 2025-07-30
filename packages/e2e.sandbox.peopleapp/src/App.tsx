import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button.js";
import { EmployeeDetails } from "./components/EmployeeDetails.js";
import { H1 } from "./components/headers.js";
import { OfficeDetails } from "./components/OfficeDetails.js";
import { OfficesList } from "./components/OfficesList.js";
import { Section } from "./components/Section.js";
import type { Office } from "./generatedNoCheck2/index.js";
import { Employee } from "./generatedNoCheck2/index.js";

function App() {
  const [activeTab, setActiveTab] = useState<"employees" | "offices">(
    "employees",
  );
  const { data } = useOsdkObjects(Employee, {});
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(
    undefined,
  );
  const [selectedOffice, setSelectedOffice] = useState<
    Office.OsdkInstance | undefined
  >(undefined);

  const handleEmployeeClick = (employee: Employee.OsdkInstance) => {
    setSelectedEmployee(employee);
  };

  const handleOfficeClick = (office: Office.OsdkInstance) => {
    setSelectedOffice(office);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <H1>People App</H1>

      <div className="flex space-x-4 mb-6">
        <Button
          variant="tab"
          active={activeTab === "employees"}
          onClick={() => setActiveTab("employees")}
        >
          Employees
        </Button>
        <Button
          variant="tab"
          active={activeTab === "offices"}
          onClick={() => setActiveTab("offices")}
        >
          Offices
        </Button>
      </div>

      <div className="flex flex-row items-start text-left">
        {activeTab === "employees"
          ? (
            <>
              <div className="min-w-96 mr-8">
                <Section>
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
            </>
          )
          : (
            <>
              <div className="min-w-96 mr-8">
                <Section>
                  <OfficesList
                    selectedOffice={selectedOffice}
                    onSelectOffice={handleOfficeClick}
                  />
                </Section>
              </div>

              <div className="w-96">
                <Section>
                  <OfficeDetails office={selectedOffice} />
                </Section>
              </div>
            </>
          )}
      </div>
    </main>
  );
}

export default App;
