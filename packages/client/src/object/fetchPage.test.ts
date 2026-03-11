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
import { describe, expect, expectTypeOf, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import {
  buildSelectV2FromModifiers,
  fetchPage,
  objectSetToSearchJsonV2,
  remapPropertyNames,
  resolveInterfaceObjectSet,
} from "../object/fetchPage.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../objectSet/createObjectSet.js";

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

  describe("buildSelectV2FromModifiers", () => {
    it("returns empty array when modifiers is undefined", () => {
      const result = buildSelectV2FromModifiers(undefined);
      expect(result).toEqual([]);
    });

    it("returns empty array when modifiers is empty object", () => {
      const result = buildSelectV2FromModifiers({});
      expect(result).toEqual([]);
    });

    it("builds selectV2 entry for applyMainValue modifier", () => {
      const result = buildSelectV2FromModifiers({
        myStruct: "applyMainValue",
      });

      expect(result).toEqual([{
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "myStruct" },
        loadLevel: { type: "extractMainValue" },
      }]);
    });

    it("builds selectV2 entry for applyReducers modifier", () => {
      const result = buildSelectV2FromModifiers({
        scores: "applyReducers",
      });

      expect(result).toEqual([{
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "scores" },
        loadLevel: { type: "applyReducers" },
      }]);
    });

    it("builds selectV2 entry for applyReducersAndExtractMainValue modifier", () => {
      const result = buildSelectV2FromModifiers({
        items: "applyReducersAndExtractMainValue",
      });

      expect(result).toEqual([{
        type: "propertyWithLoadLevel",
        propertyIdentifier: { type: "property", apiName: "items" },
        loadLevel: { type: "applyReducersAndExtractMainValue" },
      }]);
    });

    it("builds selectV2 entries for multiple properties", () => {
      const result = buildSelectV2FromModifiers({
        myStruct: "applyMainValue",
        scores: "applyReducers",
      });

      expect(result).toHaveLength(2);
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
  });
});
