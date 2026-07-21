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

import { Employee, Office } from "@osdk/client.test.ontology";
import type * as Ontology from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import type { SchemaMap } from "./schema.js";
import { createSeed, SeedBuilder } from "./SeedBuilder.js";
import { SeedError } from "./SeedError.js";
import type { SeedOutput, SeedRef } from "./types.js";

type WireType = Ontology.ObjectPropertyType["type"];

/**
 * A schema map matching the `Employee` and `Office` generated types. `build()`
 * validates every object property against these maps, so they must list the
 * properties the tests set (`fullName`) alongside the primary keys.
 */
function makeSchema(): SchemaMap {
  return {
    objects: new Map([
      [
        Employee.apiName,
        {
          properties: new Map<string, WireType>([
            ["employeeId", "integer"],
            ["fullName", "string"],
          ]),
          primaryKeyApiName: Employee.primaryKeyApiName,
        },
      ],
      [
        Office.apiName,
        {
          properties: new Map<string, WireType>([["officeId", "string"]]),
          primaryKeyApiName: Office.primaryKeyApiName,
        },
      ],
    ]),
  };
}

function newBuilder(): SeedBuilder {
  return new SeedBuilder(makeSchema());
}

/** A hand-built ref for exercising code paths that don't go through `create`. */
function employeeRef(employeeId: number): SeedRef<Employee> {
  return {
    $locator: { apiName: "Employee", primaryKeyValue: employeeId },
    employeeId,
  } as SeedRef<Employee>;
}

/** Builds a wire `ObjectTypeFullMetadata` from a compact spec. */
function makeObjectType(
  apiName: string,
  primaryKey: string,
  properties: Record<string, WireType>
): Ontology.ObjectTypeFullMetadata {
  return {
    objectType: {
      apiName,
      primaryKey,
      properties: Object.fromEntries(
        Object.entries(properties).map(([name, type]) => [
          name,
          { dataType: { type } },
        ])
      ),
    },
    linkTypes: [],
    implementsInterfaces: [],
    implementsInterfaces2: {},
    sharedPropertyTypeMapping: {},
  } as unknown as Ontology.ObjectTypeFullMetadata;
}

function makeMetadata(
  objectTypes: Record<string, Ontology.ObjectTypeFullMetadata>
): Ontology.OntologyFullMetadata {
  return {
    objectTypes,
    actionTypes: {},
    queryTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
    valueTypes: {},
  } as Ontology.OntologyFullMetadata;
}

