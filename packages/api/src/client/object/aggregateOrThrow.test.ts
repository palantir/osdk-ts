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

import type { AggregateObjectSetResponseV2 } from "@osdk/gateway/types";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { describe, expect, it, type Mock, vi } from "vitest";
import type { OntologyDefinition } from "../../ontology";
import { createThinClient } from "../createThinClient";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts";
import { aggregateOrThrow } from "./aggregateOrThrow";

const mockOntology = {
  metadata: {
    ontologyRid: "ri.a.b.c.d",
    ontologyApiName: "apiName",
    userAgent: "",
  },
  objects: {
    Todo: {
      apiName: "Todo",
      links: {},
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
    },
  },
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

    const thinClient = createThinClient(
      mockOntology as MockOntology,
      "host.com",
      () => "",
      mockFetch,
    );

    const notGrouped = await aggregateOrThrow(thinClient, "Todo", {
      select: {
        text: "approximateDistinct",
        priority: "avg",
        id: ["max", "avg"],
      },
    });

    expectType<number>(notGrouped.text.approximateDistinct);
    expectType<number | undefined>(notGrouped.priority.avg);
    expectType<number | undefined>(notGrouped.id.max);
    expectType<number | undefined>(notGrouped.id.avg);
    expectType<
      TypeOf<
        {
          other: any;
        },
        typeof notGrouped
      >
    >(false); // subselect should hide unused keys

    const grouped = await aggregateOrThrow(thinClient, "Todo", {
      select: {
        text: "approximateDistinct",
      },
      groupBy: {
        text: "exact",
      },
    });
    expectType<Array<any>>(grouped);
    expectType<string | undefined>(grouped[0].group.text);
    expectType<number>(grouped[0].values.text.approximateDistinct);
  });

  it("works with where: todo", async () => {
    type f = AggregateOpts<
      {
        metadata: any;
        objects: {
          Todo: {
            apiName: "Todo";
            links: {};
            properties: {
              text: {
                type: "string";
              };
              id: {
                type: "double";
              };
            };
          };
        };
      },
      "Todo",
      {
        locationCity: "approximateDistinct";
        text: "approximateDistinct";
      }
    >;

    const f: AggregateOpts<
      {
        metadata: any;
        objects: {
          Todo: {
            apiName: "Todo";
            links: {};
            properties: {
              text: {
                type: "string";
              };
              id: {
                type: "double";
              };
            };
          };
        };
      },
      "Todo",
      {
        locationCity: "approximateDistinct";
        text: "approximateDistinct";
      }
    > = {
      select: {
        locationCity: "approximateDistinct",
      },
    } as any;

    expectType<"approximateDistinct">(f.select.locationCity);
  });
});
