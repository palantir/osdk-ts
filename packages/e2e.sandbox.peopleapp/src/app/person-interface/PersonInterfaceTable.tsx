import type { DerivedProperty } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import {
  ObjectTable,
  type ColumnDefinition,
} from "@osdk/react-components/experimental/object-table";
import React, { useMemo } from "react";

import { Person } from "../../generatedNoCheck2/index.js";

type RDPs = {
  officeName: "string";
  officeCount: "integer";
};

const columnDefinitions: Array<ColumnDefinition<Person, RDPs>> = [
  {
    locator: {
      type: "property",
      id: "employeeNumber",
    },
    columnName: "Employee Number",
  },
  {
    locator: {
      type: "property",
      id: "email",
    },
    columnName: "Email",
  },
  {
    locator: {
      type: "rdp",
      id: "officeName",
      creator: (baseObjectSet: DerivedProperty.Builder<Person, false>) =>
        baseObjectSet.pivotTo("office").selectProperty("name"),
    },
    columnName: "Office Name",
  },
  {
    locator: {
      type: "rdp",
      id: "officeCount",
      creator: (baseObjectSet: DerivedProperty.Builder<Person, false>) =>
        baseObjectSet.pivotTo("office").aggregate("$count"),
    },
    columnName: "Office Count",
  },
];

export function PersonInterfaceTable(): React.ReactElement {
  const client = useOsdkClient();
  const os = useMemo(() => client(Person), [client]);

  return (
    <div
      style={{
        height: "300px",
        overflow: "hidden",
      }}
    >
      <ObjectTable<Person, RDPs>
        objectType={Person}
        objectSet={os}
        columnDefinitions={columnDefinitions}
        selectionMode={"multiple"}
      />
    </div>
  );
}
