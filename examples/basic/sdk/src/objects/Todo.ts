import type { ObjectDefinition } from "@osdk/api";

export const Todo = {
  apiName: "Todo",
  properties: {
    id: {
      type: "double",
    },
    priority: {
      type: "double",
    },
    complete: {
      type: "boolean",
    },
    text: {
      type: "string",
    },
  },
  links: {},
} satisfies ObjectDefinition<"Todo", "Todo">;
