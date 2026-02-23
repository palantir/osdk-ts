import { defineConfig } from "@osdk/widget.client";

export default defineConfig({
  id: "widgetTwo",
  name: "Widget Two",
  description: "Second widget",
  type: "workshop",
  refreshHostDataOnAction: true,
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
