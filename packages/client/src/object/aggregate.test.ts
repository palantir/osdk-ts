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
  AggregateOpts,
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
  GroupByClause,
  ValidAggregationKeys,
} from "@osdk/api";
import type { Employee } from "@osdk/client.test.ontology";
import {
  objectTypeWithAllPropertyTypes,
  Todo,
} from "@osdk/client.test.ontology";
import type { AggregateObjectsResponseV2 } from "@osdk/internal.foundry.core";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import {
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
  type Mock,
  vi,
} from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { aggregate } from "./aggregate.js";

const metadata = {
  expectsClientVersion: "0.0.0",
  ontologyRid: "ri.a.b.c.d",
  ontologyApiName: "apiName",
  userAgent: "",
};

let mockFetch: Mock;
let clientCtx: MinimalClient;

beforeAll(() => {
  mockFetch = vi.fn();

  mockFetch.mockResolvedValue({
    ok: true,
    status: 200,
    json: () => new Promise((resolve) => resolve(aggregationResponse)),
  });

  clientCtx = createMinimalClient(
    metadata,
    "https://host.com",
    async () => "",
    {},
    mockFetch,
  );
});

const aggregationResponse: AggregateObjectsResponseV2 = {
  accuracy: "APPROXIMATE",
  data: [
    {
      group: {
        string: "hello",
      },
      metrics: [
        {
          name: "string.approximateDistinct",
          value: 1,
        },
        {
          name: "string.exactDistinct",
          value: 1,
        },
        {
          name: "id.max",
          value: 1,
        },
        {
          name: "id.avg",
          value: 1,
        },
      ],
    },
  ],
};

