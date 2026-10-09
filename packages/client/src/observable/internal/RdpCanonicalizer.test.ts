/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { DerivedProperty, InterfaceDefinition } from "@osdk/api";
import { Employee } from "@osdk/client.test.ontology";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import { createClient } from "../../createClient.js";
import { createWithPropertiesObjectSet } from "../../derivedProperties/createWithPropertiesObjectSet.js";
import { getWireObjectSet } from "../../objectSet/createObjectSet.js";
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";
import { extractRdpFieldNames } from "./utils/rdpFieldOperations.js";

describe("RdpCanonicalizer", () => {
  it("preserves interface namespaces when a canonical builder is reused", () => {
    const client = createClient(
      "https://example.com",
      "ri.ontology.test",
      () => "token",
    );
    const person: InterfaceDefinition = {
      type: "interface",
      apiName: "com.example.Person",
    };
    const rdp: DerivedProperty.Clause<InterfaceDefinition> = {
      aliceCount: (base) =>
        base.where({ fullName: "Alice" }).aggregate("$count"),
    };
    const canonical = new RdpCanonicalizer().canonicalize(rdp);
    expect(
      getWireObjectSet(client(person).withProperties(canonical)),
    ).toMatchObject({
      derivedProperties: {
        aliceCount: {
          objectSet: {
            where: { field: "com.example.fullName", value: "Alice" },
          },
        },
      },
    });
  });

  it("shares typed builders with definitions when the builders are seen first", () => {
    const canonicalizer = new RdpCanonicalizer();
    const rdp: DerivedProperty.Clause<Employee> = {
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const definitions: Record<string, DerivedPropertyDefinition> = {
      leadName: {
        type: "selection",
        objectSet: {
          type: "searchAround",
          link: "lead",
          objectSet: { type: "methodInput" },
        },
        operation: { type: "get", selectedPropertyApiName: "fullName" },
      },
    };
    const canonical = canonicalizer.canonicalizeForType(rdp, Employee);
    expect(canonicalizer.canonicalizeDefinitions(definitions)).toBe(canonical);
    expect(canonicalizer.canonicalizeForType(rdp, Employee)).toBe(canonical);
    expect(
      canonicalizer.canonicalizeDefinitions({
        leadName: { type: "property", apiName: "fullName" },
      }),
    ).not.toBe(canonical);
    const definitionMap = new Map<object, DerivedPropertyDefinition>();
    const builder = createWithPropertiesObjectSet(
      Employee,
      { type: "methodInput" },
      definitionMap,
      true,
    );
    expect(definitionMap.get(canonical.leadName(builder))).toEqual(
      definitions.leadName,
    );
  });

  it("shares namespaced interface builders with definitions when the definitions are seen first", () => {
    const canonicalizer = new RdpCanonicalizer();
    const person: InterfaceDefinition = {
      type: "interface",
      apiName: "com.example.Person",
    };
    const rdp: DerivedProperty.Clause<InterfaceDefinition> = {
      aliceCount: (base) =>
        base.where({ fullName: "Alice" }).aggregate("$count"),
    };
    const definitions: Record<string, DerivedPropertyDefinition> = {
      aliceCount: {
        type: "selection",
        objectSet: {
          type: "filter",
          objectSet: { type: "methodInput" },
          where: { type: "eq", field: "com.example.fullName", value: "Alice" },
        },
        operation: { type: "count" },
      },
    };
    const canonical = canonicalizer.canonicalizeDefinitions(definitions);
    expect(canonicalizer.canonicalizeForType(rdp, person)).toBe(canonical);
    expect(canonicalizer.canonicalizeForType(rdp, Employee)).not.toBe(
      canonical,
    );
    const definitionMap = new Map<object, DerivedPropertyDefinition>();
    const builder = createWithPropertiesObjectSet(
      person,
      { type: "methodInput" },
      definitionMap,
      true,
    );
    expect(definitionMap.get(canonical.aliceCount(builder))).toEqual(
      definitions.aliceCount,
    );
  });

  it("returns same canonical object for functionally identical RDPs with different function references", () => {
    const canonicalizer = new RdpCanonicalizer();

    const rdp1: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    // Same logic, different function references
    const rdp2: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    // Different references...
    expect(rdp1.derivedAddress).not.toBe(rdp2.derivedAddress);
    expect(rdp1.derivedName).not.toBe(rdp2.derivedName);

    // ...but same canonical object
    const canonical1 = canonicalizer.canonicalize(rdp1);
    const canonical2 = canonicalizer.canonicalize(rdp2);

    expect(canonical1).toBe(canonical2);
  });

  it("handles complex RDP with aggregations", () => {
    const canonicalizer = new RdpCanonicalizer();

    const rdp1: DerivedProperty.Clause<typeof Employee> = {
      peepsCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    const rdp2: DerivedProperty.Clause<typeof Employee> = {
      peepsCount: (base) => base.pivotTo("peeps").aggregate("$count"),
      leadName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };

    const canonical1 = canonicalizer.canonicalize(rdp1);
    const canonical2 = canonicalizer.canonicalize(rdp2);

    expect(canonical1).toBe(canonical2);
  });

  it("caches results for the same input object", () => {
    const canonicalizer = new RdpCanonicalizer();

    const rdp: DerivedProperty.Clause<typeof Employee> = {
      derivedProp: (base) => base.pivotTo("lead").selectProperty("employeeId"),
    };

    const canonical1 = canonicalizer.canonicalize(rdp);
    const canonical2 = canonicalizer.canonicalize(rdp);

    expect(canonical1).toBe(canonical2);
  });

  it("shared canonicalizer produces identical canonical and field sets across callers", () => {
    const sharedCanonicalizer = new RdpCanonicalizer();

    // Two callers (e.g. ListsHelper, ObjectSetHelper) with same RDP definition
    const listWithProperties: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const listCanonical = sharedCanonicalizer.canonicalize(listWithProperties);

    const objectSetWithProperties: DerivedProperty.Clause<typeof Employee> = {
      derivedAddress: (base) =>
        base.pivotTo("lead").selectProperty("employeeId"),
      derivedName: (base) => base.pivotTo("lead").selectProperty("fullName"),
    };
    const objectSetCanonical = sharedCanonicalizer.canonicalize(
      objectSetWithProperties,
    );

    expect(listCanonical).toBe(objectSetCanonical);

    const listFields = extractRdpFieldNames(listCanonical);
    const objectSetFields = extractRdpFieldNames(objectSetCanonical);
    expect(listFields).toEqual(objectSetFields);
    expect(listFields).toEqual(new Set(["derivedAddress", "derivedName"]));
  });
});
