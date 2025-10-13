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

  // Single object definition with all properties needed for testing
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
      currencyPropertyUsingCurrencyCodeProperty: {
        type: "double",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "currency",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
            style: "STANDARD",
            currencyCode: {
              type: "propertyType",
              propertyApiName: "currencyCode",
            },
          },
        },
      },
      currencyCode: {
        type: "string",
        nullable: true,
        multiplicity: false,
      },
      percentagePropertyOneDecimal: {
        type: "double",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "ratio",
            ratioType: "PERCENTAGE",
            baseFormatOptions: {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            },
          },
        },
      },
      booleanPropertyCustomLabels: {
        type: "boolean",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "boolean",
          valueIfTrue: "Active",
          valueIfFalse: "Inactive",
        },
      },
      datePropertyLocalizedDate: {
        type: "datetime",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "date",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_DATE",
          },
        },
      },
      timestampPropertyLocalizedTime: {
        type: "timestamp",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "timestamp",
          format: {
            type: "localizedFormat",
            format: "DATE_FORMAT_TIME",
          },
          displayTimezone: {
            type: "user",
          },
        },
      },
      numberPropertyTwoDecimals: {
        type: "double",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "standard",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          },
        },
      },
      currencyPropertyMissingReferencedProperty: {
        type: "double",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "currency",
            baseFormatOptions: {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
            style: "STANDARD",
            currencyCode: {
              type: "propertyType",
              propertyApiName: "nonExistentCurrency",
            },
          },
        },
      },
      nullableNumberProperty: {
        type: "double",
        nullable: true,
        multiplicity: false,
        valueFormatting: {
          type: "number",
          numberType: {
            type: "standard",
            baseFormatOptions: {},
          },
        },
      },
    },
  };

  // Default object data with all properties populated
  const DEFAULT_OBJECT_DATA: SimpleOsdkProperties = {
    $apiName: "TestObject",
    $primaryKey: "test-123",
    $title: "Test Object",
    $objectType: "TestObject",
    id: "test-123",
    stringPropertyNoFormatting: "Plain text",
    currencyPropertyUsingCurrencyCodeProperty: 12345.67,
    currencyCode: "USD",
    percentagePropertyOneDecimal: 0.875,
    booleanPropertyCustomLabels: true,
    datePropertyLocalizedDate: "2024-03-15T00:00:00Z",
    timestampPropertyLocalizedTime: "2024-03-15T14:30:00Z",
    numberPropertyTwoDecimals: 1234.56,
    currencyPropertyMissingReferencedProperty: 1000,
    nullableNumberProperty: 42,
  };

  // Helper to create an OSDK object with optional data overrides
  function getObject(dataOverrides?: Partial<SimpleOsdkProperties>) {
    const objectData = { ...DEFAULT_OBJECT_DATA, ...dataOverrides };
    return createOsdkObject(mockClient, OBJECT_DEF, objectData);
  }

  it("formats currency with property reference for currency code", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "currencyPropertyUsingCurrencyCodeProperty",
      { locale: "en-US" },
    );

    expect(formatted).toBeDefined();
    expect(formatted).toContain("12,345.67");
  });

  it("formats percentage with one decimal place", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "percentagePropertyOneDecimal",
      { locale: "en-US" },
    );

    expect(formatted).toBe("87.5%");
  });

  it("formats boolean with custom labels", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "booleanPropertyCustomLabels",
      { locale: "en-US" },
    );

    expect(formatted).toBe("Active");
  });

  it("formats boolean false with custom label", () => {
    const obj = getObject({ booleanPropertyCustomLabels: false });
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "booleanPropertyCustomLabels",
      { locale: "en-US" },
    );

    expect(formatted).toBe("Inactive");
  });

  it("formats date with localized format", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "datePropertyLocalizedDate",
      { locale: "en-US" },
    );

    expect(formatted).toContain("Mar");
    expect(formatted).toContain("15");
    expect(formatted).toContain("2024");
  });

  it("formats timestamp with localized time format", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "timestampPropertyLocalizedTime",
      { locale: "en-US", timezoneId: "America/New_York" },
    );

    expect(formatted).toBeDefined();
  });

  it("formats number with two decimal places", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "numberPropertyTwoDecimals",
      { locale: "en-US" },
    );

    expect(formatted).toBe("1,234.56");
  });

  it("returns undefined for property without formatting rules", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "stringPropertyNoFormatting",
      { locale: "en-US" },
    );

    expect(formatted).toBeUndefined();
  });

  it("handles missing currency code reference gracefully", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "currencyPropertyMissingReferencedProperty",
      { locale: "en-US" },
    );

    expect(formatted).toBeDefined();
    expect(formatted).toContain("1,000");
  });

  it("returns undefined for null values", () => {
    const obj = getObject({ nullableNumberProperty: undefined });
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "nullableNumberProperty",
    );

    expect(formatted).toBeUndefined();
  });

  it("returns undefined for undefined values", () => {
    const obj = getObject();
    // Remove the property from the object data
    delete (obj as Record<string, unknown>).undefinedProperty;
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "undefinedProperty" as "nullableNumberProperty",
    );

    expect(formatted).toBeUndefined();
  });

  it("respects custom locale for number formatting", () => {
    const obj = getObject();
    const formatted = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(
      "numberPropertyTwoDecimals",
      { locale: "de-DE" },
    );

    expect(formatted).toBe("1.234,56");
  });
});
