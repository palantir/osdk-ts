/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type {
  FetchPageArgs,
  FetchPageResult,
  ObjectTypeDefinition,
  Osdk,
  PageResult,
  PropertyKeys,
  SelectArgToKeys,
} from "@osdk/api";
import { Employee, FooInterface, Todo } from "@osdk/client.test.ontology";
import type { SearchJsonQueryV2 } from "@osdk/foundry.ontologies";
import { describe, expect, expectTypeOf, it, vi } from "vitest";
import type { MockedFunction } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import {
  buildSelectV2,
  fetchPage,
  objectSetToSearchJsonV2,
  remapPropertyNames,
  resolveInterfaceObjectSet,
} from "../object/fetchPage.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../objectSet/createObjectSet.js";

/**
 * Builds a minimal client whose `fetch` is a vitest mock, so tests can inspect
 * the request bodies the client sends. The mock resolves every request with an
 * empty (`{ data: [] }`), 200 OK response, so callers only care about what was
 * sent, not what comes back.
 *
 * @returns the `client` to drive under test and the `fetchFn` mock to assert against
 *   (typically via {@link lastObjectSetRequest}).
 */
function makeCapturingClient() {
  const fetchFn = vi.fn() as MockedFunction<typeof globalThis.fetch>;
  fetchFn.mockResolvedValue({
    json: () => Promise.resolve({ data: [] }),
    status: 200,
    ok: true,
  } as any);
  const client = createMinimalClient(
    metadata,
    "https://foo",
    async () => "",
    {},
    fetchFn,
  );
  return { client, fetchFn };
}

/**
 * Finds the most recent request the mock `fetchFn` received whose JSON body
 * mentions an `objectSet` (i.e. the object-set load call fetchPage issues),
 * and returns it parsed. Walks the recorded calls newest-first so the latest
 * matching request wins.
 *
 * @param fetchFn the mock returned by {@link makeCapturingClient}
 * @returns the parsed request body, or `undefined` if no object-set request was sent
 */
function lastObjectSetRequest(
  fetchFn: MockedFunction<typeof globalThis.fetch>,
) {
  const requestBody = fetchFn.mock.calls.reduceRight<string | undefined>(
    (acc, cur) => {
      if (acc) return acc;
      const body = cur?.[1]?.body;
      if (typeof body === "string" && body.includes("objectSet")) {
        return body;
      }
    },
    undefined,
  );
  if (!requestBody) return undefined;
  return JSON.parse(requestBody);
}

const metadata = {
  ontologyRid: "asdf",
};
type TodoDef = Todo;

