import { defineConfig } from "@osdk/widget.client.unstable";

const Config: {
  id: "widgetTwo";
  name: "Widget Two";
  description: "Second widget";
  type: "workshop";
  parameters: {
    headerText: {
      displayName: "Widget title";
      type: "string";
    };
    showWarning: {
      displayName: "Show warning callout";
      type: "boolean";
    };
  };
  events: {
    updateHeader: {
      displayName: "Update header";
      parameterUpdateIds: ["headerText"];
    };
  };
} = defineConfig({
  id: "widgetTwo",
  name: "Widget Two",
  description: "Second widget",
  type: "workshop",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    showWarning: {
      displayName: "Show warning callout",
      type: "boolean",
    },
  },
  events: {
    updateHeader: {
      displayName: "Update header",
      parameterUpdateIds: ["headerText"] as const,
    },
  },
});

export default Config;