describe("aggregate", () => {
  it("works", async () => {
    expectTypeOf<ValidAggregationKeys<Todo>>().toEqualTypeOf<
      | "$count"
      | "id:min"
      | "id:max"
      | "id:sum"
      | "id:avg"
      | "id:approximateDistinct"
      | "id:exactDistinct"
      | "text:approximateDistinct"
      | "text:exactDistinct"
    >;

    const notGrouped = await aggregate(
      clientCtx,
      objectTypeWithAllPropertyTypes,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "string:approximateDistinct": "unordered",
          "string:exactDistinct": "unordered",
          "id:max": "unordered",
          "id:avg": "unordered",
          "$count": "unordered",
        },
      },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://host.com/api/v2/ontologies/ri.a.b.c.d/objectSets/aggregate",
      {
        body: JSON.stringify({
          "objectSet": { "type": "base", "objectType": "ToDo" },
          "groupBy": [],
          "aggregation": [
            {
              "type": "approximateDistinct",
              "name": "string.approximateDistinct",
              "field": "string",
            },
            {
              "type": "exactDistinct",
              "name": "string.exactDistinct",
              "field": "string",
            },
            { "type": "max", "name": "id.max", "field": "id" },
            { "type": "avg", "name": "id.avg", "field": "id" },
            { "type": "count", "name": "count" },
          ],
        }),
        method: "POST",
        headers: expect.anything(),
      },
    );

    expectType<number>(notGrouped.string.approximateDistinct);
    expectType<number>(notGrouped.string.exactDistinct);
    expectType<number | undefined>(notGrouped.id.max);
    expectType<number | undefined>(notGrouped.id.avg);
    expectType<number>(notGrouped.$count);
    expectType<
      TypeOf<
        {
          other: any;
        },
        typeof notGrouped
      >
    >(false); // subSelect should hide unused keys

    const grouped = await aggregate(
      clientCtx,
      objectTypeWithAllPropertyTypes,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "id:approximateDistinct": "unordered",
          "id:exactDistinct": "unordered",
          "id:max": "unordered",
          "$count": "unordered",
        },
        $groupBy: {
          string: "exact",
          id: { $exactWithLimit: 10 },
          integer: { $ranges: [[1, 2]] },
          short: {
            $ranges: [[2, 3], [4, 5]],
          },
          float: { $fixedWidth: 10 },
          dateTime: { $duration: [10, "seconds"] },
          date: { $ranges: [["2024-01-02", "2024-01-09"]] },
          boolean: "exact",
        },
      },
    );
    expectType<Array<any>>(grouped);
    expectType<string | undefined>(grouped[0].$group.string);
    expectType<number>(grouped[0].id.approximateDistinct);
    expectType<number>(grouped[0].id.exactDistinct);
    expectType<number>(grouped[0].$group.id);
    expectType<number>(grouped[0].$count);
    expectType<{ startValue: number; endValue: number }>(
      grouped[0].$group.integer,
    );
    expectType<{ startValue: number; endValue: number }>(
      grouped[0].$group.short,
    );
    expectType<number | undefined>(grouped[0].$group.float);
    expectType<string | undefined>(grouped[0].$group.dateTime);
    expectType<{ startValue: string; endValue: string }>(
      grouped[0].$group.date,
    );
    expectType<boolean | undefined>(grouped[0].$group.boolean);

    expectType<
      AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
        objectTypeWithAllPropertyTypes,
        {
          $select: {
            "id:approximateDistinct": "unordered";
            "$count": "unordered";
          };
          $groupBy: {
            string: "exact";
            id: { $exactWithLimit: 10 };
            integer: { $ranges: [[1, 2]] };
            short: {
              $ranges: [[2, 3], [4, 5]];
            };
            float: { $fixedWidth: 10 };
          };
        }
      >
    >({
      $select: {
        "id:approximateDistinct": "unordered",
        "$count": "unordered",
      },
      $groupBy: {
        string: "exact",
        id: { $exactWithLimit: 10 },
        integer: { $ranges: [[1, 2]] },
        short: {
          $ranges: [[2, 3], [4, 5]],
        },
        float: { $fixedWidth: 10 },
      },
    });

    expectType<
      AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
        objectTypeWithAllPropertyTypes,
        {
          $select: {
            "id:approximateDistinct": "unordered";
            "wrongSelectKey": "don't work";
            "$count": "unordered";
          };
          $groupBy: {
            wrongKey: "don't work";
            text: "exact";
            id: { $exactWithLimit: 10 };
            integer: { $ranges: [[1, 2]] };
            short: {
              $ranges: [[2, 3], [4, 5]];
            };
            float: { $fixedWidth: 10 };
          };
        }
      >
    >({
      $select: {
        id: "approximateDistinct",
        // @ts-expect-error
        wrongSelectKey: "don't work",
        "$count": "unordered",
      },
      $groupBy: {
        // @ts-expect-error
        wrongKey: "don't work",
        string: "exact",
        id: { $exactWithLimit: 10 },
        integer: { $ranges: [[1, 2]] },
        short: {
          $ranges: [[2, 3], [4, 5]],
        },
        float: { $fixedWidth: 10 },
      },
    });

    expectTypeOf<
      typeof aggregate<objectTypeWithAllPropertyTypes, {
        $select: {
          "id:approximateDistinct": "unordered";
          "wrongSelectKey": "wrong key";
          "$count": "unordered";
        };
        $groupBy: {
          string: "exact";
          wrongKey: "wrongKey";
          id: { $exactWithLimit: 10 };
          integer: { $ranges: [[1, 2]] };
          short: {
            $ranges: [[2, 3], [4, 5]];
          };
          float: { $fixedWidth: 10 };
        };
      }>
    >().toBeCallableWith(
      clientCtx,
      objectTypeWithAllPropertyTypes,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "id:approximateDistinct": "unordered",
          // @ts-expect-error
          "wrongSelectKey": "don't work",
          "$count": "unordered",
        },
        $groupBy: {
          string: "exact",
          // @ts-expect-error
          wrongKey: "wrongKey",
          id: { $exactWithLimit: 10 },
          integer: { $ranges: [[1, 2]] },
          short: {
            $ranges: [[2, 3], [4, 5]],
          },
          float: { $fixedWidth: 10 },
        },
      },
    );

    expectType<GroupByClause<objectTypeWithAllPropertyTypes>>({
      dateTime: { $duration: [10, "seconds"] },
      date: { $duration: [1, "years"] },
    });

    // Can't use value greater than 1 for years
    expectType<GroupByClause<objectTypeWithAllPropertyTypes>>({
      // @ts-expect-error
      date: { $duration: [10, "years"] },
    });

    // Can't use arbitrary string for time unit
    expectType<GroupByClause<objectTypeWithAllPropertyTypes>>({
      // @ts-expect-error
      dateTime: { $duration: [1, "nonexistentTimeUnit"] },
    });

    // Can't use time unit smaller than days for date type
    expectType<GroupByClause<objectTypeWithAllPropertyTypes>>({
      // @ts-expect-error
      date: { $duration: [1, "seconds"] },
    });
  });

  it("works with $orderBy (no groups)", async () => {
    const notGrouped = await aggregate(
      clientCtx,
      objectTypeWithAllPropertyTypes,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "string:approximateDistinct": "asc",
          "id:exactDistinct": "asc",
          "id:avg": "desc",
          "id:max": "asc",
          "$count": "unordered",
        },
      },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://host.com/api/v2/ontologies/ri.a.b.c.d/objectSets/aggregate",
      {
        body: JSON.stringify({
          "objectSet": { "type": "base", "objectType": "ToDo" },
          "groupBy": [],
          "aggregation": [
            {
              "type": "approximateDistinct",
              "name": "string.approximateDistinct",
              direction: "ASC",
              "field": "string",
            },
            {
              "type": "exactDistinct",
              "name": "id.exactDistinct",
              direction: "ASC",
              "field": "id",
            },
            {
              "type": "avg",
              "name": "id.avg",
              direction: "DESC",
              "field": "id",
            },
            {
              "type": "max",
              "name": "id.max",
              direction: "ASC",
              "field": "id",
            },
            { "type": "count", "name": "count" },
          ],
        }),
        method: "POST",
        headers: expect.anything(),
      },
    );

    expectType<number>(notGrouped.string.approximateDistinct);
    expectType<number>(notGrouped.id.exactDistinct);
    expectType<number>(notGrouped.id.max);
    expectType<number>(notGrouped.id.avg);
    expectType<number>(notGrouped.$count);
    expectType<
      TypeOf<
        {
          other: any;
        },
        typeof notGrouped
      >
    >(false); // subselect should hide unused keys
  });

  it("works with $orderBy (1 group)", async () => {
    const grouped = await aggregate(
      clientCtx,
      objectTypeWithAllPropertyTypes,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "id:max": "desc",
          "string:approximateDistinct": "asc",
          "id:avg": "unordered",
          "$count": "unordered",
          "string:exactDistinct": "desc",
        },
        $groupBy: {
          id: "exact",
        },
      },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://host.com/api/v2/ontologies/ri.a.b.c.d/objectSets/aggregate",
      {
        body: JSON.stringify({
          "objectSet": { "type": "base", "objectType": "ToDo" },
          "groupBy": [{ "type": "exact", "field": "id" }],
          "aggregation": [
            {
              "type": "max",
              "name": "id.max",
              direction: "DESC",
              "field": "id",
            },
            {
              "type": "approximateDistinct",
              "name": "string.approximateDistinct",
              direction: "ASC",
              "field": "string",
            },
            { "type": "avg", "name": "id.avg", "field": "id" },
            { "type": "count", "name": "count" },
            {
              "type": "exactDistinct",
              "name": "string.exactDistinct",
              direction: "DESC",
              "field": "string",
            },
          ],
        }),
        method: "POST",
        headers: expect.anything(),
      },
    );

    expectType<number>(grouped[0].string.approximateDistinct);
    expectType<number>(grouped[0].id.max);
    expectType<number>(grouped[0].id.avg);
    expectType<number>(grouped[0].$count);
    expectType<number>(grouped[0].string.exactDistinct);
    expectType<
      TypeOf<
        {
          other: any;
        },
        typeof grouped
      >
    >(false); // subselect should hide unused keys
  });

  it("prohibits ordered select with multiple groupBy", async () => {
    aggregate(
      clientCtx,
      Todo,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          // @ts-expect-error
          "id:max": "desc",
          // @ts-expect-error
          "text:approximateDistinct": "asc",
          // @ts-expect-error
          "text:exactDistinct": "desc",
          "id:avg": "unordered",
          "$count": "unordered",
        },
        $groupBy: {
          id: "exact",
          timestamp: "exact",
        },
      },
    );
  });

  it("works with where: todo", async () => {
    const f: AggregateOpts<
      Employee
    > = {
      $select: {
        "office:approximateDistinct": "unordered",
      },
    };
  });
});
