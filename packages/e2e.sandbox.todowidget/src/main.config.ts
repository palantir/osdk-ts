import { defineConfig } from "@osdk/widget-client.unstable";

export default defineConfig({
  rid: "ri.viewregistry..view.322ac3f9-08f8-456d-80a8-ceb49e145f62",
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
});
