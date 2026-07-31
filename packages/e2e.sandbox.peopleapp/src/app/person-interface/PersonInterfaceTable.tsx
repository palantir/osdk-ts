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
    [],
  );

  const osdkObjectsResults = useOsdkObjects(Person, {
    ...options,
    // BUG: response from API gateway does not include RDP
    // $includeAllBaseObjectProperties: true
  });

  const objectSetResults = useObjectSet(os, options);

  if (!osdkObjectsResults.isLoading) {
    // STILL BROKEN: rows carry no derived properties. InterfaceListQuery
    // reloads each row as a full object to satisfy the object cache, and that
    // second fetch cannot replay an interface-scoped derived clause, so the
    // values the first response computed are discarded.
    console.log("[useOsdkObjects] data", osdkObjectsResults.data);
    // Cast
    if (osdkObjectsResults?.data?.length) {
      const obj = osdkObjectsResults.data[0];
      console.log(
        "[useOsdkObjects] Casting interface object:",
        obj,
        "to concrete type:",
        obj.$as("Employee"),
      );
    }
  }
  if (!objectSetResults.isLoading) {
    // FIXED here: rows are interface views keyed by the interface's property
    // api names (employeeNumber, email), and the derived properties are
    // present on them.
    console.log("[useObjectSet] data", objectSetResults.data);
    // Cast
    if (objectSetResults?.data?.length) {
      const obj = objectSetResults.data[0];
      // FIXED here: obj is the interface view, and casting to the concrete
      // type keeps the derived properties.
      console.log(
        "[useObjectSet] Casting interface object:",
        obj,
        "to concrete type:",
        obj.$as("Employee"),
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
