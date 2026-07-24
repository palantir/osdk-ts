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

import { createSeed, SeedBuilder } from "./SeedBuilder.js";
import type { SeedRef } from "./types.js";

type WireType = Ontology.ObjectPropertyType["type"];

/**
 * A builder backed by metadata matching the `Employee` and `Office` generated
 * types. `create`/`update` validate every object property against this
 * metadata, so it must list the properties the tests set (`fullName`) alongside
 * the primary keys.
 */
function newBuilder(): SeedBuilder {
  return new SeedBuilder(
    makeMetadata({
      [Employee.apiName]: makeObjectType(
        Employee.apiName,
        Employee.primaryKeyApiName,
        { employeeId: "integer", fullName: "string" },
        "fullName"
      ),
      [Office.apiName]: makeObjectType(
        Office.apiName,
        Office.primaryKeyApiName,
        { officeId: "string" }
      ),
    })
  );
}

/** A hand-built ref for exercising code paths that don't go through `create`. */
function employeeRef(employeeId: number): SeedRef<Employee> {
  return {
    $apiName: "Employee",
    $objectType: "Employee",
    $objectSpecifier: `Employee:${employeeId}`,
    $primaryKey: employeeId,
    $title: undefined,
    employeeId,
  } as unknown as SeedRef<Employee>;
}

