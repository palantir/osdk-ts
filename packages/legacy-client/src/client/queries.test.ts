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

import type { ThinClient } from "@osdk/api";
import { createThinClient } from "@osdk/api";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, expectTypeOf, it, vi } from "vitest";
import { LocalDate, Timestamp } from "../ontology-runtime";
import type { Todo } from "../util/test";
import { MockOntology } from "../util/test";
import {
  expectFetchToBeCalledWithBody,
  mockFetchResponse,
} from "../util/test/fetchUtils";
import { MOCK_ORIGIN } from "../util/test/mocks/mockMetadata";
import { createBaseOsdkObjectSet } from "./objectSets/OsdkObjectSet";
import type { Queries, QueryReturnType } from "./queries";
import { createQueryProxy } from "./queryProxy";

describe("Queries", () => {
  let client: ThinClient<typeof MockOntology>;
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let queries: Queries<typeof MockOntology>;

  beforeEach(() => {
    try {
      fetch = vi.fn();
      client = createThinClient(
        MockOntology,
        MOCK_ORIGIN,
        () => "Token",
        fetch,
      );
      queries = createQueryProxy<typeof MockOntology>(client);
    } catch (e) {
      console.error(e);
    }
  });

  it("converts data to and from the wire", async () => {
    const nowLocalDate = LocalDate.now();
    const nowTimestamp = Timestamp.now();

    const todo: Todo = {} as Todo;
    const todoObjectSet = createBaseOsdkObjectSet(client, "Todo");
    mockFetchResponse(fetch, { value: "resultString" });

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
          "object": {},
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

    expect(response.type).toBe("ok");
    expect((response as any).value.value).toBe("resultString");
  });

  it("type tests", () => {
    expectTypeOf<
      QueryReturnType<typeof MockOntology, "queryTakesAllParameterTypes">
    >().toMatchTypeOf<string>();
  });
});
