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

import type { ObjectTypeDefinition, OntologyDefinition } from "@osdk/api";
import type { AggregateObjectsResponseV2 } from "@osdk/internal.foundry";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { describe, expect, expectTypeOf, it, type Mock, vi } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { GroupByClause } from "../query/aggregations/GroupByClause.js";
import { aggregate } from "./aggregate.js";
import type {
  AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
} from "./AggregateOptsThatErrors.js";

interface TodoDef extends ObjectTypeDefinition<"Todo"> {
  type: "object";
  apiName: "Todo";
  links: {};
  primaryKeyApiName: "id";
  primaryKeyType: "double";
  properties: {
    text: {
      type: "string";
    };
    id: {
      type: "double";
    };
    intProp: {
      type: "integer";
    };
    floatProp: {
      type: "float";
    };
    shortProp: {
      type: "short";
    };
    byteProp: {
      type: "byte";
    };
    decimalProp: {
      type: "decimal";
    };
    priority: {
      type: "double";
    };
    date: {
      type: "datetime";
    };
    timestamp: {
      type: "timestamp";
    };
    other: {
      type: "string";
    };
    boolean: {
      type: "boolean";
    };
  };
}

const Todo: TodoDef = {
  type: "object",
  apiName: "Todo",
  links: {},
  primaryKeyApiName: "id",
  primaryKeyType: "double",
  properties: {
    text: {
      type: "string",
    },
    id: {
      type: "double",
    },
    priority: {
      type: "double",
    },
    intProp: {
      type: "integer",
    },
    floatProp: {
      type: "float",
    },
    shortProp: {
      type: "short",
    },
    byteProp: {
      type: "byte",
    },
    decimalProp: {
      type: "decimal",
    },
    date: {
      type: "datetime",
    },
    timestamp: {
      type: "timestamp",
    },
    other: {
      type: "string",
    },
    boolean: {
      type: "boolean",
    },
  },
};

const mockOntology = {
  metadata: {
    expectsClientVersion: "0.0.0",
    ontologyRid: "ri.a.b.c.d",
    ontologyApiName: "apiName",
    userAgent: "",
  },
  objects: {
    Todo,
  },
  actions: {},
  queries: {},
} satisfies OntologyDefinition<"Todo">;
type mockOntology = typeof mockOntology;
interface MockOntology extends mockOntology {}

