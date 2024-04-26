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
import type { AggregateObjectsResponseV2 } from "@osdk/foundry";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { describe, expectTypeOf, it, type Mock, vi } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import type { GroupByClause } from "../query/index.js";
import type { AggregateOptsThatErrors } from "./aggregate.js";
import { aggregate } from "./aggregate.js";

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

describe("aggregate", () => {
  it("works", async () => {
    const mockFetch: Mock = vi.fn();

    const aggregationResponse: AggregateObjectsResponseV2 = {
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

    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => new Promise((resolve) => resolve(aggregationResponse)),
    });

    const clientCtx = createMinimalClient(
      mockOntology.metadata,
      "https://host.com",
      () => "",
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
        select: {
          text: "approximateDistinct",
          priority: "avg",
          id: ["max", "avg"],
          $count: true,
        },
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
        select: {
          id: "approximateDistinct",
          $count: true,
        },
        groupBy: {
          text: "exact",
          priority: { exactWithLimit: 10 },
          intProp: { ranges: [[1, 2]] },
          shortProp: {
            ranges: [[2, 3], [4, 5]],
          },
          floatProp: { fixedWidth: 10 },
          timestamp: { duration: [10, "seconds"] },
          date: { ranges: [["2024-01-02", "2024-01-09"]] },
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
      AggregateOptsThatErrors<TodoDef, {
        select: {
          id: "approximateDistinct";
          $count: true;
        };
        groupBy: {
          text: "exact";
          priority: { exactWithLimit: 10 };
          intProp: { ranges: [[1, 2]] };
          shortProp: {
            ranges: [[2, 3], [4, 5]];
          };
          floatProp: { fixedWidth: 10 };
        };
      }>
    >({
      select: {
        id: "approximateDistinct",
        $count: true,
      },
      groupBy: {
        text: "exact",
        priority: { exactWithLimit: 10 },
        intProp: { ranges: [[1, 2]] },
        shortProp: {
          ranges: [[2, 3], [4, 5]],
        },
        floatProp: { fixedWidth: 10 },
      },
    });

    expectType<
      AggregateOptsThatErrors<TodoDef, {
        select: {
          id: "approximateDistinct";
          wrongSelectKey: "don't work";
          $count: true;
        };
        groupBy: {
          wrongKey: "don't work";
          text: "exact";
          priority: { exactWithLimit: 10 };
          intProp: { ranges: [[1, 2]] };
          shortProp: {
            ranges: [[2, 3], [4, 5]];
          };
          floatProp: { fixedWidth: 10 };
        };
      }>
    >({
      select: {
        id: "approximateDistinct",
        // @ts-expect-error
        wrongSelectKey: "don't work",
        $count: true,
      },
      groupBy: {
        // @ts-expect-error
        wrongKey: "don't work",
        text: "exact",
        priority: { exactWithLimit: 10 },
        intProp: { ranges: [[1, 2]] },
        shortProp: {
          ranges: [[2, 3], [4, 5]],
        },
        floatProp: { fixedWidth: 10 },
      },
    });

    expectTypeOf<
      typeof aggregate<TodoDef, {
        select: {
          id: "approximateDistinct";
          wrongSelectKey: "wrongKey";
          $count: true;
        };
        groupBy: {
          text: "exact";
          wrongKey: "wrongKey";
          priority: { exactWithLimit: 10 };
          intProp: { ranges: [[1, 2]] };
          shortProp: {
            ranges: [[2, 3], [4, 5]];
          };
          floatProp: { fixedWidth: 10 };
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
        select: {
          id: "approximateDistinct",
          // @ts-expect-error
          wrongSelectKey: "wrongKey",
          $count: true,
        },
        groupBy: {
          text: "exact",
          // @ts-expect-error
          wrongKey: "wrongKey",
          priority: { exactWithLimit: 10 },
          intProp: { ranges: [[1, 2]] },
          shortProp: {
            ranges: [[2, 3], [4, 5]],
          },
          floatProp: { fixedWidth: 10 },
        },
      },
    );

    expectType<GroupByClause<TodoDef>>({
      timestamp: { duration: [10, "seconds"] },
      date: { duration: [1, "years"] },
    });

    // Can't use value greater than 1 for years
    expectType<GroupByClause<TodoDef>>({
      timestamp: { duration: [1, "seconds"] },
      // @ts-expect-error
      date: { duration: [10, "years"] },
    });

    // Can't use arbitrary string for time unit
    expectType<GroupByClause<TodoDef>>({
      // @ts-expect-error
      timestamp: { duration: [1, "nonexistentTimeUnit"] },
      date: { duration: [10, "days"] },
    });

    // Can't use time unit smaller than days for date type
    expectType<GroupByClause<TodoDef>>({
      timestamp: { duration: [10, "seconds"] },
      // @ts-expect-error
      date: { duration: [1, "seconds"] },
    });
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
      select: {
        locationCity: "approximateDistinct",
        text: "approximateDistinct",
      },
    };

    // expectType<"approximateDistinct">(f.select.locationCity);
  });
});
