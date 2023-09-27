import type { AggregationsResults } from "./AggregationsResults";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups";

type T_AGG_RESULTS_TEST_1 = AggregationsResults<
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
    select: {
      locationCity: "approximateDistinct";
      text: "approximateDistinct";
    };
    groupBy: {
      text: "exact";
    };
  }
>;

type Q = AggregationResultsWithoutGroups<
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
    id: ["max", "sum"];
    text: "approximateDistinct";
  }
>;
