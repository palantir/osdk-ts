import type { Office } from "../generatedNoCheck2/index.js";

interface OfficesListContentProps {
  offices: Office.OsdkInstance[] | undefined;
  selectedOffice: Office.OsdkInstance | undefined;
  onSelectOffice: (office: Office.OsdkInstance) => void;
}

export function OfficesListContent({
  offices,
  selectedOffice,
  onSelectOffice,
}: OfficesListContentProps) {
  if (!offices || offices.length === 0) {
    return <div className="text-sm italic mb-8">No offices found</div>;
  }

  return (
    <ul className="list-none mb-8">
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
  );
}
