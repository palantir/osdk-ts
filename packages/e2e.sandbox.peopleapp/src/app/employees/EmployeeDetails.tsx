import { useLinks, usePrefetch, useOsdkObjects } from "@osdk/react/experimental";
import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage.js";
import { H2 } from "../../components/headers.js";
import { LoadingMessage } from "../../components/LoadingMessage.js";
import { OfficeSelector } from "../../components/OfficeSelector.js";
import type { Employee } from "../../generatedNoCheck2/index.js";
import { Employee as EmployeeType } from "../../generatedNoCheck2/index.js";

interface EmployeeDetailsProps {
  employee: Employee.OsdkInstance | undefined;
}

export function EmployeeDetails({ employee }: EmployeeDetailsProps) {
  const { prefetchList, prefetchObject } = usePrefetch();
  
  // Only use useLinks when we have an employee to avoid unnecessary API calls
  const { links: officeLink, isLoading: isOfficeLoading, error: officeError } =
    useLinks(
      employee ?? [],
      "primaryOffice",
      {},
    );
  
  // Prefetch related employees when employee changes
  React.useEffect(() => {
    if (employee) {
      // Prefetch employees from same department
      if (employee.department) {
        prefetchList({
          type: EmployeeType,
          where: { department: employee.department },
          pageSize: 10,
        }).catch(() => {
          // Silently handle prefetch errors
        });
      }
      
      // Prefetch employees from same team
      if (employee.team) {
        prefetchList({
          type: EmployeeType,
          where: { team: employee.team },
          pageSize: 10,
        }).catch(() => {
          // Silently handle prefetch errors
        });
      }
      
      // If we have a manager ID, prefetch that employee
      if (employee.managerId) {
        prefetchObject(EmployeeType, employee.managerId).catch(() => {
          // Silently handle prefetch errors
        });
      }
    }
  }, [employee, prefetchList, prefetchObject]);

  // Fetch and display related employees (same department)
  const relatedEmployees = useOsdkObjects(EmployeeType, {
    where: employee?.department ? { department: employee.department } : { $primaryKey: -1 },
    pageSize: 5,
    // Prefetch employees from the same office if we have office info
    prefetch: officeLink && officeLink.length > 0 && officeLink[0].$primaryKey
      ? [{
          type: EmployeeType,
          where: { primaryOfficeId: officeLink[0].$primaryKey },
          pageSize: 10,
        }]
      : [],
  });

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
      
      {/* Related Employees Section */}
      {employee.department && (
        <div className="mt-6">
          <H2>Related Employees (Same Department)</H2>
          {relatedEmployees.isLoading && !relatedEmployees.data ? (
            <LoadingMessage message="Loading related employees..." />
          ) : relatedEmployees.data && relatedEmployees.data.length > 1 ? (
            <div className="mt-2 space-y-1">
              {relatedEmployees.data
                .filter(emp => emp.$primaryKey !== employee.$primaryKey)
                .slice(0, 4)
                .map(emp => (
                  <div key={emp.$primaryKey} className="p-2 bg-gray-50 rounded text-sm">
                    <span className="font-medium">{emp.fullName}</span>
                    <span className="text-gray-600 ml-2">- {emp.jobTitle || "N/A"}</span>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-sm italic text-gray-500">No other employees in this department</div>
          )}
        </div>
      )}
      
      {/* Prefetch Status Indicator */}
      <div className="mt-6 p-2 bg-blue-50 rounded text-xs text-blue-700">
        <strong>Prefetch Active:</strong> Related employees and office colleagues are being prefetched for faster navigation
      </div>
    </div>
  );
}
