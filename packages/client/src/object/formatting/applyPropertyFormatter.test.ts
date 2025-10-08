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

  function createMockObjectDef(
    overrides: Partial<FetchedObjectTypeDefinition>,
  ): FetchedObjectTypeDefinition {
    return {
      apiName: "TestObject",
      type: "object",
      primaryKeyApiName: "id",
      titleProperty: "name",
      rid: "ri.test.object",
      displayName: "Test Object",
      description: "A test object",
      properties: {},
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
      ...overrides,
    };
  }

  it("returns formatted values for properties with formatting rules", () => {
    const objectDef = createMockObjectDef({
      properties: {
        id: {
          type: "string",
          nullable: false,
          multiplicity: false,
        },
        name: {
          type: "string",
          nullable: true,
          multiplicity: false,
        },
        revenue: {
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
                propertyApiName: "currency",
              },
            },
          },
        },
        successRate: {
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
        isActive: {
          type: "boolean",
          nullable: true,
          multiplicity: false,
          valueFormatting: {
            type: "boolean",
            valueIfTrue: "Active",
            valueIfFalse: "Inactive",
          },
        },
        currency: {
          type: "string",
          nullable: true,
          multiplicity: false,
        },
        createdDate: {
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
      },
    });

    const objectData: SimpleOsdkProperties = {
      $apiName: "TestObject",
      $primaryKey: "123",
      $title: "Test Item",
      $objectType: "TestObject",
      id: "123",
      name: "Test Item",
      revenue: 12345.67,
      successRate: 0.875,
      isActive: true,
      currency: "USD",
      createdDate: "2024-03-15T00:00:00Z",
    };

    const obj = createOsdkObject(mockClient, objectDef, objectData);
    const options = { locale: "en-US" };

    // Check that formatted values are present for properties with formatting rules
    const formattedRevenue = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("revenue", options);
    expect(formattedRevenue).toBeDefined();
    expect(formattedRevenue).toContain("12,345.67");

    const formattedSuccessRate = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("successRate", options);
    expect(formattedSuccessRate).toBe("87.5%");

    const formattedIsActive = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("isActive", options);
    expect(formattedIsActive).toBe("Active");

    const formattedCreatedDate = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("createdDate", options);
    expect(formattedCreatedDate).toContain("Mar");
    expect(formattedCreatedDate).toContain("15");
    expect(formattedCreatedDate).toContain("2024");

    // Check that properties without formatting rules return undefined
    expect(obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("name", options)).toBeUndefined();
    expect(obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("id", options)).toBeUndefined();
    expect(obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("currency", options)).toBeUndefined();
  });

  it("handles missing property references gracefully", () => {
    const objectDef = createMockObjectDef({
      properties: {
        id: {
          type: "string",
          nullable: false,
          multiplicity: false,
        },
        amount: {
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
                propertyApiName: "missingCurrency",
              },
            },
          },
        },
      },
    });

    const objectData: SimpleOsdkProperties = {
      $apiName: "TestObject",
      $primaryKey: "123",
      $title: "Test",
      id: "123",
      amount: 1000,
      $objectType: "TestObject",
    };

    const obj = createOsdkObject(mockClient, objectDef, objectData);

    // Should still format the number even without currency
    const formattedAmount = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("amount");
    expect(formattedAmount).toBeDefined();
    expect(formattedAmount).toContain("1,000");
  });

  it("skips null and undefined values", () => {
    const objectDef = createMockObjectDef({
      properties: {
        id: {
          type: "string",
          nullable: false,
          multiplicity: false,
        },
        nullValue: {
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
        undefinedValue: {
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
    });

    const objectData: SimpleOsdkProperties = {
      $apiName: "TestObject",
      $primaryKey: "123",
      $title: "Test",
      id: "123",
      nullValue: undefined,
      $objectType: "TestObject",
      // undefinedValue is not present
    };

    const obj = createOsdkObject(mockClient, objectDef, objectData);

    expect(obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("nullValue")).toBeUndefined();
    expect(obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("undefinedValue")).toBeUndefined();
  });

  it("allows custom locale and timezone options", () => {
    const objectDef = createMockObjectDef({
      properties: {
        id: {
          type: "string",
          nullable: false,
          multiplicity: false,
        },
        amount: {
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
        timestamp: {
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
      },
    });

    const objectData: SimpleOsdkProperties = {
      $apiName: "TestObject",
      $primaryKey: "123",
      $title: "Test",
      id: "123",
      amount: 1234.56,
      timestamp: "2024-03-15T14:30:00Z",
      $objectType: "TestObject",
    };

    const obj = createOsdkObject(mockClient, objectDef, objectData);

    // Test with German locale
    const formattedAmountDE = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("amount", {
      locale: "de-DE",
    });
    expect(formattedAmountDE).toBe("1.234,56");

    // Test with custom timezone
    const formattedTimestamp = obj.$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue("timestamp", {
      locale: "en-US",
      timezoneId: "America/New_York",
    });
    expect(formattedTimestamp).toBeDefined();
  });
});