/** Builds a wire `ObjectTypeFullMetadata` from a compact spec. */
function makeObjectType(
  apiName: string,
  primaryKey: string,
  properties: Record<string, WireType>,
  titleProperty: string = primaryKey
): Ontology.ObjectTypeFullMetadata {
  return {
    objectType: {
      apiName,
      primaryKey,
      titleProperty,
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
    it("stores the object and returns a frozen ref exposing OsdkBase identifiers and props, preserving the primary key's type", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      expect(sb.build().objects).toEqual({
        Employee: [{ employeeId: 1, fullName: "Alice" }],
      });
      expect(ref.$apiName).toBe("Employee");
      expect(ref.$objectType).toBe("Employee");
      expect(ref.$primaryKey).toBe(1);
      expect(ref.$objectSpecifier).toBe("Employee:1");
      expect(ref.$title).toBe("Alice");
      expect(ref.employeeId).toBe(1);
      expect(ref.fullName).toBe("Alice");
      expect(Object.isFrozen(ref)).toBe(true);

      // A string primary key stays a string in $primaryKey.
      const office = sb.create(Office, { officeId: "NYC" });
      expect(office.$primaryKey).toBe("NYC");
      expect(office.$objectSpecifier).toBe("Office:NYC");
    });

    it("throws when the same primary key is created twice", () => {
      const sb = newBuilder();
      sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      expect(() =>
        sb.create(Employee, { employeeId: 1, fullName: "Bob" })
      ).toThrow("Employee with primary key 1 already exists.");
    });
  });

  describe("ref", () => {
    it("returns undefined for a non-existent object and a frozen ref for an existing one", () => {
      const sb = newBuilder();
      expect(sb.ref(Employee, 99)).toBeUndefined();

      sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      const ref = sb.ref(Employee, 1);
      expect(ref).toBeDefined();
      expect(ref!.$apiName).toBe("Employee");
      expect(ref!.$primaryKey).toBe(1);
      expect(ref!.$objectSpecifier).toBe("Employee:1");
      expect(ref!.$title).toBe("Alice");
      expect(ref!.fullName).toBe("Alice");
      expect(Object.isFrozen(ref)).toBe(true);
    });
  });

  describe("update", () => {
    it("merges props into the existing object, preserving the primary key, and returns the same ref", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      expect(sb.update(ref, { fullName: "Alicia" })).toBe(ref);
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 1, fullName: "Alicia" },
      ]);
      // An empty update leaves the existing props untouched.
      sb.update(ref, {});
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 1, fullName: "Alicia" },
      ]);
    });

    it("creates the object when the ref does not yet exist", () => {
      const sb = newBuilder();
      sb.update(employeeRef(2), { fullName: "Newcomer" });
      expect(sb.build().objects.Employee).toEqual([
        { employeeId: 2, fullName: "Newcomer" },
      ]);
    });

    it("throws when props tries to change the primary key", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      expect(() =>
        sb.update(ref, {
          // @ts-expect-error primary key is excluded from the update props type
          employeeId: 999,
          fullName: "Alicia",
        })
      ).toThrow("Cannot modify primary key employeeId");
    });
  });

  describe("delete", () => {
    it("removes an existing object, and is a no-op for a non-existent one", () => {
      const sb = newBuilder();
      const ref = sb.create(Employee, { employeeId: 1 });
      sb.delete(ref);
      expect(sb.build().objects.Employee).toEqual([]);

      expect(() => sb.delete(employeeRef(5))).not.toThrow();
      expect(sb.build().objects.Employee).toEqual([]);
    });
  });

  it("throws when the object type is not in the schema, for create/update/delete", () => {
    const sb = new SeedBuilder(makeMetadata({}));
    expect(() => sb.create(Employee, { employeeId: 1 })).toThrow(
      "Object not found in metadata"
    );
    expect(() => sb.update(employeeRef(1), { fullName: "x" })).toThrow(
      "Object not found in metadata"
    );
    expect(() => sb.delete(employeeRef(1))).toThrow(
      "Object not found in metadata"
    );
  });

  describe("link", () => {
    it("adds a single link with the correct endpoints and derived name", () => {
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

    it("adds one link per target given an array, and none for an empty array", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const a = sb.create(Employee, { employeeId: 2 });
      const b = sb.create(Employee, { employeeId: 3 });
      sb.link(lead, "peeps", [a, b]);

      const { links } = sb.build();
      expect(links).toHaveLength(2);
      expect(links.map((l) => l.targetKey).sort()).toEqual(["2", "3"]);

      sb.link(lead, "peeps", []);
      expect(sb.build().links).toHaveLength(2);
    });

    it("dedupes identical links but keeps ones differing only by link type", () => {
      const sb = newBuilder();
      const a = sb.create(Employee, { employeeId: 1 });
      const b = sb.create(Employee, { employeeId: 2 });
      sb.link(a, "peeps", b);
      sb.link(a, "peeps", b); // duplicate, deduped
      sb.link(a, "lead", b); // same endpoints, different type

      const { links } = sb.build();
      expect(links).toHaveLength(2);
      expect(links.map((l) => l.linkType).sort()).toEqual(["lead", "peeps"]);
    });
  });

  describe("unlink", () => {
    it("removes matching links given a single target or an array of targets", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const a = sb.create(Employee, { employeeId: 2 });
      const b = sb.create(Employee, { employeeId: 3 });

      sb.link(lead, "peeps", [a, b]);
      sb.unlink(lead, "peeps", a);
      const { links } = sb.build();
      expect(links).toHaveLength(1);
      expect(links[0].targetKey).toBe("3");

      sb.unlink(lead, "peeps", [a, b]);
      expect(sb.build().links).toEqual([]);
    });

    it("is a no-op when no link matches and does not throw", () => {
      const sb = newBuilder();
      const lead = sb.create(Employee, { employeeId: 1 });
      const peep = sb.create(Employee, { employeeId: 2 });
      expect(() => sb.unlink(lead, "peeps", peep)).not.toThrow();
      expect(sb.build().links).toEqual([]);
    });
  });

  describe("build", () => {
    it("returns empty output for a fresh builder and groups objects by api name", () => {
      expect(newBuilder().build()).toEqual({ objects: {}, links: [] });

      const sb = newBuilder();
      sb.create(Employee, { employeeId: 1 });
      sb.create(Employee, { employeeId: 2 });
      sb.create(Office, { officeId: "NYC" });

      const { objects } = sb.build();
      expect(objects.Employee).toHaveLength(2);
      expect(objects.Office).toHaveLength(1);
    });
  });

  describe("set", () => {
    it("loads objects and links from a seed output, replacing existing objects", () => {
      const sb = newBuilder();
      sb.create(Office, { officeId: "SF" });
      sb.set({
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
      });
      const out = sb.build();

      // The pre-existing SF office is replaced by the set() contents.
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

    it("records links even when their source or target object was not created", () => {
      const sb = newBuilder();
      sb.set({
        objects: {
          Employee: [{ employeeId: 1 }],
          Office: [{ officeId: "NYC" }],
        },
        links: [
          {
            name: "dangling-target",
            linkType: "officeLink",
            sourceObjectType: "Employee",
            sourceKey: "1",
            targetObjectType: "Office",
            targetKey: "MISSING",
          },
          {
            name: "dangling-source",
            linkType: "officeLink",
            sourceObjectType: "Employee",
            sourceKey: "MISSING",
            targetObjectType: "Office",
            targetKey: "NYC",
          },
        ],
      });
      const { links } = sb.build();
      expect(links).toHaveLength(2);
      expect(links.map((l) => [l.sourceKey, l.targetKey]).sort()).toEqual([
        ["1", "MISSING"],
        ["MISSING", "NYC"],
      ]);
    });
  });

  describe("addAll", () => {
    it("adds to existing objects and resolves links against them", () => {
      const sb = newBuilder();
      sb.create(Office, { officeId: "NYC" });
      sb.create(Employee, { employeeId: 1 });
      sb.addAll({
        objects: { Office: [{ officeId: "SF" }] },
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

      const { objects, links } = sb.build();
      expect(objects.Office).toEqual([{ officeId: "NYC" }, { officeId: "SF" }]);
      expect(objects.Employee).toEqual([{ employeeId: 1 }]);
      expect(links).toHaveLength(1);
    });
  });

  // Exhaustive validation branches are covered in validation.test.ts; here we
  // only confirm objects are validated as they're inserted (set/update) rather
  // than deferred to build().
  it("validates objects on mutation via set() and update()", () => {
    const sb = newBuilder();
    expect(() =>
      sb.set({
        objects: { Employee: [{ employeeId: 1, fullName: 123 }] },
        links: [],
      })
    ).toThrow(/expects string \(a string\) but got number/u);

    const ref = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
    expect(() =>
      sb.update(ref, { fullName: 123 as unknown as string })
    ).toThrow(/expects string \(a string\) but got number/u);
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

  it("runs the callback, returns the built output, and derives primary keys from metadata", () => {
    const [out] = createSeed(metadata, (sb) => {
      const office = sb.create(Office, { officeId: "NYC" });
      const emp = sb.create(Employee, { employeeId: 1, fullName: "Alice" });
      sb.link(emp, "officeLink", office);
    });
    expect(out.objects).toEqual({
      Employee: [{ employeeId: 1, fullName: "Alice" }],
      Office: [{ officeId: "NYC" }],
    });
    expect(out.links[0]).toMatchObject({ sourceKey: "1", targetKey: "NYC" });
  });

  it("throws when the primary key is not among the properties", () => {
    const bad = makeMetadata({
      Bad: makeObjectType("Bad", "missingPk", { someOther: "string" }),
    });
    expect(() => createSeed(bad, () => {})).toThrow(
      /Primary key 'missingPk' is not among the object's properties/u
    );
  });
});
