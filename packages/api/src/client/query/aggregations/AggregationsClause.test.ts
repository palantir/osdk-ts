import type { AggregatableKeys } from "./AggregatableKeys";
import type { AggregationClause } from "./AggregationsClause";

export type huh = AggregatableKeys<
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
  "Todo"
>;

export type Q = AggregationClause<
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
  "Todo"
>;
