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
import type { AggregateObjectSetResponseV2 } from "@osdk/gateway/types";
import { createClientContext } from "@osdk/shared.net";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { describe, it, type Mock, vi } from "vitest";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts.js";
import { USER_AGENT } from "../util/UserAgent.js";
import { aggregateOrThrow } from "./aggregateOrThrow.js";

interface TodoDef extends ObjectTypeDefinition<"Todo"> {
  type: "object";
  apiName: "Todo";
  links: {};
  primaryKeyType: "double";
  properties: {
    text: {
      type: "string";
    };
    id: {
      type: "double";
    };
    priority: {
      type: "double";
    };
    other: {
      type: "string";
    };
  };
}

const Todo: TodoDef = {
  type: "object",
  apiName: "Todo",
  links: {},
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
    other: {
      type: "string",
    },
  },
};

const mockOntology = {
  metadata: {
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

describe("aggregateOrThrow", () => {
  it("works", async () => {
    const mockFetch: Mock = vi.fn();

    const aggregationResponse: AggregateObjectSetResponseV2 = {
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

    const clientCtx = createClientContext(
      mockOntology as MockOntology,
      "host.com",
      () => "",
      USER_AGENT,
      mockFetch,
    );

    const notGrouped = await aggregateOrThrow(
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

    const grouped = await aggregateOrThrow(
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
        },
      },
    );
    expectType<Array<any>>(grouped);
    expectType<string | undefined>(grouped[0].$group.text);
    expectType<number>(grouped[0].id.approximateDistinct);
    expectType<number>(grouped[0].$count);
  });

  it("works with where: todo", async () => {
    type f = AggregateOpts<
      {
        metadata: any;
        objects: {
          Todo: {
            type: "object";
            apiName: "Todo";
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
