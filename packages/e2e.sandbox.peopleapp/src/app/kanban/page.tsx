import type { Osdk, PropertyKeys } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import type { ObjectKanbanColumn ,
  type CardMovedInfo,
  ObjectKanban,
} from "@osdk/react-components/experimental/object-kanban";
import { useMemo, useState } from "react";
import { Section } from "../../components/Section.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import { EmployeeDetails } from "../employees/EmployeeDetails.js";

type EmployeeOsdk = Osdk.Instance<
  Employee,
  "$allBaseProperties",
  PropertyKeys<Employee>
>;

type ColumnId = "new-york" | "london" | "palo-alto";

const CITIES: Array<{ id: ColumnId; displayName: string; city: string }> = [
  { id: "new-york", displayName: "New York", city: "New York" },
  { id: "london", displayName: "London", city: "London" },
  { id: "palo-alto", displayName: "Palo Alto", city: "Palo Alto" },
];

export function KanbanPage() {
  const client = useOsdkClient();
  const [selectedEmployee, setSelectedEmployee] = useState<
    EmployeeOsdk | undefined
  >(undefined);
  const [lastMove, setLastMove] = useState<
    | {
      objectPrimaryKey: string | number | boolean;
      objectTitle: string | undefined;
      fromColumnId: ColumnId;
      toColumnId: ColumnId;
    }
    | undefined
  >(undefined);

  const columns = useMemo<Array<ObjectKanbanColumn<Employee, ColumnId>>>(
    () =>
      CITIES.map(({ id, displayName, city }) => ({
        id,
        displayName,
        objectSet: client(Employee).where({ locationCity: { $eq: city } }),
      })),
    [client],
  );

  const renderCardBody = useMemo(
    () => (object: EmployeeOsdk) => (
      <div className="text-xs text-gray-600">
        <div>{object.jobTitle ?? "No job title"}</div>
        <div className="text-gray-500">
          {object.businessArea ?? "No business area"}
        </div>
      </div>
    ),
    [],
  );

  const handleSelectObject = useMemo(
    () => (object: EmployeeOsdk) => {
      setSelectedEmployee(object);
    },
    [],
  );

  const handleCardMoved = useMemo(
    () => (info: CardMovedInfo<Employee, ColumnId>) => {
      // Moving a Foundry employee between fake "city" columns isn't a real
      // operation — log it so reviewers can confirm the callback fires.
       
      console.info("ObjectKanban onCardMoved", info);
      setLastMove({
        objectPrimaryKey: info.object.$primaryKey,
        objectTitle: info.object.$title,
        fromColumnId: info.fromColumnId,
        toColumnId: info.toColumnId,
      });
    },
    [],
  );

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-start text-left w-full gap-8">
        <div className="flex-1 min-w-0">
          <Section>
            <div style={{ height: "600px", width: "100%" }}>
              <ObjectKanban<Employee, ColumnId>
                objectType={Employee}
                columns={columns}
                renderCardBody={renderCardBody}
                onSelectObject={handleSelectObject}
                onCardMoved={handleCardMoved}
              />
            </div>
          </Section>
        </div>

        <div className="w-96 flex-shrink-0">
          <Section>
            <EmployeeDetails employee={selectedEmployee} />
          </Section>
          <Section>
            <div className="text-sm font-medium mb-2">
              Last onCardMoved payload
            </div>
            <div className="p-3 bg-gray-100 text-xs font-mono whitespace-pre-wrap break-all">
              {lastMove
                ? JSON.stringify(lastMove, null, 2)
                : "No card moved yet."}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
