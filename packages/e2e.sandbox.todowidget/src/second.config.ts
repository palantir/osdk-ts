import { defineConfig } from "@osdk/widget-client.unstable";

const Config = defineConfig({
  rid: "ri.viewregistry..view.1234-0000-0000-0000",
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
      parameterIds: ["headerText"],
    },
  },
});

export default Config;
