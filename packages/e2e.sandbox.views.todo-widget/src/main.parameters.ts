import type { ViewConfig } from "@osdk/views-client.unstable";

const MainConfig = {
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
export default MainConfig;
