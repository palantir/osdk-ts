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

import type { QueryDefinition } from "@osdk/api";
import { getWireObjectSet } from "@osdk/client";
import { describe, expect, it, vi } from "vitest";
import { getStableQueriesKey } from "../getStableQueriesKey.js";
import type { UseOsdkFunctionOptions } from "../useOsdkFunction.js";

vi.mock("@osdk/client", () => ({
  isObjectSet: (v: unknown): boolean =>
    typeof v === "object" && v != null && "__isObjectSet" in v,
  getWireObjectSet: vi.fn().mockImplementation((v) => ({
    WIRED: v.__wire,
  })),
}));

const QUERY_A: QueryDefinition<unknown> = {
  type: "query",
  apiName: "queryA",
  version: "1.0.0",
};

const QUERY_B: QueryDefinition<unknown> = {
  type: "query",
  apiName: "queryB",
  version: "1.0.0",
};

function fakeObjectSet(wire: unknown): object {
  return { __isObjectSet: true, __wire: wire };
}

describe("getStableQueriesKey", () => {
  it("returns the same key for queries with structurally equal options", () => {
    const a = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: { params: { x: 1 } } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    const b = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: { params: { x: 1 } } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    expect(a).toBe(b);
  });

  it("changes when the api name changes", () => {
    const a = getStableQueriesKey([{ queryDefinition: QUERY_A }]);
    const b = getStableQueriesKey([{ queryDefinition: QUERY_B }]);
    expect(a).not.toBe(b);
  });

  it("changes when a primitive param changes", () => {
    const a = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: { params: { x: 1 } } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    const b = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: { params: { x: 2 } } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    expect(a).not.toBe(b);
  });

  it("substitutes ObjectSet in params with its wire representation", () => {
    const wire = { type: "base", objectType: "Employee" };
    const objectSet = fakeObjectSet(wire);
    const key = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: { employees: objectSet },
        } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    expect(getWireObjectSet).toHaveBeenCalled();
    expect(key).toContain("WIRED");
  });

  it("returns the same key when ObjectSets share an identical wire representation", () => {
    const wire = {
      type: "filter",
      objectSet: { type: "base", objectType: "Employee" },
      where: { type: "eq", field: "department", value: "eng" },
    };
    const a = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: { os: fakeObjectSet(wire) },
        } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    const b = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: { os: fakeObjectSet(wire) },
        } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    expect(a).toBe(b);
  });

  it("returns a different key when the ObjectSet's wire representation differs", () => {
    const baseWire = { type: "base", objectType: "Employee" };
    const filteredWire = {
      type: "filter",
      objectSet: baseWire,
      where: { type: "eq", field: "department", value: "eng" },
    };
    const a = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: { os: fakeObjectSet(baseWire) },
        } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    const b = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: { os: fakeObjectSet(filteredWire) },
        } as unknown as UseOsdkFunctionOptions<
          typeof QUERY_A
        >,
      },
    ]);
    expect(a).not.toBe(b);
  });

  it("detects ObjectSets nested inside arrays and objects in params", () => {
    const wireA = { type: "base", objectType: "Employee" };
    const wireB = { type: "base", objectType: "Project" };
    const a = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: {
            nested: { sets: [fakeObjectSet(wireA), fakeObjectSet(wireB)] },
          } as never,
        } as unknown as UseOsdkFunctionOptions<typeof QUERY_A>,
      },
    ]);
    const b = getStableQueriesKey([
      {
        queryDefinition: QUERY_A,
        options: {
          params: {
            nested: { sets: [fakeObjectSet(wireA), fakeObjectSet(wireB)] },
          } as never,
        } as unknown as UseOsdkFunctionOptions<typeof QUERY_A>,
      },
    ]);
    expect(a).toBe(b);
    expect(a).toContain("\"objectType\":\"Employee\"");
    expect(a).toContain("\"objectType\":\"Project\"");
  });

  it("changes when query order changes", () => {
    const a = getStableQueriesKey([
      { queryDefinition: QUERY_A },
      { queryDefinition: QUERY_B },
    ]);
    const b = getStableQueriesKey([
      { queryDefinition: QUERY_B },
      { queryDefinition: QUERY_A },
    ]);
    expect(a).not.toBe(b);
  });
});
