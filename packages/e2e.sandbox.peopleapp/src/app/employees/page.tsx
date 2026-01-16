import { useState } from "react";
import { Section } from "../../components/Section.js";
import type { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeeDetails } from "./EmployeeDetails.js";
import { EmployeesList } from "./EmployeesList.js";
import { EmployeesListEnhanced } from "./EmployeesListEnhanced.js";
import { EmployeesTable } from "./EmployeesTable.js";
import { EmployeesWithFilterList } from "./EmployeesWithFilterList.js";

type ListMode = "basic" | "enhanced" | "filterList" | "table";

export function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<
    Employee.OsdkInstance | undefined
  >(undefined);
  const [listMode, setListMode] = useState<ListMode>("basic");

  return (
    <div className="flex flex-col">
      <div className="mb-4 p-4 bg-gray-100">
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="listMode"
              checked={listMode === "basic"}
              onChange={() => setListMode("basic")}
            />
            Basic List
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="listMode"
              checked={listMode === "enhanced"}
              onChange={() => setListMode("enhanced")}
            />
            Enhanced List (useOsdkObjects features)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="listMode"
              checked={listMode === "filterList"}
              onChange={() => setListMode("filterList")}
            />
            FilterList Component Demo
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="listMode"
              checked={listMode === "table"}
              onChange={() => setListMode("table")}
            />
            Table
          </label>
        </div>
      </div>

      {listMode === "filterList"
        ? (
          <div
            className="flex flex-row items-start text-left"
            style={{ minHeight: "600px" }}
          >
            <EmployeesWithFilterList
              selected={selectedEmployee}
              onSelect={setSelectedEmployee}
            />
            <div className="w-96 ml-8">
              <Section>
                <EmployeeDetails employee={selectedEmployee} />
              </Section>
            </div>
          </div>
        )
        : listMode === "table"
        ? (
          <div className="flex w-192">
            <EmployeesTable />
          </div>
        )
        : (
          <div className="flex flex-row items-start text-left">
            <div className="min-w-96 mr-8">
              <Section>
                {listMode === "enhanced"
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
        )}
    </div>
  );
}
