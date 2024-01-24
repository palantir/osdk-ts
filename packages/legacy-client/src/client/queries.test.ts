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

import type { QueryThreeDimensionalAggregation } from "@osdk/gateway/types";
import { createClientContext, isOk } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import {
  MOCK_ORIGIN,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import {
  assert,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import type { ObjectSet, Range } from "../client/index.js";
import { expectFetchToBeCalledWithBody } from "../util/test/expectUtils.js";
import type { Todo } from "../util/test/index.js";
import { unwrapResultOrThrow } from "../util/test/resultUtils.js";
import type {
  ThreeDimensionalAggregation,
  TwoDimensionalAggregation,
} from "./baseTypes/index.js";
import { LocalDate, Timestamp } from "./baseTypes/index.js";
import { createBaseOsdkObjectSet } from "./objectSets/OsdkObjectSet.js";
import type { OsdkLegacyObjectFrom } from "./OsdkLegacyObject.js";
import type { Queries, QueryReturnType } from "./queries.js";
import { createQueryProxy } from "./queryProxy.js";

describe("Queries", () => {
  let client: ClientContext<MockOntology>;
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let queries: Queries<MockOntology>;

  beforeEach(() => {
    try {
      fetch = vi.fn();
      client = createClientContext(
        MockOntology,
        MOCK_ORIGIN,
        () => "Token",
        undefined,
        fetch,
      );
      queries = createQueryProxy<MockOntology>(client);
    } catch (e) {
      console.error(e);
    }
  });

  describe("proxy", () => {
    it("converts data to and from the wire shapes", async () => {
      const nowLocalDate = LocalDate.now();
      const nowTimestamp = Timestamp.now();

      const todo: Todo = {
        __apiName: "Todo",
        __primaryKey: "todoPrimaryKey",
      } as Todo;
      const todoObjectSet = createBaseOsdkObjectSet(client, "Todo");
      mockFetchResponse(fetch, { value: todo });

      const response = await queries.queryTakesAllParameterTypes({
        unionNonNullable: "string",
        double: 0,
        float: 0,
        integer: 0,
        long: 0,
        attachment: undefined,
        boolean: false,
        date: nowLocalDate,
        string: "",
        timestamp: nowTimestamp,
        object: todo,
        objectSet: todoObjectSet,
        array: ["string"],
        set: new Set(["string"]),
        struct: { name: "name" /* id not required */ },
        twoDimensionalAggregation: {
          groups: [{ key: "foo", value: 1 }],
        },
        threeDimensionalAggregation: {
          groups: [{
            key: { startValue: nowLocalDate },
            value: [{ key: { startValue: nowTimestamp }, value: nowLocalDate }],
          }],
        },
        // unionNullable not required
      });

      expectFetchToBeCalledWithBody(
        fetch,
        `Ontology/queries/queryTakesAllParameterTypes/execute`,
        {
          "parameters": {
            "unionNonNullable": "string",
            "double": 0,
            "float": 0,
            "integer": 0,
            "long": 0,
            "boolean": false,
            "date": nowLocalDate.toISOString(),
            "string": "",
            "timestamp": nowTimestamp.toISOString(),
            "object": "todoPrimaryKey",
            "objectSet": { "type": "base", "objectType": "Todo" },
            "array": ["string"],
            "set": ["string"],
            "struct": { "name": "name" },
            "twoDimensionalAggregation": {
              "groups": [{ "key": "foo", "value": 1 }],
            },
            "threeDimensionalAggregation": {
              "groups": [{
                "key": { "startValue": nowLocalDate.toISOString() },
                "value": [{
                  "key": { "startValue": nowTimestamp.toISOString() },
                  "value": nowLocalDate.toISOString(),
                }],
              }],
            },
          },
        },
      );

      assert(response.type === "ok");
      expect(response.value.value.__apiName).toEqual("Todo");
    });

    it("converts data to and from the wire shapes primaryKey", async () => {
      const nowLocalDate = LocalDate.now();
      const nowTimestamp = Timestamp.now();

      const todoObjectSet = createBaseOsdkObjectSet(client, "Todo");
      const mockTodoObject: OsdkLegacyObjectFrom<typeof MockOntology, "Todo"> =
        {
          __apiName: "Todo",
          __primaryKey: "1",
        } as unknown as Todo;

      mockFetchResponse(fetch, { value: mockTodoObject });

      const response = await queries.queryTakesAllParameterTypes({
        unionNonNullable: "string",
        double: 0,
        float: 0,
        integer: 0,
        long: 0,
        attachment: undefined,
        boolean: false,
        date: nowLocalDate,
        string: "",
        timestamp: nowTimestamp,
        object: "todoPrimaryKey",
        objectSet: todoObjectSet,
        array: ["string"],
        set: new Set(["string"]),
        struct: { name: "name" /* id not required */ },
        twoDimensionalAggregation: {
          groups: [{ key: "foo", value: 1 }],
        },
        threeDimensionalAggregation: {
          groups: [{
            key: { startValue: nowLocalDate },
            value: [{ key: { startValue: nowTimestamp }, value: nowLocalDate }],
          }],
        },
        // unionNullable not required
      });

      expectFetchToBeCalledWithBody(
        fetch,
        `Ontology/queries/queryTakesAllParameterTypes/execute`,
        {
          "parameters": {
            "unionNonNullable": "string",
            "double": 0,
            "float": 0,
            "integer": 0,
            "long": 0,
            "boolean": false,
            "date": nowLocalDate.toISOString(),
            "string": "",
            "timestamp": nowTimestamp.toISOString(),
            "object": "todoPrimaryKey",
            "objectSet": { "type": "base", "objectType": "Todo" },
            "array": ["string"],
            "set": ["string"],
            "struct": { "name": "name" },
            "twoDimensionalAggregation": {
              "groups": [{ "key": "foo", "value": 1 }],
            },
            "threeDimensionalAggregation": {
              "groups": [{
                "key": { "startValue": nowLocalDate.toISOString() },
                "value": [{
                  "key": { "startValue": nowTimestamp.toISOString() },
                  "value": nowLocalDate.toISOString(),
                }],
              }],
            },
          },
        },
      );

      assert(response.type === "ok");
      expect(response.value.value.__apiName).toEqual("Todo");
    });

    it("accepts objects as PK-only inside a struct and set", async () => {
      const mockTodoObject: OsdkLegacyObjectFrom<typeof MockOntology, "Todo"> =
        {
          __apiName: "Todo",
          __primaryKey: "1",
        } as unknown as Todo;

      mockFetchResponse(fetch, { value: mockTodoObject });

      const response = await queries.queryTakesNestedObjects({
        struct: { object: mockTodoObject.__primaryKey },
        set: new Set([mockTodoObject.__primaryKey]),
      });

      expectFetchToBeCalledWithBody(
        fetch,
        `Ontology/queries/queryTakesNestedObjects/execute`,
        {
          parameters: {
            struct: { object: mockTodoObject.__primaryKey },
            set: [mockTodoObject.__primaryKey],
          },
        },
      );

      expect(isOk(response)).toBe(true);
    });

    it("supports queries that do not require params", async () => {
      mockFetchResponse(fetch, { value: 1 });
      const response = await queries.queryTakesNoParameters();

      const value = unwrapResultOrThrow(response);
      expect(value).toEqual({ value: 1 });
    });

    it("handles aggregation return types", async () => {
      mockFetchResponse(
        fetch,
        {
          value: {
            groups: [{ groups: [{ key: false, value: 4 }], key: "s1" }],
          } satisfies QueryThreeDimensionalAggregation,
        },
      );
      const response = await queries.queryReturnsAggregation();

      const value = unwrapResultOrThrow(response);
      expect(value).toEqual({
        value: {
          groups: [{ key: "s1", value: [{ key: false, value: 4 }] }],
        },
      });
    });
  });

  describe("type tests", () => {
    it("infers the proper return type", () => {
      type q = QueryReturnType<
        typeof MockOntology,
        "queryTakesAllParameterTypes"
      >;

      expectTypeOf<
        QueryReturnType<typeof MockOntology, "queryTakesAllParameterTypes">
      >().toMatchTypeOf<OsdkLegacyObjectFrom<typeof MockOntology, "Todo">>();

      expectTypeOf<
        QueryReturnType<typeof MockOntology, "queryTakesNoParameters">
      >().toMatchTypeOf<number | undefined>();
    });

    it("infers parameters", () => {
      expectTypeOf<
        Parameters<Queries<typeof MockOntology>["queryTakesNoParameters"]>
      >().toMatchTypeOf<[]>();

      expectTypeOf<
        Parameters<Queries<typeof MockOntology>["queryTakesAllParameterTypes"]>
      >().toMatchTypeOf<[{
        double: number;
        float: number;
        integer: number;
        long: number;
        attachment: any;
        boolean: boolean;
        date: LocalDate;
        string: string;
        timestamp: Timestamp;
        object: Todo | Todo["__primaryKey"];
        objectSet: ObjectSet<Todo>;
        array: string[];
        set: Set<string>;
        unionNonNullable: string | number;
        unionNullable?: string | number;
        struct: {
          name: string;
          id?: number;
        };
        twoDimensionalAggregation: TwoDimensionalAggregation<string, number>;
        threeDimensionalAggregation: ThreeDimensionalAggregation<
          Range<LocalDate>,
          Range<Timestamp>,
          LocalDate
        >;
      }]>();
    });
  });

  it("has an enumerable list of queries", () => {
    const queryProxy = createQueryProxy(client);
    expect(Object.getOwnPropertyNames(queryProxy)).toMatchInlineSnapshot(`
      [
        "queryTakesNoParameters",
        "queryReturnsAggregation",
        "queryTakesAllParameterTypes",
        "queryTakesNestedObjects",
      ]
    `);
  });
});
