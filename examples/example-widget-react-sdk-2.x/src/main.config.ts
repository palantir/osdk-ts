import { defineConfig } from "@osdk/widget-client.unstable";

export default defineConfig({
  type: "workshop",
  rid: "ri.viewregistry.main.view.fake",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
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
