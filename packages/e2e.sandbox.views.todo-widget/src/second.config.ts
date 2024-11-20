import type { ViewConfig } from "@osdk/views-client.unstable";

export default {
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
} as const satisfies ViewConfig;
