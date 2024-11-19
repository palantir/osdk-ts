import type { ViewConfig } from "@osdk/views-client.unstable";

export default {
  rid: "ri.viewregistry..view.0000-0000-0000-0000",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    showWarning: {
      displayName: "Show warning callout",
      type: "boolean",
    },
    todoItems: {
      displayName: "Todo items",
      type: "array",
      subType: "string",
    },
  },
  events: {
    updateHeader: {
      displayName: "Update header",
      parameterIds: ["headerText"],
    },
    updateTodoItems: {
      displayName: "Update todo items",
      parameterIds: ["todoItems"],
    },
  },
} as const satisfies ViewConfig;
