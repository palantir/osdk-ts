import { useOsdkObjects } from "@osdk/react/experimental";
import { Office } from "../generatedNoCheck2/index.js";
import { H2 } from "./headers.js";

interface OfficesListProps {
  selectedOffice: Office.OsdkInstance | undefined;
  onSelectOffice: (office: Office.OsdkInstance) => void;
}

export function OfficesList(
  { selectedOffice, onSelectOffice }: OfficesListProps,
) {
  const { data: offices, isLoading, error } = useOsdkObjects(Office, {});

  if (isLoading) {
    return <div className="text-sm italic">Loading offices...</div>;
  }

  if (error) {
    return (
      <div className="text-sm text-red-500">
        Error loading offices: {error.message}
      </div>
    );
  }

  if (!offices || offices.length === 0) {
    return <div className="text-sm italic">No offices found</div>;
  }

  return (
    <div>
      <H2>Offices</H2>
      <ul className="list-none">
        {offices.map(office => {
          const isSelected = selectedOffice?.$primaryKey === office.$primaryKey;
          return (
            <li
              key={office.$primaryKey}
              className={`py-2 px-3 mb-1 rounded cursor-pointer hover:bg-gray-100 ${
                isSelected ? "bg-blue-100 hover:bg-blue-100" : ""
              }`}
              onClick={() => onSelectOffice(office)}
            >
              <div className="font-medium">
                {office.name ?? "<name-missing>"}
              </div>
              <div className="text-sm text-gray-600">
                ID: {office.$primaryKey}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
