import type { GroupByClause } from "./GroupByClause";

export type F = GroupByClause<
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
