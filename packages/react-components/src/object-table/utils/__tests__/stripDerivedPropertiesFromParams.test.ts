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

import { describe, expect, it, vi } from "vitest";
import { stripDerivedPropertiesFromParams } from "../stripDerivedPropertiesFromParams.js";

vi.mock("@osdk/client", () => ({
  isObjectSet: (value: unknown) =>
    value != null && typeof value === "object"
    && (value as Record<string, unknown>).__isObjectSet === true,
  getWireObjectSet: (value: unknown) =>
    (value as Record<string, unknown>).__wire,
}));

describe("stripDerivedPropertiesFromParams", () => {
  it("returns null/undefined unchanged", () => {
    expect(stripDerivedPropertiesFromParams(null)).toBeNull();
    expect(stripDerivedPropertiesFromParams(undefined)).toBeUndefined();
  });

  it("returns primitives unchanged", () => {
    expect(stripDerivedPropertiesFromParams("hello")).toBe("hello");
    expect(stripDerivedPropertiesFromParams(42)).toBe(42);
    expect(stripDerivedPropertiesFromParams(true)).toBe(true);
  });

  it("passes through params without ObjectSets unchanged", () => {
    const params = {
      name: "test",
      count: 5,
      nested: { a: 1, b: "two" },
    };

    expect(stripDerivedPropertiesFromParams(params)).toEqual(params);
  });

  it("strips withProperties from ObjectSet param values", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "withProperties",
        derivedProperties: { foo: {} },
        objectSet: { type: "base", objectType: "Employee" },
      },
    };

    const params = { employees: mockObjectSet, limit: 10 };

    expect(stripDerivedPropertiesFromParams(params)).toEqual({
      employees: { type: "base", objectType: "Employee" },
      limit: 10,
    });
  });

  it("handles ObjectSet values in arrays", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "withProperties",
        derivedProperties: { foo: {} },
        objectSet: { type: "base", objectType: "Employee" },
      },
    };

    const params = { sets: [mockObjectSet] };

    expect(stripDerivedPropertiesFromParams(params)).toEqual({
      sets: [{ type: "base", objectType: "Employee" }],
    });
  });

  it("returns base object set unchanged", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: { type: "base", objectType: "Employee" },
    };

    const params = { employees: mockObjectSet };

    expect(stripDerivedPropertiesFromParams(params)).toEqual({
      employees: { type: "base", objectType: "Employee" },
    });
  });

  it("strips a top-level withProperties node from ObjectSet", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "withProperties",
        derivedProperties: {
          managerName: {
            type: "selection",
            objectSet: {
              type: "searchAround",
              objectSet: { type: "methodInput" },
              link: "lead",
            },
            operation: {
              type: "get",
              selectedPropertyApiName: "fullName",
            },
          },
        },
        objectSet: {
          type: "base",
          objectType: "Employee",
        },
      },
    };

    expect(stripDerivedPropertiesFromParams({ os: mockObjectSet })).toEqual({
      os: { type: "base", objectType: "Employee" },
    });
  });

  it("strips withProperties nested inside a filter", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "filter",
        objectSet: {
          type: "withProperties",
          derivedProperties: {
            managerName: {
              type: "selection",
              objectSet: {
                type: "searchAround",
                objectSet: { type: "methodInput" },
                link: "lead",
              },
              operation: {
                type: "get",
                selectedPropertyApiName: "fullName",
              },
            },
          },
          objectSet: {
            type: "base",
            objectType: "Employee",
          },
        },
        where: {
          type: "eq",
          field: "fullName",
          value: "Jane Doe",
        },
      },
    };

    expect(stripDerivedPropertiesFromParams({ os: mockObjectSet })).toEqual({
      os: {
        type: "filter",
        objectSet: {
          type: "base",
          objectType: "Employee",
        },
        where: {
          type: "eq",
          field: "fullName",
          value: "Jane Doe",
        },
      },
    });
  });

  it("strips withProperties from inside union objectSets", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "union",
        objectSets: [
          {
            type: "withProperties",
            derivedProperties: { foo: { type: "bar" } },
            objectSet: { type: "base", objectType: "Employee" },
          },
          { type: "base", objectType: "Manager" },
        ],
      },
    };

    expect(stripDerivedPropertiesFromParams({ os: mockObjectSet })).toEqual({
      os: {
        type: "union",
        objectSets: [
          { type: "base", objectType: "Employee" },
          { type: "base", objectType: "Manager" },
        ],
      },
    });
  });

  it("strips deeply nested withProperties", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "filter",
        objectSet: {
          type: "withProperties",
          derivedProperties: { x: {} },
          objectSet: {
            type: "filter",
            objectSet: {
              type: "withProperties",
              derivedProperties: { y: {} },
              objectSet: { type: "base", objectType: "Employee" },
            },
            where: { type: "eq", field: "a", value: "1" },
          },
        },
        where: { type: "eq", field: "b", value: "2" },
      },
    };

    expect(stripDerivedPropertiesFromParams({ os: mockObjectSet })).toEqual({
      os: {
        type: "filter",
        objectSet: {
          type: "filter",
          objectSet: { type: "base", objectType: "Employee" },
          where: { type: "eq", field: "a", value: "1" },
        },
        where: { type: "eq", field: "b", value: "2" },
      },
    });
  });

  it("preserves searchAround nodes without withProperties", () => {
    const mockObjectSet = {
      __isObjectSet: true,
      __wire: {
        type: "searchAround",
        objectSet: { type: "base", objectType: "Employee" },
        link: "lead",
      },
    };

    expect(stripDerivedPropertiesFromParams({ os: mockObjectSet })).toEqual({
      os: {
        type: "searchAround",
        objectSet: { type: "base", objectType: "Employee" },
        link: "lead",
      },
    });
  });
});