describe("SeedBuilder", () => {
  describe("create", () => {
    it("stores the object and returns a frozen ref exposing locator and props", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      expect(sb.build().objects).toEqual({
        Employee: [{ employeeId: 1, fullName: "Alice" }],
      });
      expect(ref.$locator).toEqual({
        apiName: "Employee",
        primaryKeyValue: 1,
      });
      expect(ref.employeeId).toBe(1);
      expect(ref.fullName).toBe("Alice");
      expect(Object.isFrozen(ref)).toBe(true);
    });

    it("keeps the primary key's original type in the locator", () => {
      const emp = newBuilder().create(Employee, { employeeId: 7 });
      expect(emp.$locator.primaryKeyValue).toBe(7);

      const office = newBuilder().create(Office, { officeId: "NYC" });
      expect(office.$locator.primaryKeyValue).toBe("NYC");
    });

    it("overwrites when the same primary key is created twice", () => {
      const sb = newBuilder();
      sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      sb.create(Employee, { employeeId: 1, fullName: "Bob" });
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 1, fullName: "Bob" },
      ]);
    });

    it("throws a SeedError when the object type is not in the schema", () => {
      const sb = new SeedBuilder({ objects: new Map() });
      expect(() => sb.create(Employee, { employeeId: 1 })).toThrow(SeedError);
    });
  });

  describe("ref", () => {
    it("returns undefined for a non-existent object", () => {
      expect(newBuilder().ref(Employee, 99)).toBeUndefined();
    });

    it("returns a frozen ref for an existing object", () => {
      const sb = newBuilder();
      sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      const ref = sb.ref(Employee, 1);
      expect(ref).toBeDefined();
      expect(ref!.$locator).toEqual({
        apiName: "Employee",
        primaryKeyValue: 1,
      });
      expect(ref!.fullName).toBe("Alice");
      expect(Object.isFrozen(ref)).toBe(true);
    });
  });

  describe("update", () => {
    it("replaces props wholesale while preserving the primary key", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      sb.update(ref, { fullName: "Alicia" });
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 1, fullName: "Alicia" },
      ]);
      sb.update(ref, {});
      expect(sb.build().objects.Employee).toEqual([{ employeeId: 1 }]);
    });

    it("creates the object when the ref does not yet exist", () => {
      const sb = newBuilder();
      sb.update(employeeRef(2), { fullName: "Newcomer" });
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 2, fullName: "Newcomer" },
      ]);
    });

    it("returns the same ref it was given", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1 });
      expect(sb.update(ref, { fullName: "Alice" })).toBe(ref);
    });

    it("keeps the locator's primary key even if props tries to change it", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      sb.update(ref, {
        // @ts-expect-error primary key is excluded from the update props type
        employeeId: 999,
        fullName: "Alicia",
      });
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 1, fullName: "Alicia" },
      ]);
    });

    it("throws a SeedError when the object type is not in the schema", () => {
      const sb = new SeedBuilder({ objects: new Map() });
      expect(() => sb.update(employeeRef(1), { fullName: "x" })).toThrow(
        SeedError
      );
    });
  });

  describe("delete", () => {
    it("removes an existing object", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1 });
      sb.delete(ref);
      expect(sb.build().objects.Employee).toEqual([]);
    });

    it("is a no-op for a non-existent object and does not throw", () => {
      const sb = newBuilder();
      expect(() => sb.delete(employeeRef(5))).not.toThrow();
      expect(sb.build().objects.Employee).toEqual([]);
    });

    it("throws a SeedError when the object type is not in the schema", () => {
      const sb = new SeedBuilder({ objects: new Map() });
      expect(() => sb.delete(employeeRef(1))).toThrow(SeedError);
    });
  });

  describe("link", () => {
    it("adds a single link with the correct endpoints", () => {
      const sb = newBuilder();
      const emp = sb.create(Employee, { employeeId: 1 });
      const office = sb.create(Office, { officeId: "NYC" });
      sb.link(emp, "officeLink", office);

      const { links } = sb.build();
      expect(links).toHaveLength(1);
      expect(links[0]).toMatchObject({
        sourceObjectType: "Employee",
        sourceKey: "1",
        linkType: "officeLink",
        targetObjectType: "Office",
        targetKey: "NYC",
      });
      expect(links[0].name).toBe(
        ["Employee", "1", "officeLink", "Office", "NYC"].join(":")
      );
    });

    it("adds one link per target for a many-valued link given an array", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const a = sb.create(Employee, { employeeId: 2 });
      const b = sb.create(Employee, { employeeId: 3 });
      sb.link(lead, "peeps", [a, b]);

      const { links } = sb.build();
      expect(links).toHaveLength(2);
      expect(links.map((l) => l.targetKey).sort()).toEqual(["2", "3"]);
    });

    it("dedupes identical links", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const peep = sb.create(Employee, { employeeId: 2 });
      sb.link(lead, "peeps", peep);
      sb.link(lead, "peeps", peep);
      expect(sb.build().links).toHaveLength(1);
    });

    it("adds no links when given an empty target array", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      sb.link(lead, "peeps", []);
      expect(sb.build().links).toEqual([]);
    });

    it("keeps links with the same endpoints but different link types", () => {
      const sb = newBuilder();
      const a = sb.create(Employee, { employeeId: 1 });
      const b = sb.create(Employee, { employeeId: 2 });
      sb.link(a, "lead", b);
      sb.link(a, "peeps", b);

      const { links } = sb.build();
      expect(links).toHaveLength(2);
      expect(links.map((l) => l.linkType).sort()).toEqual(["lead", "peeps"]);
    });
  });

  describe("unlink", () => {
    it("removes a previously added link", () => {
      const sb = newBuilder();
      const emp = sb.create(Employee, { employeeId: 1 });
      const office = sb.create(Office, { officeId: "NYC" });
      sb.link(emp, "officeLink", office);
      sb.unlink(emp, "officeLink", office);
      expect(sb.build().links).toEqual([]);
    });

    it("removes only the matching targets", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const a = sb.create(Employee, { employeeId: 2 });
      const b = sb.create(Employee, { employeeId: 3 });
      sb.link(lead, "peeps", [a, b]);
      sb.unlink(lead, "peeps", a);

      const { links } = sb.build();
      expect(links).toHaveLength(1);
      expect(links[0].targetKey).toBe("3");
    });

    it("is a no-op when no link matches and does not throw", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const peep = sb.create(Employee, { employeeId: 2 });
      expect(() => sb.unlink(lead, "peeps", peep)).not.toThrow();
      expect(sb.build().links).toEqual([]);
    });

    it("removes every target given an array", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const a = sb.create(Employee, { employeeId: 2 });
      const b = sb.create(Employee, { employeeId: 3 });
      sb.link(lead, "peeps", [a, b]);
      sb.unlink(lead, "peeps", [a, b]);
      expect(sb.build().links).toEqual([]);
    });
  });

  describe("build", () => {
    it("returns empty objects and links for a fresh builder", () => {
      expect(newBuilder().build()).toEqual({ objects: {}, links: [] });
    });

    it("groups objects by api name", () => {
      const sb = newBuilder();
      sb.create(Employee, { employeeId: 1 });
      sb.create(Employee, { employeeId: 2 });
      sb.create(Office, { officeId: "NYC" });

      const { objects } = sb.build();
      expect(objects.Employee).toHaveLength(2);
      expect(objects.Office).toHaveLength(1);
    });
  });

  describe("from", () => {
    it("loads objects and links from a seed output", () => {
      const input: SeedOutput = {
        objects: {
          Employee: [{ employeeId: 1, fullName: "Alice" }],
          Office: [{ officeId: "NYC" }],
        },
        links: [
          {
            name: "ignored",
            linkType: "officeLink",
            sourceObjectType: "Employee",
            sourceKey: "1",
            targetObjectType: "Office",
            targetKey: "NYC",
          },
        ],
      };

      const sb = newBuilder();
      sb.from(input);
      const out = sb.build();

      expect(out.objects.Employee).toEqual([
        { employeeId: 1, fullName: "Alice" },
      ]);
      expect(out.objects.Office).toEqual([{ officeId: "NYC" }]);
      expect(out.links).toHaveLength(1);
      expect(out.links[0]).toMatchObject({
        sourceObjectType: "Employee",
        sourceKey: "1",
        linkType: "officeLink",
        targetObjectType: "Office",
        targetKey: "NYC",
      });
    });

    it("omits links whose target object was not created", () => {
      const input: SeedOutput = {
        objects: {
          Employee: [{ employeeId: 1 }],
        },
        links: [
          {
            name: "dangling",
            linkType: "officeLink",
            sourceObjectType: "Employee",
            sourceKey: "1",
            targetObjectType: "Office",
            targetKey: "MISSING",
          },
        ],
      };

      const sb = newBuilder();
      sb.from(input);
      expect(sb.build().links).toEqual([]);
    });

    it("omits links whose source object was not created", () => {
      const input: SeedOutput = {
        objects: {
          Office: [{ officeId: "NYC" }],
        },
        links: [
          {
            name: "dangling",
            linkType: "officeLink",
            sourceObjectType: "Employee",
            sourceKey: "MISSING",
            targetObjectType: "Office",
            targetKey: "NYC",
          },
        ],
      };

      const sb = newBuilder();
      sb.from(input);
      expect(sb.build().links).toEqual([]);
    });

    it("adds to objects already present in the builder", () => {
      const sb = newBuilder();
      sb.create(Office, { officeId: "SF" });
      sb.from({ objects: { Employee: [{ employeeId: 1 }] }, links: [] });

      const { objects } = sb.build();
      expect(objects.Office).toEqual([{ officeId: "SF" }]);
      expect(objects.Employee).toEqual([{ employeeId: 1 }]);
    });

    it("resolves links against objects already in the builder", () => {
      const sb = newBuilder();
      const office = sb.create(Office, { officeId: "NYC" });
      sb.create(Employee, { employeeId: 1 });
      void office;
      sb.from({
        objects: {},
        links: [
          {
            name: "ignored",
            linkType: "officeLink",
            sourceObjectType: "Employee",
            sourceKey: "1",
            targetObjectType: "Office",
            targetKey: "NYC",
          },
        ],
      });
      expect(sb.build().links).toHaveLength(1);
    });
  });

  describe("validation on build", () => {
    // Exhaustive validation branches are covered in validation.test.ts; here we
    // only confirm build() runs the validator over its accumulated objects.
    it("runs validation, throwing a SeedError on invalid data", () => {
      const sb = newBuilder();
      sb.from({
        objects: { Employee: [{ employeeId: 1, fullName: 123 }] },
        links: [],
      });
      expect(() => sb.build()).toThrow(SeedError);
    });
  });
});

describe("createSeed", () => {
  const metadata = makeMetadata({
    Employee: makeObjectType("Employee", "employeeId", {
      employeeId: "integer",
      fullName: "string",
    }),
    Office: makeObjectType("Office", "officeId", { officeId: "string" }),
  });

  it("runs the callback and returns the built output", () => {
    const [out] = createSeed(metadata, (sb) => {
      sb.create(Employee, { employeeId: 1, fullName: "Alice" });
    });
    expect(out).toEqual({
      objects: { Employee: [{ employeeId: 1, fullName: "Alice" }] },
      links: [],
    });
  });

  it("derives the primary key from the metadata", () => {
    const [out] = createSeed(metadata, (sb) => {
      const office = sb.create(Office, { officeId: "NYC" });
      const emp = sb.create(Employee, { employeeId: 1 });
      sb.link(emp, "officeLink", office);
    });
    expect(out.links[0]).toMatchObject({ sourceKey: "1", targetKey: "NYC" });
  });

  it("throws a SeedError when the primary key is not among the properties", () => {
    const bad = makeMetadata({
      Bad: makeObjectType("Bad", "missingPk", { someOther: "string" }),
    });
    expect(() => createSeed(bad, () => {})).toThrow(SeedError);
  });
});