const aggregationResponse: AggregateObjectsResponseV2 = {
  accuracy: "APPROXIMATE",
  data: [
    {
      group: {
        text: "hello",
      },
      metrics: [
        {
          name: "text.approximateDistinct",
          value: 1,
        },
        {
          name: "priority.avg",
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
    const mockFetch: Mock = vi.fn();

    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => new Promise((resolve) => resolve(aggregationResponse)),
    });

    const clientCtx = createMinimalClient(
      mockOntology.metadata,
      "https://host.com",
      async () => "",
      {},
      mockFetch,
    );

    const notGrouped = await aggregate(
      clientCtx,
      Todo,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "text:approximateDistinct": "unordered",
          "priority:avg": "unordered",
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
              "name": "text.approximateDistinct",
              "field": "text",
            },
            { "type": "avg", "name": "priority.avg", "field": "priority" },
            { "type": "max", "name": "id.max", "field": "id" },
            { "type": "avg", "name": "id.avg", "field": "id" },
            { "type": "count", "name": "count" },
          ],
        }),
        method: "POST",
        headers: expect.anything(),
      },
    );

    expectType<number>(notGrouped.text.approximateDistinct);
    expectType<number | undefined>(notGrouped.priority.avg);
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
    >(false); // subselect should hide unused keys

    const grouped = await aggregate(
      clientCtx,
      Todo,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "id:approximateDistinct": "unordered",
          "priority:max": "unordered",
          "$count": "unordered",
        },
        $groupBy: {
          text: "exact",
          priority: { $exactWithLimit: 10 },
          intProp: { $ranges: [[1, 2]] },
          shortProp: {
            $ranges: [[2, 3], [4, 5]],
          },
          floatProp: { $fixedWidth: 10 },
          timestamp: { $duration: [10, "seconds"] },
          date: { $ranges: [["2024-01-02", "2024-01-09"]] },
          boolean: "exact",
        },
      },
    );
    expectType<Array<any>>(grouped);
    expectType<string | undefined>(grouped[0].$group.text);
    expectType<number>(grouped[0].id.approximateDistinct);
    expectType<number>(grouped[0].$group.priority);
    expectType<number>(grouped[0].$count);
    expectType<{ startValue: number; endValue: number }>(
      grouped[0].$group.intProp,
    );
    expectType<{ startValue: number; endValue: number }>(
      grouped[0].$group.shortProp,
    );
    expectType<number>(grouped[0].$group.floatProp);
    expectType<string>(grouped[0].$group.timestamp);
    expectType<{ startValue: string; endValue: string }>(
      grouped[0].$group.date,
    );
    expectType<boolean>(grouped[0].$group.boolean);

    expectType<
      AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<TodoDef, {
        $select: {
          "id:approximateDistinct": "unordered";
          "$count": "unordered";
        };
        $groupBy: {
          text: "exact";
          priority: { $exactWithLimit: 10 };
          intProp: { $ranges: [[1, 2]] };
          shortProp: {
            $ranges: [[2, 3], [4, 5]];
          };
          floatProp: { $fixedWidth: 10 };
        };
      }>
    >({
      $select: {
        "id:approximateDistinct": "unordered",
        "$count": "unordered",
      },
      $groupBy: {
        text: "exact",
        priority: { $exactWithLimit: 10 },
        intProp: { $ranges: [[1, 2]] },
        shortProp: {
          $ranges: [[2, 3], [4, 5]],
        },
        floatProp: { $fixedWidth: 10 },
      },
    });

    expectType<
      AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<TodoDef, {
        $select: {
          "id:approximateDistinct": "unordered";
          "wrongSelectKey": "don't work";
          "$count": "unordered";
        };
        $groupBy: {
          wrongKey: "don't work";
          text: "exact";
          priority: { $exactWithLimit: 10 };
          intProp: { $ranges: [[1, 2]] };
          shortProp: {
            $ranges: [[2, 3], [4, 5]];
          };
          floatProp: { $fixedWidth: 10 };
        };
      }>
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
        text: "exact",
        priority: { $exactWithLimit: 10 },
        intProp: { $ranges: [[1, 2]] },
        shortProp: {
          $ranges: [[2, 3], [4, 5]],
        },
        floatProp: { $fixedWidth: 10 },
      },
    });

    expectTypeOf<
      typeof aggregate<TodoDef, {
        $select: {
          "id:approximateDistinct": "unordered";
          "wrongSelectKey": "wrong key";
          "$count": "unordered";
        };
        $groupBy: {
          text: "exact";
          wrongKey: "wrongKey";
          priority: { $exactWithLimit: 10 };
          intProp: { $ranges: [[1, 2]] };
          shortProp: {
            $ranges: [[2, 3], [4, 5]];
          };
          floatProp: { $fixedWidth: 10 };
        };
      }>
    >().toBeCallableWith(
      clientCtx,
      Todo,
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
          text: "exact",
          // @ts-expect-error
          wrongKey: "wrongKey",
          priority: { $exactWithLimit: 10 },
          intProp: { $ranges: [[1, 2]] },
          shortProp: {
            $ranges: [[2, 3], [4, 5]],
          },
          floatProp: { $fixedWidth: 10 },
        },
      },
    );

    expectType<GroupByClause<TodoDef>>({
      timestamp: { $duration: [10, "seconds"] },
      date: { $duration: [1, "years"] },
    });

    // Can't use value greater than 1 for years
    expectType<GroupByClause<TodoDef>>({
      timestamp: { $duration: [1, "seconds"] },
      // @ts-expect-error
      date: { $duration: [10, "years"] },
    });

    // Can't use arbitrary string for time unit
    expectType<GroupByClause<TodoDef>>({
      // @ts-expect-error
      timestamp: { $duration: [1, "nonexistentTimeUnit"] },
      date: { $duration: [10, "days"] },
    });

    // Can't use time unit smaller than days for date type
    expectType<GroupByClause<TodoDef>>({
      timestamp: { $duration: [10, "seconds"] },
      // @ts-expect-error
      date: { $duration: [1, "seconds"] },
    });
  });

  it("works with $orderBy (no groups)", async () => {
    const mockFetch: Mock = vi.fn();

    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => new Promise((resolve) => resolve(aggregationResponse)),
    });

    const clientCtx = createMinimalClient(
      mockOntology.metadata,
      "https://host.com",
      async () => "",
      {},
      mockFetch,
    );

    const notGrouped = await aggregate(
      clientCtx,
      Todo,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "text:approximateDistinct": "asc",
          "priority:avg": "desc",
          "id:max": "asc",
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
              "name": "text.approximateDistinct",
              direction: "ASC",
              "field": "text",
            },
            {
              "type": "avg",
              "name": "priority.avg",
              direction: "DESC",
              "field": "priority",
            },
            {
              "type": "max",
              "name": "id.max",
              direction: "ASC",
              "field": "id",
            },
            { "type": "avg", "name": "id.avg", "field": "id" },
            { "type": "count", "name": "count" },
          ],
        }),
        method: "POST",
        headers: expect.anything(),
      },
    );

    expectType<number>(notGrouped.text.approximateDistinct);
    expectType<number>(notGrouped.priority.avg);
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
    const mockFetch: Mock = vi.fn();

    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => new Promise((resolve) => resolve(aggregationResponse)),
    });

    const clientCtx = createMinimalClient(
      mockOntology.metadata,
      "https://host.com",
      async () => "",
      {},
      mockFetch,
    );

    const grouped = await aggregate(
      clientCtx,
      Todo,
      {
        type: "base",
        objectType: "ToDo",
      },
      {
        $select: {
          "id:max": "desc",
          "text:approximateDistinct": "asc",
          "id:avg": "unordered",
          "$count": "unordered",
        },
        $groupBy: {
          priority: "exact",
        },
      },
    );

    expect(mockFetch).toHaveBeenCalledWith(
      "https://host.com/api/v2/ontologies/ri.a.b.c.d/objectSets/aggregate",
      {
        body: JSON.stringify({
          "objectSet": { "type": "base", "objectType": "ToDo" },
          "groupBy": [{ "type": "exact", "field": "priority" }],
          "aggregation": [
            {
              "type": "max",
              "name": "id.max",
              direction: "DESC",
              "field": "id",
            },
            {
              "type": "approximateDistinct",
              "name": "text.approximateDistinct",
              direction: "ASC",
              "field": "text",
            },
            { "type": "avg", "name": "id.avg", "field": "id" },
            { "type": "count", "name": "count" },
          ],
        }),
        method: "POST",
        headers: expect.anything(),
      },
    );

    expectType<number>(grouped[0].text.approximateDistinct);
    expectType<number>(grouped[0].id.max);
    expectType<number>(grouped[0].id.avg);
    expectType<number>(grouped[0].$count);
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
    const clientCtx = createMinimalClient(
      mockOntology.metadata,
      "https://host.com",
      async () => "",
      {},
      vi.fn(),
    );

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
          "id:avg": "unordered",
          "$count": "unordered",
        },
        $groupBy: {
          priority: "exact",
          timestamp: "exact",
        },
      },
    );
  });

  it("works with where: todo", async () => {
    type f = AggregateOpts<
      {
        metadata: any;
        objects: {
          Todo: {
            type: "object";
            apiName: "Todo";
            primaryKeyApiName: "id";
            primaryKeyType: "double";
            links: {};
            properties: {
              text: {
                type: "string";
              };
              id: {
                type: "double";
              };
              locationCity: {
                type: "string";
              };
            };
          };
        };
        actions: {};
        queries: {};
      }["objects"]["Todo"]
    > // "locationCity" | "text"
    ;

    const f: AggregateOpts<
      {
        metadata: any;
        objects: {
          Todo: {
            type: "object";
            apiName: "Todo";
            primaryKeyApiName: "id";
            primaryKeyType: "double";
            links: {};
            properties: {
              text: {
                type: "string";
              };
              id: {
                type: "double";
              };
              locationCity: {
                type: "string";
              };
            };
          };
        };
        actions: {};
        queries: {};
      }["objects"]["Todo"]
    > = {
      $select: {
        "locationCity:approximateDistinct": "unordered",
        "text:approximateDistinct": "unordered",
      },
    };

    // expectType<"approximateDistinct">(f.select.locationCity);
  });
});
