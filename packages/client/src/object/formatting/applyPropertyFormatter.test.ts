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
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import { InterfaceDefinitions } from "../../ontology/OntologyProvider.js";
import { createOsdkObject } from "../convertWireToOsdkObjects/createOsdkObject.js";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";

describe("getFormattedValue", () => {
  const mockClient = {} as MinimalClient;

  // Single object definition with properties for testing
  const OBJECT_DEF: FetchedObjectTypeDefinition = {
    apiName: "TestObject",
    type: "object",
    primaryKeyApiName: "id",
    titleProperty: "id",
    rid: "ri.test.object",
    displayName: "Test Object",
    description: "A test object",
    primaryKeyType: "string",
    icon: undefined,
    visibility: "NORMAL",
    pluralDisplayName: "Test Objects",
    status: "ACTIVE",
    interfaceMap: {},
    inverseInterfaceMap: {},
    links: {},
    implements: [],
    [InterfaceDefinitions]: {},
    properties: {
      id: {
        type: "string",
        nullable: false,
        multiplicity: false,
      },
      stringPropertyNoFormatting: {
        type: "string",
        nullable: true,
        multiplicity: false,
      },
      booleanPropertyCustomLabels: {
        type: "boolean",
        nullable: false,
        multiplicity: false,
        valueFormatting: {
          type: "boolean",
          valueIfTrue: "Active",
          valueIfFalse: "Inactive",
        },
      },
      nullableBooleanProperty: {
        type: "boolean",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "boolean",
          valueIfTrue: "Yes",
          valueIfFalse: "No",
        },
      },
    },
  };

  // Default object data with properties populated
  const DEFAULT_OBJECT_DATA: SimpleOsdkProperties = {
    $apiName: "TestObject",
    $primaryKey: "test-123",
    $title: "Test Object",
    $objectType: "TestObject",
    id: "test-123",
    stringPropertyNoFormatting: "Plain text",
    booleanPropertyCustomLabels: true,
    nullableBooleanProperty: undefined,
  };

  // Helper to create an OSDK object with optional data overrides
  function getObject(dataOverrides?: Partial<SimpleOsdkProperties>) {
    const objectData = { ...DEFAULT_OBJECT_DATA, ...dataOverrides };
    return createOsdkObject(mockClient, OBJECT_DEF, objectData);
  }

  it("formats boolean true with custom label", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "booleanPropertyCustomLabels",
    );

    expect(formatted).toBe("Active");
  });

  it("formats boolean false with custom label", () => {
    const obj = getObject({ booleanPropertyCustomLabels: false });
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "booleanPropertyCustomLabels",
    );

    expect(formatted).toBe("Inactive");
  });

  it("returns undefined for property without formatting rules", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "stringPropertyNoFormatting",
    );

    expect(formatted).toBeUndefined();
  });

  it("returns undefined for null values", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "nullableBooleanProperty",
    );

    expect(formatted).toBeUndefined();
  });
});
