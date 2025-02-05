import { defineConfig } from "@osdk/widget.client.unstable";

const config: {
  id: "widgetOne";
  name: "Widget One";
  description: "First widget";
  type: "workshop";
  parameters: {
    headerText: {
      displayName: "Widget title";
      type: "string";
    };
    datasetRid: {
      displayName: "Dataset RID";
      type: "string";
    };
    showWarning: {
      displayName: "Show warning callout";
      type: "boolean";
    };
    todoItems: {
      displayName: "Todo items";
      type: "array";
      subType: "string";
    };
  };
  events: {
    updateHeader: {
      displayName: "Update header";
      parameterUpdateIds: ["headerText"];
    };
    updateTodoItems: {
      displayName: "Update todo items";
      parameterUpdateIds: ["todoItems"];
    };
  };
} = defineConfig({
  id: "widgetOne",
  name: "Widget One",
  description: "First widget",
  type: "workshop",
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

export default config;
