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
import {
  extractRdpFieldNames,
  mergeObjectFields,
} from "./rdpFieldOperations.js";

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
  properties: {
    employeeId: { type: "integer" },
    fullName: { type: "string" },
    office: { type: "string" },
    rdpField1: { type: "string" },
    rdpField2: { type: "double" },
    rdpField3: { type: "string" },
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

describe("rdpFieldOperations", () => {
  it("extractRdpFieldNames returns empty set for undefined", () => {
    expect(extractRdpFieldNames(undefined)).toEqual(new Set());
  });

  it("mergeObjectFields returns same object when source has no rdp fields", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
    });

    const result = mergeObjectFields(source, new Set(), new Set(), undefined);

    expect(result).toBe(source);
  });

  it("mergeObjectFields strips rdp fields from source", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "rdp-value-1",
      rdpField2: 42,
    });

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1", "rdpField2"]),
      new Set(),
      undefined,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.rdpField1).toBeUndefined();
    expect(underlying.rdpField2).toBeUndefined();
  });

  it("mergeObjectFields returns source unchanged when rdp field sets are equal", () => {
    const source = createTestObject({
      employeeId: 50030,
      rdpField1: "value",
      rdpField2: 42,
    });
    const rdpFields = new Set(["rdpField1", "rdpField2"]);

    const result = mergeObjectFields(source, rdpFields, rdpFields, undefined);

    expect(result).toBe(source);
  });

  it("mergeObjectFields filters to target rdp fields when source is strict superset", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "value1",
      rdpField2: 42,
      rdpField3: "value3",
    });

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1", "rdpField2", "rdpField3"]),
      new Set(["rdpField1"]),
      undefined,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.rdpField1).toBe("value1");
    expect(underlying.rdpField2).toBeUndefined();
    expect(underlying.rdpField3).toBeUndefined();
  });

  it("mergeObjectFields merges source and target rdp fields", () => {
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

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1"]),
      new Set(["rdpField1", "rdpField2"]),
      target,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    expect(underlying.office).toBe("NYC");
    expect(underlying.rdpField1).toBe("source-rdp1");
    expect(underlying.rdpField2).toBe(999);
  });

  it("mergeObjectFields preserves target RDP value when source has undefined for shared field", () => {
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

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1"]),
      new Set(["rdpField1", "rdpField2"]),
      target,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.fullName).toBe("John Doe");
    // Target's non-null value should be preserved when source has undefined
    expect(underlying.rdpField1).toBe("existing-value");
    expect(underlying.rdpField2).toBe(999);
  });

  it("mergeObjectFields uses source RDP value when both source and target have non-null", () => {
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

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1"]),
      new Set(["rdpField1", "rdpField2"]),
      target,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    // Source's non-null value takes precedence when both are non-null
    expect(underlying.rdpField1).toBe("source-value");
    expect(underlying.rdpField2).toBe(999);
  });

  it("mergeObjectFields propagates null RDP values from source", () => {
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

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1"]),
      new Set(["rdpField1", "rdpField2"]),
      target,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.rdpField1).toBeNull();
    expect(underlying.rdpField2).toBe(999);
  });

  it("mergeObjectFields handles undefined target", () => {
    const source = createTestObject({
      employeeId: 50030,
      fullName: "John Doe",
      rdpField1: "source-rdp1",
    });

    const result = mergeObjectFields(
      source,
      new Set(["rdpField1"]),
      new Set(["rdpField1", "rdpField2"]),
      undefined,
    );

    assertValidObjectHolder(result);
    const underlying = getUnderlyingProps(result);
    expect(underlying.employeeId).toBe(50030);
    expect(underlying.rdpField1).toBe("source-rdp1");
    expect(underlying.rdpField2).toBeUndefined();
  });
});
