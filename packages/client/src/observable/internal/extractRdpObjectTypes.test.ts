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
import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import { extractRdpObjectTypes } from "./extractRdpObjectTypes.js";

describe("extractRdpObjectTypes", () => {
  it("returns empty set for undefined metadata", () => {
    const result = extractRdpObjectTypes(undefined);
    expect(result.size).toBe(0);
  });

  it("returns empty set for empty metadata", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {};
    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(0);
  });

  it("extracts object types from selection with base object set", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {
      officeName: {
        definition: {
          type: "selection",
          objectSet: {
            type: "base",
            objectTypeApiName: "Office",
          },
          operation: {
            type: "select",
            properties: ["name"],
          },
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
    };

    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(1);
    expect(result.has("Office")).toBe(true);
  });

  it("extracts object types from filtered object set", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {
      activeEmployees: {
        definition: {
          type: "selection",
          objectSet: {
            type: "filtered",
            objectSet: {
              type: "base",
              objectTypeApiName: "Employee",
            },
            filter: {} as any,
          },
          operation: {
            type: "select",
            properties: ["name"],
          },
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
    };

    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(1);
    expect(result.has("Employee")).toBe(true);
  });

  it("extracts multiple object types from union", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {
      allPeople: {
        definition: {
          type: "selection",
          objectSet: {
            type: "union",
            objectSets: [
              {
                type: "base",
                objectTypeApiName: "Employee",
              },
              {
                type: "base",
                objectTypeApiName: "Contractor",
              },
            ],
          },
          operation: {
            type: "select",
            properties: ["name"],
          },
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
    };

    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(2);
    expect(result.has("Employee")).toBe(true);
    expect(result.has("Contractor")).toBe(true);
  });

  it("extracts object types from searchAround", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {
      relatedOffices: {
        definition: {
          type: "selection",
          objectSet: {
            type: "searchAround",
            objectSet: {
              type: "base",
              objectTypeApiName: "Employee",
            },
            link: {
              targetObjectTypeApiName: "Office",
            },
          },
          operation: {
            type: "select",
            properties: ["name"],
          },
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
    };

    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(2);
    expect(result.has("Employee")).toBe(true);
    expect(result.has("Office")).toBe(true);
  });

  it("ignores non-selection property operations", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {
      doubleValue: {
        definition: {
          type: "multiply",
          left: { type: "property", apiName: "value" } as any,
          right: { type: "property", apiName: "multiplier" } as any,
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
      absoluteValue: {
        definition: {
          type: "absoluteValue",
          property: { type: "property", apiName: "value" } as any,
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
    };

    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(0);
  });

  it("handles complex nested object sets", () => {
    const metadata: DerivedPropertyRuntimeMetadata = {
      complexProperty: {
        definition: {
          type: "selection",
          objectSet: {
            type: "intersect",
            objectSets: [
              {
                type: "union",
                objectSets: [
                  {
                    type: "base",
                    objectTypeApiName: "Employee",
                  },
                  {
                    type: "base",
                    objectTypeApiName: "Contractor",
                  },
                ],
              },
              {
                type: "filtered",
                objectSet: {
                  type: "base",
                  objectTypeApiName: "Person",
                },
                filter: {} as any,
              },
            ],
          },
          operation: {
            type: "select",
            properties: ["name"],
          },
        } as any,
        selectedOrCollectedPropertyType: undefined,
      },
    };

    const result = extractRdpObjectTypes(metadata);
    expect(result.size).toBe(3);
    expect(result.has("Employee")).toBe(true);
    expect(result.has("Contractor")).toBe(true);
    expect(result.has("Person")).toBe(true);
  });
});
