import type { OntologyDefinition } from "#ontology";
import { expectType } from "ts-expect";
import { createThinClient } from "../createThinClient";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts";
import { aggregateOrThrow } from "./aggregateOrThrow";

const mockOntology = {
  metadata: undefined as any,
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

// export so its not removed
export async function test1() {
  const thinClient = createThinClient(
    mockOntology as MockOntology,
    "host.com",
    () => "",
    fetch,
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
  expectType<never>(notGrouped.other);

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
}

// export so its not removed
export async function test2() {
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
  > = undefined as any;

  expectType<"approximateDistinct">(f.select.locationCity);
}
