import { useLinks } from "@osdk/react/experimental";
import { H2 } from "../../components/headers.js";
import type { Office } from "../../generatedNoCheck2/index.js";

interface OfficeDetailsProps {
  office: Office.OsdkInstance | undefined;
}

export function OfficeDetails({ office }: OfficeDetailsProps) {
  // Only use useLinks when we have an office to avoid unnecessary API calls
  const {
    links: occupants,
    isLoading: isOccupantsLoading,
    error: occupantsError,
  } = office
    ? useLinks(
      office,
      "occupants",
      {},
    )
    : { links: undefined, isLoading: false, error: undefined };

  if (!office) {
    return (
      <div className="p-4 text-gray-500 italic">
        Select an office to view its details
      </div>
    );
  }

  return (
    <div>
      <H2>Office Details</H2>
      <div className="mb-4">
        <div className="font-medium text-lg">
          {office.name ?? "Unnamed Office"}
        </div>
        <div className="text-sm text-gray-600 mb-2">
          ID: {office.$primaryKey}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="text-gray-600">Location:</div>
          <div>
            {office.location != null
              ? "Location available"
              : "No location data"}
          </div>
        </div>
      </div>

      <H2>Occupants</H2>
      {isOccupantsLoading
        ? <div className="text-sm italic">Loading occupants...</div>
        : occupantsError
        ? (
          <div className="text-sm text-red-500">
            Error loading occupants: {occupantsError.message}
          </div>
        )
        : occupants && occupants.length > 0
        ? (
          <div>
            <p className="mb-2 text-sm text-gray-600">
              {occupants.length} employees in this office
            </p>
            <ul className="list-none">
              {occupants.map(employee => (
                <li
                  key={employee.$primaryKey}
                  className="py-2 px-3 mb-1 rounded bg-gray-50"
                >
                  <div className="font-medium">
                    {(employee as any).fullName ?? "No name available"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {(employee as any).jobTitle ?? "No job title"}{" "}
                    - #{(employee as any).employeeNumber}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
        : <div className="text-sm italic">No occupants in this office</div>}
    </div>
  );
}
