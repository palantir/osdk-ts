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

import { describe, expect, it } from "vitest";
import type { MinimalClient } from "../../../MinimalClientContext.js";
import { createOsdkObject } from "../../../object/convertWireToOsdkObjects/createOsdkObject.js";
import {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { SimpleOsdkProperties } from "../../../object/SimpleOsdkProperties.js";
import type { FetchedObjectTypeDefinition } from "../../../ontology/OntologyProvider.js";
import { InterfaceDefinitions } from "../../../ontology/OntologyProvider.js";
import { extractRdpFieldNames, reconcileObject } from "./rdpFieldOperations.js";

const mockClient = {} as MinimalClient;

const employeeObjectDef = {
  apiName: "Employee",
  type: "object",
  primaryKeyApiName: "employeeId",
  primaryKeyType: "integer",
  titleProperty: "fullName",
  rid: "",
  displayName: "",
  description: undefined,
  icon: undefined,
  visibility: undefined,
  pluralDisplayName: "",
  status: "ACTIVE",
  interfaceMap: {},
  inverseInterfaceMap: {},
  links: {},
  implements: [],
  [InterfaceDefinitions]: {},
  // Derived-property names (rdpField1/2/3, computedScore, ...) are deliberately
  // absent here: in production an RDP name is never a schema property, and the
  // merge relies on that to tell base properties from derived ones.
  properties: {
    employeeId: { type: "integer" },
    fullName: { type: "string" },
    office: { type: "string" },
  },
} satisfies FetchedObjectTypeDefinition;

function createTestObject(
  props: Partial<SimpleOsdkProperties>,
): ObjectHolder {
  const defaultProps: SimpleOsdkProperties = {
    $apiName: "Employee",
    $objectType: "Employee",
    $primaryKey: 50030,
    $title: "John Doe",
  };
  return createOsdkObject(mockClient, employeeObjectDef, {
    ...defaultProps,
    ...props,
  });
}

function assertValidObjectHolder(obj: ObjectHolder): void {
  expect(obj[UnderlyingOsdkObject]).toBeDefined();
  expect(obj[ObjectDefRef]).toBeDefined();
  expect(obj[ClientRef]).toBeDefined();
  expect(obj[ClientRef]).toBe(mockClient);
  expect(obj[ObjectDefRef]).toBe(employeeObjectDef);
  expect(Object.isFrozen(obj)).toBe(true);
}

function getUnderlyingProps(obj: ObjectHolder): SimpleOsdkProperties {
  return obj[UnderlyingOsdkObject] as SimpleOsdkProperties;
}

describe("extractRdpFieldNames", () => {
  it("returns empty set for undefined", () => {
    expect(extractRdpFieldNames(undefined)).toEqual(new Set());
  });
});

describe("reconcileObject", () => {
  it("returns the source identity when neither side has rdp fields", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set() },
      { value: undefined, rdpFields: new Set() },
    );

    expect(result).toBe(source);
  });

  it("returns the source identity when the rdp sets are equal", () => {
    const source = createTestObject({
      employeeId: 50030,
      rdpField1: "value",
      rdpField2: 42,
    });
    const rdpFields = new Set(["rdpField1", "rdpField2"]);

    const result = reconcileObject(
      { value: source, rdpFields },
      { value: undefined, rdpFields },
    );

    expect(result).toBe(source);
  });

  it("drops source rdp fields the target does not want", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "rdp-value-1",
      rdpField2: 42,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1", "rdpField2"]) },
      { value: undefined, rdpFields: new Set() },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.rdpField1).toBeUndefined();
    expect(underlying.rdpField2).toBeUndefined();
  });

  it("filters to the target rdp fields when the source is a strict superset", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "value1",
      rdpField2: 42,
      rdpField3: "value3",
    });

    const result = reconcileObject(
      {
        value: source,
        rdpFields: new Set(["rdpField1", "rdpField2", "rdpField3"]),
      },
      { value: undefined, rdpFields: new Set(["rdpField1"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.rdpField1).toBe("value1");
    expect(underlying.rdpField2).toBeUndefined();
    expect(underlying.rdpField3).toBeUndefined();
  });

  it("merges the source and target rdp fields", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      office: "NYC",
      rdpField1: "source-rdp1",
    });
    const target = createTestObject({
      employeeId: 50030,
      rdpField2: 999,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1"]) },
      { value: target, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.office).toBe("NYC");
    expect(underlying.rdpField1).toBe("source-rdp1");
    expect(underlying.rdpField2).toBe(999);
  });

  it("clears a shared rdp field that the source computed but left undefined", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: undefined,
    });
    const target = createTestObject({
      employeeId: 50030,
      rdpField1: "existing-value",
      rdpField2: 999,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1"]) },
      { value: target, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    // The source query computed rdpField1, so it is authoritative: an undefined
    // value means the derived value became null and the stale target value must
    // be cleared rather than retained.
    expect(underlying.rdpField1).toBeUndefined();
    // rdpField2 was not computed by the source query, so the target's value is
    // preserved.
    expect(underlying.rdpField2).toBe(999);
  });

  it("preserves a target rdp value the source did not compute", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "source-value",
    });
    const target = createTestObject({
      employeeId: 50030,
      rdpField1: "old-value",
      rdpField2: 999,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1"]) },
      { value: target, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.rdpField1).toBe("source-value");
    // rdpField2 was not in the source query, so the target's value survives.
    expect(underlying.rdpField2).toBe(999);
  });

  it("uses the source rdp value when both sides have a non-null value", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "source-value",
    });
    const target = createTestObject({
      employeeId: 50030,
      rdpField1: "target-value",
      rdpField2: 999,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1"]) },
      { value: target, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.rdpField1).toBe("source-value");
    expect(underlying.rdpField2).toBe(999);
  });

  it("propagates an explicit null rdp value from the source", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: null as unknown as string,
    });
    const target = createTestObject({
      employeeId: 50030,
      rdpField1: "target-value",
      rdpField2: 999,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1"]) },
      { value: target, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.rdpField1).toBeNull();
    expect(underlying.rdpField2).toBe(999);
  });

  it("handles an undefined target", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "source-rdp1",
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1"]) },
      { value: undefined, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.rdpField1).toBe("source-rdp1");
    expect(underlying.rdpField2).toBeUndefined();
  });

  it("handles the full mixed case in one merge", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "source-shared",
      rdpField3: "source-only",
    });
    const target = createTestObject({
      employeeId: 50030,
      rdpField1: "target-shared-stale",
      rdpField2: 999,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["rdpField1", "rdpField3"]) },
      { value: target, rdpFields: new Set(["rdpField1", "rdpField2"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.fullName).toBe("John Doe");
    // Shared rdp: the source query is authoritative.
    expect(underlying.rdpField1).toBe("source-shared");
    // Source-only rdp the target did not ask for: dropped.
    expect(underlying.rdpField3).toBeUndefined();
    // Target-only rdp the source did not compute: preserved.
    expect(underlying.rdpField2).toBe(999);
  });

  it("keeps a shared rdp whose name is not a base property (production shape)", () => {
    // computedScore is deliberately not a schema property, mirroring production
    // where rdp names never appear in objectDef.properties.
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      computedScore: 42,
    });
    const target = createTestObject({
      employeeId: 50030,
      computedScore: 7,
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set(["computedScore", "extraDerived"]) },
      { value: target, rdpFields: new Set(["computedScore"]) },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.fullName).toBe("John Doe");
    // The source computed computedScore, so it must survive the merge even
    // though the name is not in objectDef.properties.
    expect(underlying.computedScore).toBe(42);
  });

  it("clears a base prop the target cached but a full load omitted", () => {
    // No loadedBaseFields means a full load owns every base prop, so an omitted
    // one clears rather than resurrecting the cached value.
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
    });
    const target = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      office: "NYC",
    });

    const result = reconcileObject(
      { value: source, rdpFields: new Set() },
      { value: target, rdpFields: new Set() },
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.office).toBeUndefined();
  });

  describe("with a partial load", () => {
    it("overlays the loaded base props and keeps the rest", () => {
      const source = createTestObject({
        employeeId: 50030,
        fullName: "Updated Name",
        office: "SF",
      });
      const existing = createTestObject({
        employeeId: 50030,
        fullName: "Old Name",
        office: "NYC",
      });

      const result = reconcileObject(
        {
          value: source,
          rdpFields: new Set(),
          loadedBaseFields: new Set(["fullName"]),
        },
        { value: existing, rdpFields: new Set() },
      );

      assertValidObjectHolder(result);
      const underlying = getUnderlyingProps(result);
      expect(underlying.fullName).toBe("Updated Name");
      // office was not loaded, so the existing value is kept.
      expect(underlying.office).toBe("NYC");
      expect(underlying.employeeId).toBe(50030);
    });

    it("carries derived fields through the merge instead of dropping them", () => {
      // A partial write with a derived property used to drop the derived field,
      // since the base merge only kept schema props (rdp names are not there).
      const source = createTestObject({
        employeeId: 50030,
        fullName: "Updated Name",
        computedScore: 42,
      });
      const existing = createTestObject({
        employeeId: 50030,
        fullName: "Old Name",
        office: "NYC",
        computedScore: 7,
      });

      const result = reconcileObject(
        {
          value: source,
          rdpFields: new Set(["computedScore"]),
          loadedBaseFields: new Set(["fullName"]),
        },
        { value: existing, rdpFields: new Set(["computedScore"]) },
      );

      assertValidObjectHolder(result);
      const underlying = getUnderlyingProps(result);
      expect(underlying.fullName).toBe("Updated Name");
      expect(underlying.office).toBe("NYC");
      // The source recomputed the derived field; it must survive.
      expect(underlying.computedScore).toBe(42);
    });

    it("clears a loaded base prop the source omitted", () => {
      // fullName was loaded but omitted (cleared); an unloaded prop is kept.
      const source = createTestObject({
        employeeId: 50030,
      });
      const existing = createTestObject({
        employeeId: 50030,
        fullName: "Old Name",
        office: "NYC",
      });

      const result = reconcileObject(
        {
          value: source,
          rdpFields: new Set(),
          loadedBaseFields: new Set(["fullName"]),
        },
        { value: existing, rdpFields: new Set() },
      );

      assertValidObjectHolder(result);
      const underlying = getUnderlyingProps(result);
      expect(underlying.fullName).toBeUndefined();
      expect(underlying.office).toBe("NYC");
    });
  });
});
