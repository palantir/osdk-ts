/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import { beforeEach, describe, expect, it } from "vitest";
import type { BaseServerObject } from "./BaseServerObject.js";
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";
import { getObjectsFromSet } from "./getObjectsFromSet.js";

describe(getObjectsFromSet, () => {
  let fauxDataStore: FauxDataStore;

  const activeEmployeesRid: OntologiesV2.ObjectSetRid =
    "ri.object-set.active-employees";
  const nestedActiveEmployeesRid: OntologiesV2.ObjectSetRid =
    "ri.object-set.nested-active-employees";

  const employeeObjects: BaseServerObject[] = [
    {
      __apiName: "Employee",
      __primaryKey: "a",
      __rid: "ri.employee.a",
      id: "a",
      status: "ACTIVE",
      level: 1,
    },
    {
      __apiName: "Employee",
      __primaryKey: "b",
      __rid: "ri.employee.b",
      id: "b",
      status: "INACTIVE",
      level: 2,
    },
    {
      __apiName: "Employee",
      __primaryKey: "c",
      __rid: "ri.employee.c",
      id: "c",
      status: "ACTIVE",
      level: 3,
    },
  ];

  const activeEmployeesObjectSet: OntologiesV2.ObjectSet = {
    type: "filter",
    objectSet: {
      type: "base",
      objectType: "Employee",
    },
    where: {
      type: "eq",
      field: "status",
      value: "ACTIVE",
    },
  };

  beforeEach(() => {
    const fauxOntology = new FauxOntology({
      apiName: "foo",
      description: "foo",
      displayName: "foo",
      rid: "ri.foo",
    });
    fauxDataStore = new FauxDataStore(
      fauxOntology,
      new FauxAttachmentStore(),
      true,
    );

    fauxOntology.registerObjectType({
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "Employee",
        description: "Employee",
        displayName: "Employee",
        rid: "ri.Employee",
        icon: {
          color: "#000000",
          name: "whoCares",
          type: "blueprint",
        },
        pluralDisplayName: "Employees",
        primaryKey: "id",
        properties: {
          id: {
            dataType: { type: "string" },
            rid: "ri.id",
            displayName: "id",
            description: "id",
            typeClasses: [],
          },
          status: {
            dataType: { type: "string" },
            rid: "ri.status",
            displayName: "status",
            description: "status",
            typeClasses: [],
          },
          level: {
            dataType: { type: "integer" },
            rid: "ri.level",
            displayName: "level",
            description: "level",
            typeClasses: [],
          },
        },
        status: "ACTIVE",
        titleProperty: "id",
      },
      sharedPropertyTypeMapping: {},
    });

    for (const employee of employeeObjects) {
      fauxDataStore.registerObject(employee);
    }
  });

  const ids = (objects: BaseServerObject[]) => objects.map(o => o.id);

  it("resolves a reference object set from the data store", () => {
    fauxDataStore.registerObjectSet(
      activeEmployeesRid,
      activeEmployeesObjectSet,
    );

    expect(ids(getObjectsFromSet(
      fauxDataStore,
      {
        type: "reference",
        reference: activeEmployeesRid,
      },
      undefined,
    ))).toEqual(["a", "c"]);
  });

  it("resolves nested reference object sets", () => {
    fauxDataStore.registerObjectSet(
      activeEmployeesRid,
      activeEmployeesObjectSet,
    );
    fauxDataStore.registerObjectSet(
      nestedActiveEmployeesRid,
      {
        type: "reference",
        reference: activeEmployeesRid,
      },
    );

    expect(ids(getObjectsFromSet(
      fauxDataStore,
      {
        type: "reference",
        reference: nestedActiveEmployeesRid,
      },
      undefined,
    ))).toEqual(["a", "c"]);
  });

  it("supports references inside composed object sets", () => {
    fauxDataStore.registerObjectSet(
      activeEmployeesRid,
      activeEmployeesObjectSet,
    );

    expect(ids(getObjectsFromSet(
      fauxDataStore,
      {
        type: "intersect",
        objectSets: [
          {
            type: "reference",
            reference: activeEmployeesRid,
          },
          {
            type: "filter",
            objectSet: {
              type: "base",
              objectType: "Employee",
            },
            where: {
              type: "gte",
              field: "level",
              value: 2,
            },
          },
        ],
      },
      undefined,
    ))).toEqual(["c"]);
  });

  it("supports references in derived property object sets", () => {
    fauxDataStore.registerObjectSet(
      activeEmployeesRid,
      activeEmployeesObjectSet,
    );

    const objects = getObjectsFromSet(
      fauxDataStore,
      {
        type: "withProperties",
        objectSet: {
          type: "base",
          objectType: "Employee",
        },
        derivedProperties: {
          activeEmployeeCount: {
            type: "selection",
            objectSet: {
              type: "reference",
              reference: activeEmployeesRid,
            },
            operation: {
              type: "count",
            },
          },
        },
      },
      undefined,
    );

    expect(objects.map(o => ({
      id: o.id,
      activeEmployeeCount: o.activeEmployeeCount,
    }))).toEqual([
      { id: "a", activeEmployeeCount: "2" },
      { id: "b", activeEmployeeCount: "2" },
      { id: "c", activeEmployeeCount: "2" },
    ]);
  });

  it("throws ObjectSetNotFound for missing reference object sets", () => {
    expect(() =>
      getObjectsFromSet(
        fauxDataStore,
        {
          type: "reference",
          reference: "ri.object-set.missing",
        },
        undefined,
      )
    ).toThrow(
      "NOT_FOUND ObjectSetNotFound {\"objectSetRid\":\"ri.object-set.missing\"}",
    );
  });
});
