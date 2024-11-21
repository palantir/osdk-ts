import { defineConfig } from "@osdk/widget-client.unstable";

export default defineConfig({
  rid: "ri.viewregistry..view.0000-0000-0000-0000",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    datasetRid: {
      displayName: "Dataset RID",
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
      parameterUpdateIds: ["headerText"],
    },
    updateTodoItems: {
      displayName: "Update todo items",
      parameterUpdateIds: ["todoItems"],
    },
  },
});
