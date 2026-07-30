import type { DerivedProperty } from "@osdk/api";
import { useObjectSet, useOsdkClient, useOsdkObjects } from "@osdk/react";
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

  const options = useMemo(
    () => ({
      withProperties: {
        officeName: (base: DerivedProperty.Builder<Person, false>) =>
          base.pivotTo("office").selectProperty("name"),
        officeCount: (base: DerivedProperty.Builder<Person, false>) =>
          base.pivotTo("office").aggregate("$count"),
      },
      pageSize: 5,
    }),
    []
  );

  const osdkObjectsResults = useOsdkObjects(Person, {
    ...options,
    // BUG: response from API gateway does not include RDP
    // $includeAllBaseObjectProperties: true
  });

  const objectSetResults = useObjectSet(os, options);

  if (!osdkObjectsResults.isLoading) {
    // BUG: No RDPs
    console.log("[useOsdkObjects] data", osdkObjectsResults.data);
    // Cast
    if (osdkObjectsResults?.data?.length) {
      const obj = osdkObjectsResults.data[0];
      console.log(
        "[useOsdkObjects] Casting interface object:",
        obj,
        "to concrete type:",
        obj.$as("Employee")
      );
    }
  }
  if (!objectSetResults.isLoading) {
    // BUG: initial log contains RDP and interface properties keyed with concrete object property IDs
    // later log has no RDP and loads all base properties
    console.log("[useObjectSet] data", objectSetResults.data);
    // Cast
    if (objectSetResults?.data?.length) {
      const obj = objectSetResults.data[0];
      // BUG: obj is currently the concrete type
      console.log(
        "[useObjectSet] Casting interface object:",
        obj,
        "to concrete type:",
        obj.$as("Employee")
      );
    }
  }

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