describe(fetchPage, () => {
  it("infers select properly", () => {
    // this helper lets us get return types of functions that are generic
    class Helper<
      T extends ObjectTypeDefinition,
      const A extends FetchPageArgs<T>,
    > {
      public fetchPage<
        L extends SelectArgToKeys<T, A>,
        R extends A["$includeRid"] extends true ? true : false,
      >() {
        return fetchPage<
          T,
          L & PropertyKeys<T>,
          R,
          "drop",
          false
        >({} as any, {} as any, {} as any);
      }
    }

    expectTypeOf<Awaited<ReturnType<Helper<TodoDef, {}>["fetchPage"]>>>()
      .branded
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPage({ select: [] });
    expectTypeOf<
      Awaited<ReturnType<Helper<TodoDef, { $select: [] }>["fetchPage"]>>
    >()
      .branded
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPage()
    expectTypeOf<
      Awaited<
        ReturnType<
          Helper<TodoDef, FetchPageArgs<TodoDef>>["fetchPage"]
        >
      >
    >()
      .branded
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "$all">>>();

    // e.g. fetchPage({ $select: ["text"]}
    expectTypeOf<
      Awaited<
        ReturnType<Helper<TodoDef, { $select: ["text"] }>["fetchPage"]>
      >
    >()
      .branded
      .toEqualTypeOf<PageResult<Osdk<TodoDef, "text">>>();
  });

  it("converts interface objectsets to search properly", () => {
    expect(objectSetToSearchJsonV2(
      {
        type: "filter",
        objectSet: {
          type: "filter",
          objectSet: {
            type: "base",
            objectType: "Todo",
          },
          where: {
            type: "eq",
            field: "text",
            value: "hello",
          },
        },

        where: {
          type: "gt",
          field: "id",
          value: 2,
        },
      },
      "Todo",
      undefined,
    )).toEqual(
      {
        type: "and",
        value: [
          {
            type: "gt",
            field: "id",
            value: 2,
          },
          {
            type: "eq",
            field: "text",
            value: "hello",
          },
        ],
      } satisfies SearchJsonQueryV2,
    );
  });

  it("converts interface objectsets to search properly part 2", () => {
    const client = createMinimalClient(
      metadata,
      "https://foo",
      async () => "",
    );
    const objectSet = createObjectSet(Todo, client).where({
      text: "hello",
    }).where({
      id: { $gt: 2 },
    });

    const wireObjectSet = getWireObjectSet(objectSet);

    expect(objectSetToSearchJsonV2(wireObjectSet, "Todo", undefined)).toEqual(
      {
        type: "and",
        value: [
          {
            type: "gt",
            field: "id",
            value: 2,
          },
          {
            type: "eq",
            field: "text",
            value: "hello",
          },
        ],
      } satisfies SearchJsonQueryV2,
    );
  });

  it("converts interface object set for new API correctly", () => {
    const client = createMinimalClient(
      metadata,
      "https://foo",
      async () => "",
    );
    const objectSet = createObjectSet(FooInterface, client).where({
      fooSpt: "hello",
    });

    const wireObjectSet = getWireObjectSet(objectSet);

    expect(
      resolveInterfaceObjectSet(wireObjectSet, "FooInterface", {
        $includeAllBaseObjectProperties: true,
      }),
    ).toEqual(
      {
        type: "intersect",
        objectSets: [
          {
            type: "filter",
            where: {
              type: "eq",
              field: "fooSpt",
              value: "hello",
            },
            objectSet: { interfaceType: "FooInterface", type: "interfaceBase" },
          },
          {
            type: "interfaceBase",
            interfaceType: "FooInterface",
            includeAllBaseObjectProperties: true,
          },
        ],
      },
    );

    expect(
      resolveInterfaceObjectSet(wireObjectSet, "FooInterface", {}),
    ).toEqual(
      {
        type: "filter",
        where: {
          type: "eq",
          field: "fooSpt",
          value: "hello",
        },
        objectSet: { interfaceType: "FooInterface", type: "interfaceBase" },
      },
    );
    expect(
      resolveInterfaceObjectSet(wireObjectSet, "FooInterface", {
        $includeAllBaseObjectProperties: false,
      }),
    ).toEqual(
      {
        type: "filter",
        where: {
          type: "eq",
          field: "fooSpt",
          value: "hello",
        },
        objectSet: { interfaceType: "FooInterface", type: "interfaceBase" },
      },
    );
  });

  it("where clause keys correctly typed", () => {
    const client = createMinimalClient(
      metadata,
      "https://foo",
      async () => "",
    );
    const objectSet = createObjectSet(Todo, client);
    const objectSetWithSpecialPropertyTypes = createObjectSet(Employee, client);

    expectTypeOf(objectSet.where).toBeCallableWith({
      $and: [{ id: { $gt: 2 } }, { id: { $lte: 2 } }],
    });
    expectTypeOf(objectSet.where).toBeCallableWith({
      // @ts-expect-error
      id: { $gt: 2, $lte: 2 },
    });

    // We used to default to number filters for other types, like geotimeseries reference and timeseries. These tests will make sure
    // we don't do that anymore
    expectTypeOf(objectSetWithSpecialPropertyTypes.where).toBeCallableWith({
      $and: [
        { employeeLocation: { $eq: "myLocation" } },
        {
          employeeLocation: { $ne: "notMyLocation" },
        },
        { employeeLocation: { $isNull: false } },
        // @ts-expect-error
        { employeeLocation: { $isNull: false, $eq: "myLocation" } },
        // @ts-expect-error
        { employeeLocation: { $gt: 5 } },
      ],
    });

    expectTypeOf(objectSetWithSpecialPropertyTypes.where).toBeCallableWith({
      $and: [
        { employeeStatus: { $eq: "myStatus" } },
        {
          employeeLocation: { $ne: "notMyStatus" },
        },
        { employeeLocation: { $isNull: false } },
        // @ts-expect-error
        { employeeLocation: { $lte: 5 } },
      ],
    });
  });

  it("supports string comparison filters (gt, gte, lt, lte) on string properties", () => {
    const client = createMinimalClient(
      metadata,
      "https://foo",
      async () => "",
    );
    const objectSet = createObjectSet(Todo, client);

    // String properties should support all comparison operators
    expectTypeOf(objectSet.where).toBeCallableWith({
      text: { $gt: "a" },
    });
    expectTypeOf(objectSet.where).toBeCallableWith({
      text: { $gte: "a" },
    });
    expectTypeOf(objectSet.where).toBeCallableWith({
      text: { $lt: "z" },
    });
    expectTypeOf(objectSet.where).toBeCallableWith({
      text: { $lte: "z" },
    });

    // Can combine with other string filters
    expectTypeOf(objectSet.where).toBeCallableWith({
      $and: [{ text: { $gt: "a" } }, { text: { $lt: "z" } }],
    });

    // Cannot combine multiple filters in the same object
    expectTypeOf(objectSet.where).toBeCallableWith({
      // @ts-expect-error
      text: { $gt: "a", $lt: "z" },
    });
  });

  it("does not expose string comparison filters on non-string properties", () => {
    const client = createMinimalClient(
      metadata,
      "https://foo",
      async () => "",
    );
    const objectSetWithSpecialPropertyTypes = createObjectSet(Employee, client);

    // geotimeSeriesReference should NOT support string comparison operators
    expectTypeOf(objectSetWithSpecialPropertyTypes.where).toBeCallableWith({
      $and: [
        // @ts-expect-error - $gt should not be available
        { employeeLocation: { $gt: "test" } },
        // @ts-expect-error - $gte should not be available
        { employeeLocation: { $gte: "test" } },
        // @ts-expect-error - $lt should not be available
        { employeeLocation: { $lt: "test" } },
        // @ts-expect-error - $lte should not be available
        { employeeLocation: { $lte: "test" } },
      ],
    });

    // stringTimeseries should NOT support string comparison operators
    expectTypeOf(objectSetWithSpecialPropertyTypes.where).toBeCallableWith({
      $and: [
        // @ts-expect-error - $gt should not be available
        { employeeStatus: { $gt: "test" } },
        // @ts-expect-error - $gte should not be available
        { employeeStatus: { $gte: "test" } },
        // @ts-expect-error - $lt should not be available
        { employeeStatus: { $lt: "test" } },
        // @ts-expect-error - $lte should not be available
        { employeeStatus: { $lte: "test" } },
      ],
    });
  });

  describe("includeRid", () => {
    it("properly returns the correct string for includeRid", () => {
      expectTypeOf<
        Awaited<FetchPageResult<TodoDef, "text", false, "throw", false>>
      >()
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "text">[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();

      expectTypeOf<
        Awaited<FetchPageResult<TodoDef, "text", true, false, false>>
      >()
        .branded
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "text" | "$rid" | "$notStrict">[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();
    });

    it("works with $all", () => {
      expectTypeOf<
        Awaited<FetchPageResult<TodoDef, "text" | "id", false, "drop", false>>
      >().branded
        .toEqualTypeOf<{
          data: Osdk<TodoDef>[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();

      expectTypeOf<
        Awaited<FetchPageResult<TodoDef, "text" | "id", true, "drop", false>>
      >()
        .branded
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "$all" | "$rid">[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();

      expectTypeOf<
        Awaited<FetchPageResult<TodoDef, "text" | "id", true, "drop", false>>
      >()
        .branded
        .toEqualTypeOf<{
          data: Osdk<TodoDef, "$all" | "$rid">[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();

      expectTypeOf<
        Awaited<
          FetchPageResult<
            FooInterface,
            "fooSpt" | "fooIdp",
            true,
            "drop",
            false
          >
        >
      >()
        .branded
        .toEqualTypeOf<{
          data: Osdk<FooInterface, "$all" | "$rid">[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();

      expectTypeOf<
        Awaited<
          FetchPageResult<
            FooInterface,
            "fooSpt" | "fooIdp",
            true,
            "drop",
            false
          >
        >
      >()
        .branded
        .toEqualTypeOf<{
          data: Osdk<FooInterface, "$all" | "$rid">[];
          nextPageToken: string | undefined;
          totalCount: string;
        }>();
    });
  });

  describe("remapPropertyNames", () => {
    it("returns original names for objects", () => {
      const objectType = {
        type: "object" as const,
        apiName: "SimpleObject",
      };

      const result = remapPropertyNames(
        objectType,
        ["firstName", "lastName"],
      );

      expect(result).toEqual(["firstName", "lastName"]);
    });

    it("returns original names when objectOrInterface is undefined", () => {
      const result = remapPropertyNames(
        undefined,
        ["firstName", "lastName"],
      );

      expect(result).toEqual(["firstName", "lastName"]);
    });

    it("remaps simple names to fully qualified names for interfaces", () => {
      const interfaceType = {
        type: "interface" as const,
        apiName: "com.example.namespace.MyInterface",
      };

      const result = remapPropertyNames(
        interfaceType,
        ["firstName", "lastName", "age"],
      );

      expect(result).toEqual([
        "com.example.namespace.firstName",
        "com.example.namespace.lastName",
        "com.example.namespace.age",
      ]);
    });

    it("preserves already fully qualified names for interfaces", () => {
      const interfaceType = {
        type: "interface" as const,
        apiName: "com.example.namespace.MyInterface",
      };

      const result = remapPropertyNames(
        interfaceType,
        ["com.example.namespace.firstName", "lastName"],
      );

      expect(result).toEqual([
        "com.example.namespace.firstName",
        "com.example.namespace.lastName",
      ]);
    });

    it("returns original names for interfaces without namespace", () => {
      const interfaceType = {
        type: "interface" as const,
        apiName: "MyInterface",
      };

      const result = remapPropertyNames(
        interfaceType,
        ["firstName", "lastName"],
      );

      expect(result).toEqual(["firstName", "lastName"]);
    });
  });

  describe("buildSelectV2", () => {
    it("returns empty array when both select and modifiers are undefined", () => {
      const result = buildSelectV2(undefined, undefined, undefined);
      expect(result).toEqual([]);
    });

    it("returns empty array when select is empty and modifiers is empty", () => {
      const result = buildSelectV2([], {}, undefined);
      expect(result).toEqual([]);
    });

    it("builds simple property entries for select without modifiers", () => {
      const result = buildSelectV2(
        ["firstName", "lastName"],
        undefined,
        undefined,
      );
      expect(result).toEqual([
        { type: "property", apiName: "firstName" },
        { type: "property", apiName: "lastName" },
      ]);
    });

    it("builds selectV2 entry for applyMainValue modifier", () => {
      const result = buildSelectV2(["myStruct"], {
        myStruct: "applyMainValue",
      }, undefined);

      expect(result).toEqual([{
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "myStruct" },
        loadLevel: { type: "extractMainValue" },
      }]);
    });

    it("builds selectV2 entry for applyReducers modifier", () => {
      const result = buildSelectV2(["scores"], {
        scores: "applyReducers",
      }, undefined);

      expect(result).toEqual([{
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "scores" },
        loadLevel: { type: "applyReducers" },
      }]);
    });

    it("builds selectV2 entry for applyReducersAndExtractMainValue modifier", () => {
      const result = buildSelectV2(["items"], {
        items: "applyReducersAndExtractMainValue",
      }, undefined);

      expect(result).toEqual([{
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "items" },
        loadLevel: { type: "applyReducersAndExtractMainValue" },
      }]);
    });

    it("combines select and modifiers correctly", () => {
      const result = buildSelectV2(["firstName", "myStruct", "scores"], {
        myStruct: "applyMainValue",
        scores: "applyReducers",
      }, undefined);

      expect(result).toHaveLength(3);
      expect(result).toContainEqual({ type: "property", apiName: "firstName" });
      expect(result).toContainEqual({
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "myStruct" },
        loadLevel: { type: "extractMainValue" },
      });
      expect(result).toContainEqual({
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "scores" },
        loadLevel: { type: "applyReducers" },
      });
    });

    it("uses allProperties when select is not provided but modifiers are", () => {
      const result = buildSelectV2(undefined, {
        myStruct: "applyMainValue",
      }, ["id", "firstName", "lastName", "myStruct"]);

      expect(result).toHaveLength(4);
      expect(result).toContainEqual({ type: "property", apiName: "id" });
      expect(result).toContainEqual({ type: "property", apiName: "firstName" });
      expect(result).toContainEqual({ type: "property", apiName: "lastName" });
      expect(result).toContainEqual({
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "myStruct" },
        loadLevel: { type: "extractMainValue" },
      });
    });
  });

  describe("snapshot", () => {
    it("exposes $snapshot to client (type)", () => {
      expectTypeOf<FetchPageArgs<Employee>>().toHaveProperty("$snapshot");
    });
    it("sets snapshot = false by default", async () => {
      const { client, fetchFn } = makeCapturingClient();
      await fetchPage(client, Employee, {});
      expect(lastObjectSetRequest(fetchFn).snapshot).toBe(false);
    });
    it("properly generates fetch request when $snapshot is true", async () => {
      const { client, fetchFn } = makeCapturingClient();
      await fetchPage(client, Employee, { $snapshot: true });
      expect(lastObjectSetRequest(fetchFn).snapshot).toBe(true);
    });
    it("strips $snapshot from the wire request body", async () => {
      const { client, fetchFn } = makeCapturingClient();
      await fetchPage(client, Employee, { $snapshot: true });
      expect(lastObjectSetRequest(fetchFn)).not.toHaveProperty("$snapshot");
    });
  });
});
