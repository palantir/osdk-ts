import { useLinks } from "@osdk/react/experimental";
import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage.js";
import { H2 } from "../../components/headers.js";
import { LoadingMessage } from "../../components/LoadingMessage.js";
import { OfficeSelector } from "../../components/OfficeSelector.js";
import type { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeeDetailsProps {
  employee: Employee.OsdkInstance | undefined;
}

export function EmployeeDetails({ employee }: EmployeeDetailsProps) {
  // Only use useLinks when we have an employee to avoid unnecessary API calls
  const { links: officeLink, isLoading: isOfficeLoading, error: officeError } =
    useLinks(
      employee ?? [],
      "primaryOffice",
      {},
    );

  if (!employee) {
    return (
      <div className="p-4 text-gray-500 italic">
        Select an employee to view their details
      </div>
    );
  }

  return (
    <div>
      <H2>Employee Details</H2>
      <div className="mb-4">
        <div className="font-medium text-lg">
          {employee.fullName || "No name available"}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          Employee #{employee.employeeNumber}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="text-gray-600">Username:</div>
          <div>{employee.adUsername || "N/A"}</div>

          <div className="text-gray-600">Job Title:</div>
          <div>{employee.jobTitle || "N/A"}</div>

          <div className="text-gray-600">Business Title:</div>
          <div>{employee.businessTitle || "N/A"}</div>

          <div className="text-gray-600">Department:</div>
          <div>{employee.department || "N/A"}</div>

          <div className="text-gray-600">Email:</div>
          <div>{employee.emailPrimaryWork || "N/A"}</div>

          <div className="text-gray-600">Team:</div>
          <div>{employee.team || "N/A"}</div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <H2>Office Information</H2>
        {employee && (
          <OfficeSelector
            employee={employee}
            currentOfficeId={officeLink && officeLink.length > 0
              ? officeLink[0].$primaryKey
              : null}
          />
        )}
      </div>

      {isOfficeLoading
        ? <LoadingMessage message="Loading office information..." />
        : officeError
        ? (
          <ErrorMessage
            message={`Error loading office: ${officeError.message}`}
          />
        )
        : officeLink && officeLink.length > 0
        ? (
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="text-gray-600">Office Name:</div>
            <div>{officeLink[0].name ?? "Unnamed office"}</div>

            <div className="text-gray-600">Office ID:</div>
            <div>{officeLink[0].$primaryKey}</div>

            <div className="text-gray-600">Location:</div>
            <div>
              {officeLink[0].location
                ? (
                  `Location available`
                )
                : "No location data"}
            </div>
          </div>
        )
        : <div className="text-sm italic">No office information available</div>}
    </div>
  );
}
